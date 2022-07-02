import React from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap';

function Navigation() {
  const styles =
    {
      padding:'10px',
      paddingLeft:'35px',
      fontSize: '1.2rem'
    }
  
  return (
  <Navbar bg="light" expand="lg" className='shadow-5' style={{
    background: 'rgba( 239, 238, 238, 0.4 )',
    boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
    backdropFilter:' blur( 8.5px )',
    borderRadius: '10px',
    border: '1px solid rgba( 255, 255, 255, 0.18 )'
  }}>

  <Container className='shadow-5'>

    <Navbar.Brand href="#home" onClick={() =>{
      window.location.reload();
    }} style={{
      padding:'10px',
      fonWeight: '700 !important',
      fontSize: '1.8rem',
      marginRight:'5rem'
    }}>Futbol{' '}⚽</Navbar.Brand>

    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home" style={styles}>Transfers</Nav.Link>
        <Nav.Link href="#link" style={styles} onClick={(E) =>{
          E.preventDefault();
          window.scrollTo(0, 14000);
        }}>Fixtures</Nav.Link>
        <Nav.Link href="#link" style={styles} onClick={(e) =>{
          e.preventDefault();
          window.scrollTo(0, 800);
        }}>Standings</Nav.Link>
        <Nav.Link href="#Link" style={styles} onClick={(e) =>{
          e.preventDefault();
          window.scrollTo(0, 1200);
        }}>Highlights</Nav.Link>
        <Nav.Link href="https://Github.com/Sadeedpv" style={styles}>Github</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default Navigation
