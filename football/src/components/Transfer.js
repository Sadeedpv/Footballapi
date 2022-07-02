import React, { useEffect } from 'react'
import axios from 'axios'

function Transfer() {

  const [state, setstate] = React.useState();
  const [name, setname] = React.useState('Chelsea');

  useEffect(() =>{
    axios({
      method: 'GET',
      url: `https://v3.football.api-sports.io/teams/?name=${name}`,
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_FOOTBALL_API_KEY,
        'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
      }
    }).then(res =>{
      console.log(res.data)
      setstate(res.data.response[0].team)
    })

  }, [name])

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

      <input placeholder='Eg: Chelsea' type={'text'} autoComplete='off' value={name} onChange={(e) =>{
        setname(e.target.value)
      }} style={{
        padding:'10px',
        borderRadius:'7px',
        outline:'none',
        border:'none',
        boxShadow: '2px 1px 36px -8px rgba(0,0,0,0.51)',
        WebkitBoxShadow: '2px 1px 36px -8px rgba(0,0,0,0.51)',
        MozBoxShadow: '2px 1px 36px -8px rgba(0,0,0,0.51)',
        width:'min(60%, 18em)'
      }}/>

      <Player />
    </div>
    </>
  )
}

export default Transfer

function Player(props){
  return(
    <div style={{
      display:'grid',
      placeItems:'center',
      marginTop:'2.2em'
    }}>
      <ul style={{
        listStyle:'none',
        padding:'5px',
      }}>
        <li>1</li>
        <li>2</li>
      </ul>      
    </div>
  )
}