import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../../styles/components/header/Header.css'
import { Link } from "react-scroll/modules";

export default function Header() {
  return (
    <>
        <Navbar fixed="top" bg="dark" data-bs-theme="dark"className="custom-navbar">
            <Container>
                <Nav className="me-auto">
                    <Link 
                      to="aboutme"
                      smooth={true}
                      duration={500}
                      onSetActive={() => console.log("About me section is now active")}
                      style={{ textDecoration: "none",
                          "color": "white",
                          "fontWeight": "bolder",
                          "fontStyle": "italic",
                          "marginTop": "10px"
                      }}
                    >
                      About me
                    </Link>
                    <Link 
                      to="career"
                      smooth={true}
                      duration={500}
                      style={{ textDecoration: "none",
                          "color": "white",
                          "fontWeight": "bolder",
                          "fontStyle": "italic",
                          "marginTop": "10px",
                          "marginLeft": "15px"
                          
                        }}
                        >
                      Career
                    </Link>
                    <Link 
                      to="skills"
                      smooth={true}
                      duration={500}
                      style={{ textDecoration: "none",
                        "color": "white",
                        "fontWeight": "bolder",
                        "fontStyle": "italic",
                        "marginTop": "10px",
                        "marginLeft": "15px"
                      }}
                      >
                      Skills
                    </Link>
                    <Link 
                      to="project"
                      style={{ textDecoration: "none",
                        "color": "white",
                        "fontWeight": "bolder",
                        "fontStyle": "italic",
                        "marginTop": "10px",
                        "marginLeft": "15px",
                      }}
                      >
                      Project
                    </Link>
                </Nav>
            </Container>
        </Navbar>
    </>
  );
}
