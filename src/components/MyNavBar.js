import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function MyNavBar() {
    const logo = require('../assets/logo1.png');
    return (
        <Navbar bg="light" expand="lg">
            <Container >
                {/*<img style={{height: 80, marginRight: 10}} src="data:image/png;base64,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"></img>*/}
                <img style={{height: 110, marginRight: 10}} src={logo}></img>
                <Navbar.Brand href="#home"></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Consultoria</Nav.Link>
                        <Nav.Link href="#link">Capacitacion</Nav.Link>
                        <Nav.Link href="#link">Docencia</Nav.Link>
                        <NavDropdown title="Contacto" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MyNavBar;