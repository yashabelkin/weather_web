import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/nav.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import weather from '../assets/weather.png';

const NavBar = () => {
  return (
    <>
      <Navbar className='navStyle' fixed="top">
        <Container>
        <img src={weather} alt='logo' style={{height:50}} />

          <Navbar.Brand as={Link} to={"/"} ></Navbar.Brand>

          <Nav className="me-auto">
            
          <Nav.Link as={Link} to={"/"} ><span className='navSpan'>home</span></Nav.Link>

          </Nav>


         

          <Nav>
            <Nav.Link as={Link} to={"/sec"} ><span className='navSpan'>Current Weather</span></Nav.Link>
            <Nav.Link as={Link} to={"/"} ><span className='navSpan'> Forecast </span></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar