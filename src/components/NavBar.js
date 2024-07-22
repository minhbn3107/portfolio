import { Container, Navbar, Nav } from "react-bootstrap";
import { useState, useEffect } from "react";
import navIcon1 from "../assets/img/icon/nav-icon1.svg";
import navIcon4 from "../assets/img/icon/nav-icon4.svg";

function NavBar() {
    const [activeLink, setActiveLink] = useState("home");
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", onScroll);

        return window.removeEventListener("scroll", onScroll);
    }, []);

    const onUpdateLinkActive = (value) => {
        setActiveLink(value);
    };

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link
                            href="#home"
                            className={
                                activeLink === "home"
                                    ? "active navbar-link"
                                    : "navbar-link"
                            }
                            onClick={() => onUpdateLinkActive("home")}
                        >
                            Home
                        </Nav.Link>
                        <Nav.Link
                            href="#skills"
                            className={
                                activeLink === "skills"
                                    ? "active navbar-link"
                                    : "navbar-link"
                            }
                            onClick={() => onUpdateLinkActive("skills")}
                        >
                            Skills
                        </Nav.Link>
                        <Nav.Link
                            href="#projects"
                            className={
                                activeLink === "projects"
                                    ? "active navbar-link"
                                    : "navbar-link"
                            }
                            onClick={() => onUpdateLinkActive("projects")}
                        >
                            Projects
                        </Nav.Link>
                        <Nav.Link
                            href="#contact"
                            className={
                                activeLink === "contact"
                                    ? "active navbar-link"
                                    : "navbar-link"
                            }
                            onClick={() => onUpdateLinkActive("contact")}
                        >
                            Contact
                        </Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a
                                href="https://www.linkedin.com/in/minhbuingoc31072003/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={navIcon1} alt="" />
                            </a>
                            <a
                                href="https://github.com/minhbn3107"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={navIcon4} alt="" />
                            </a>
                        </div>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
