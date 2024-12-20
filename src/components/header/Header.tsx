import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../../styles/components/header/Header.css';

export default function Header() {
  const handleScrollTo = (sectionId: string) => {
    const targetElement = document.querySelector(`#${sectionId}`) as HTMLElement;
    if (targetElement) {
      const location = targetElement.offsetTop;
      console.log('y좌표', location);
      targetElement.scrollIntoView({
        behavior:'smooth',
        block: 'start',
      });
      } else {
        console.log('y좌표 없음')
      }
  };

  return (
    <>
      <Navbar fixed="top" bg="dark" data-bs-theme="dark" className="custom-navbar">
        <Container>
          <Nav className="me-auto">
            <div
              onClick={() => handleScrollTo("aboutme")}
              style={{ 
                textDecoration: "none",
                color: "white",
                fontWeight: "bolder",
                fontStyle: "italic",
                marginTop: "10px",
                marginRight: "15px",
                cursor: "pointer"
              }}
            >
              About me
            </div>
            <div
              onClick={() => handleScrollTo("career")}
              style={{
                textDecoration: "none",
                color: "white",
                fontWeight: "bolder",
                fontStyle: "italic",
                marginTop: "10px",
                marginRight: "15px",
                cursor: "pointer"
              }}
            >
              Career
            </div>
            <div
              onClick={() => handleScrollTo("skills")}
              style={{
                textDecoration: "none",
                color: "white",
                fontWeight: "bolder",
                fontStyle: "italic",
                marginTop: "10px",
                marginRight: "15px",
                cursor: "pointer"
              }}
            >
              Skills
            </div>
            <div
              onClick={() => handleScrollTo("project")}
              style={{
                textDecoration: "none",
                color: "white",
                fontWeight: "bolder",
                fontStyle: "italic",
                marginTop: "10px",
                cursor: "pointer"
              }}
            >
              Project
            </div>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
