import { Col } from "react-bootstrap";
import navIcon4 from "../assets/img/icon/nav-icon4.svg";

function ProjectCard({
    title,
    description,
    imgURL,
    liveLink,
    gitLink,
    techStack,
}) {
    return (
        <Col sm={6} md={4}>
            <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="proj-link"
            >
                <div className="proj-imgbx">
                    <img src={imgURL} alt="project" />
                    <div className="proj-txtx">
                        <span>{description}</span>
                    </div>
                </div>
                <div className="proj-name">
                    <h4>{title}</h4>
                    <div className="social-icon">
                        <a
                            href={gitLink}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={navIcon4} alt="github" />
                        </a>
                    </div>
                </div>
                <div className="social-icon tech-stack">
                    {techStack?.map((item, index) => (
                        <span key={index} className="tech-icon">
                            <img src={item} alt={`techStack-${index}`} />
                        </span>
                    ))}
                </div>
            </a>
        </Col>
    );
}

export default ProjectCard;
