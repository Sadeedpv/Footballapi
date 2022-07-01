import React from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap';

function Navigation() {
  return (
  <Navbar bg="light" expand="lg" className='shadow-5'>
  <Container className='shadow-5'>
    <Navbar.Brand href="#home" style={{
      padding:'10px',
      fonWeight: '700 !important',
      fontSize: '1.8rem',
      marginRight:'5rem'
    }}>Futbol⚽</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home"  style={{
          padding:'10px',
          paddingLeft:'25px',
          color:'#050505',
          fontSize: '1.2rem'
        }}>Transfers</Nav.Link>
        <Nav.Link href="#link" style={{
          padding:'10px',
          paddingLeft:'25px',
          color:'#050505',
          fontSize: '1.2rem'
        }}>Fixtures</Nav.Link>
        <Nav.Link href="#link" style={{
          padding:'10px',
          paddingLeft:'25px',
          color:'#050505',
          fontSize: '1.2rem'
        }}>Standings</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default Navigation
