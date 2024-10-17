import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../../styles/components/Header/Header.css'

export default function Header() {
  return (
    <>
        <Navbar fixed="top" bg="dark" data-bs-theme="dark"className="custom-navbar">
            <Container>
                <Nav className="me-auto">
                    <Nav.Link href="#home" className="custom-text">About me</Nav.Link>
                    <Nav.Link href="#home" className="custom-text">Skills</Nav.Link>
                    <Nav.Link href="#features" className="custom-text">Project</Nav.Link>
                    <Nav.Link href="#pricing" className="custom-text">Career</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    </>
  );
}
