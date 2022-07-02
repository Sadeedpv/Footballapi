import React, { useEffect } from 'react';
import axios from 'axios';
import './card.css';
import football from './football.png'

function Highlights() {
    const [state, setstate] = React.useState();
    useEffect(() =>{
        axios.get(`https://www.scorebat.com/video-api/v3/feed/?token=${process.env.REACT_APP_API_KEY}`).then(res => {
            setstate(res.data.response);
        }).catch(err =>{
            console.log(err)
        })
    }, [])
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
    }}>Recent Highlights</div>
    <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '1em',
    }}>
       {state && state.map((state, key) =>{
        return <Card key={key} imgUrl={state.thumbnail} title={state.title} competition={state.competition} date={state.date} url={state.matchviewUrl}/>
       })}
    </div>
    </>
  )
}


function Card(props){
    return (
        <a href={props.url} className='cardlink'><div className='card'>
            <img src={props.imgUrl} alt='thumbnail' className='img' onError={(e)=>{e.target.onerror = null; e.target.src=football}} />
            <div className='card-content'>
                {props.title}, {props.competition}
            </div>
            <div className='cardfooter'>{props.date}</div>
        </div>
        </a>
    )
}

export default Highlights
