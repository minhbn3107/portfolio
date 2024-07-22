import { Col, Container, Row } from "react-bootstrap";
import navIcon1 from "../assets/img/icon/nav-icon1.svg";
import navIcon4 from "../assets/img/icon/nav-icon4.svg";

function Footer() {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col sm={6}></Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a
                                href="https://www.linkedin.com/in/minhbuingoc31072003/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={navIcon1} alt="linkedin" />
                            </a>
                            <a
                                href="https://github.com/minhbn3107"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={navIcon4} alt="github" />
                            </a>
                        </div>
                        <p>@CopyRight 2024. All Right Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
