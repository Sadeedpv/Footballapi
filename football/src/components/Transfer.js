import React, { useEffect } from 'react'
import axios from 'axios'
import {Modal, Button} from 'react-bootstrap'

function Transfer() {

  const [input, setInput] = React.useState('Chelsea');

  const [name, setname] = React.useState('Chelsea');
  const [id, setid] = React.useState(49);
  const [state, setstate] = React.useState();

  useEffect(() =>{
    axios({
      method: 'GET',
      url: `https://v3.football.api-sports.io/teams/?name=${name}`,
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_FOOTBALL_API_KEY,
        'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
      }
    }).then(res =>{
      setid(res.data.response[0].team.id)
    })

  }, [name])

  useEffect(() =>{
    axios({
      method: 'GET',
      url: `https://v3.football.api-sports.io/players/?team=${id}&season=${new Date().getFullYear()}`,
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_FOOTBALL_API_KEY,
        'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
      }
    }).then(res =>{
      setstate(res.data.response)
    })
  }, [id])

  return (
    <>
        <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color:' #4673db',
        marginTop: '1.6em',
        padding:'10px',
        fontSize: '1.8rem',
        fontWeight: 'bold',
        marginBottom:'1.6em',
        textAlign:'center'
    }}>Transfer News</div>

    <div style={{
      display:'grid',
      placeItems:'center',
    }}>
      <p style={{
        opacity: '0.8',
      }}>Enter a team name</p>

      <div className='d-flex'><input placeholder='Eg: Chelsea' type={'text'} autoComplete='off' value={input} onChange={(e) =>{
        setInput(e.target.value)
      }} style={{
        padding:'10px',
        outline:'none',
        border:'none',
        boxShadow: '2px 1px 36px -8px rgba(0,0,0,0.51)',
        WebkitBoxShadow: '2px 1px 36px -8px rgba(0,0,0,0.51)',
        MozBoxShadow: '2px 1px 36px -8px rgba(0,0,0,0.51)',
        width:'min(90%, 55em)'
      }}/><Button variant='primary' onClick={() =>{
        setname(input)
      }} >Submit</Button></div>

      <div style={{
        margin:'1.6em 1em 0em 1em',
        paddingTop:'1.6em',
      }}><p style={{
        opacity: '0.8',
        backgroundColor:'#ccecff',
        textAlign:'center',
        padding:'8px',
        borderLeft:'4px solid blue',
        borderRadius:'6px',
      }}>Click on the players to see their transfer status</p></div>

      {state && state.map((player, index) =>{
        return <Player key={index} id={player.player.id} name={player.player.name} img={player.player.photo} age={player.player.age} nationality={player.player.nationality}/>
      })}
    </div>
    </>
  )
}

export default Transfer

function Player(props){

  const [modalShow, setModalShow] = React.useState(false);

  return(

      <div onClick={() =>{
        setModalShow(true);
      }} style={{
        borderRadius:'7px',
        padding:'1em',
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
        marginTop:'1.2em',
        WebkitBoxXhadow: '4px 10px 26px -11px rgba(0,0,0,0.65)',
        MozBoxShadow: '4px 10px 26px -11px rgba(0,0,0,0.65)',
        boxShadow:' 4px 10px 26px -11px rgba(0,0,0,0.65)',

      }}>

        <img src={props.img} alt='Player photo' height={40} width={40}/>
        <div className='ps-5 ms-5 d-flex align-items-center justify-content-center'><p style={{
          verticalAlign:'middle',
          alignSelf:'center',
          opcaity:'0.8',
        }}>{props.name}</p></div>
  <MyVerticallyCenteredModal
        show={modalShow}
        setModalShow = {setModalShow}
        onHide={() => setModalShow(false)}
        name={props.name}
        age={props.age}
        nationality={props.nationality}
        id={props.id}
      />

      </div>

  )
}

function MyVerticallyCenteredModal(props) {
  const [transfer, settransfer] = React.useState();
  const [show, setshow] = React.useState(props.show);

    useEffect(() =>{
    axios({
      method: 'GET',
      url: `https://v3.football.api-sports.io/transfers/?player=${props.id}`,
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_FOOTBALL_API_KEY,
        'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
      }
    }).then(res =>{
      console.log(res.data.response[0].transfers[0])
      settransfer(res.data.response[0].transfers[0])
    })
  }, [props.id])
  return (
    <Modal
      show={show}
      onHide={() =>{
        setshow(false)
      }}
      
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Latest transfer</h4>
        <p>
          <span className='p-3 fw-bold'>Name: {' '}{props.name}</span><br />
          <span className='p-3 fw-bold'>Age: {' '}{props.age}</span><br />
          <span className='p-3 fw-bold'>Nationality: {' '}{props.nationality}</span><br /> 
          {transfer && ( <>
            <span className='text-danger p-3 fw-bold'>OUT ⬇️:{transfer.teams.out.name} </span>
            <span className='text-primary p-3 fw-bold'>IN ⬆️: {transfer.teams.in.name}</span>
            <span className='text-secondary p-3 fw-bold'>type: {transfer.type}</span> 

          </>)}
        </p>
      </Modal.Body>
      <Modal.Footer>
      </Modal.Footer>
    </Modal>
  );
}