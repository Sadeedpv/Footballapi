import React, { useEffect } from 'react'
import axios from 'axios'

function Transfer() {

  useEffect(() =>{
    axios({
      method: 'GET',
      url: 'https://v3.football.api-sports.io/transfers/barcelona',
      headers: {
        'X-RapidAPI-Key': '8117548a3378ce1494b9645e45f8ae6b',
        'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
      }
    }).then(res =>{
      console.log(res.data)
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
    }}>Transfer News</div>
    </>
  )
}

export default Transfer