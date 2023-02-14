import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react'

function BottomNavBar() {
    const logo = require('../assets/logo-claro.png');
    return (
        <Navbar bg="#1e1e1e" style={{backgroundColor: "#4A80FC"}}>
            <Container>
                <img style={{height: 110, marginRight: 10}} src={logo}></img>
                <Navbar.Brand href="#home"></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home"><a style={{color: "#ffffff"}}>Consultoria</a></Nav.Link>
                        <Nav.Link href="#link"><a style={{color: "#ffffff"}}>Capacitacion</a></Nav.Link>
                        <Nav.Link href="#link"><a style={{color: "#ffffff"}}>Docencia</a></Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default BottomNavBar;