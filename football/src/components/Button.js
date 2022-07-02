import React, { useEffect, useRef } from 'react'

function Button() {
    const ref = useRef(null);

    useEffect(() =>{
        window.addEventListener('scroll', handleScroll);
        return () => {window.removeEventListener('scroll')};

        function handleScroll(){
            if (document.documentElement.scrollTop > 800){
                ref.current.style.display = 'block';
            }else{
                ref.current.style.display='none';
            }
        }

    },[])
  return (
    <div style={{
        position: 'fixed',
        bottom: '0',
        right: '0',
        margin: '1em',
        fontSize:"1.5rem",
        borderRadius:'5px',
        backgroundColor:'#c9e9ff',
        padding:'4px 15px 4px 15px',
        textAlign:'center',
        display:'none',
        zIndex: '99999',
    }} ref={ref} onClick={() =>{
        window.scrollTo(0,0);
    }}>&#8593;</div>
  )
}

export default Button