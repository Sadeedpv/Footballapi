import React from 'react'
import football from './football.png'

function Header() {
  return (
    <div style={{
        display: 'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        fontSize: '2.2rem',
        fontWeight: '700',
        padding:'20px',
        textAlign:'center',
        marginTop:'1.5em',
        marginBottom:'1.5em',
        textShadow:' -2px 2px 34px rgba(70,57,255,0.27)'
    }}>

      <img src={football} alt='football illustration' width={500} height={300}/>
        Get updates of your favourite team ⚽
    </div>
  )
}

export default Header