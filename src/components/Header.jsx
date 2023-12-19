import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigateByUrl = useNavigate();
  return (
    <Navbar className="bg-body-tertiary bg-dark">
    <Container>
      <Navbar.Brand href="#home" style={{color:"white",fontSize:"25px"}}>
         <i class="fa-solid fa-video text-warning me-4" onClick={()=>navigateByUrl('/')} ></i>
         Media Player</Navbar.Brand>

    </Container>
  </Navbar>
  )
}

export default Header