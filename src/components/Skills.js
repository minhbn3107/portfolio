import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";
import TrackVisibility from "react-on-screen";
import { Code, Lightbulb, Tools, Translate } from "react-bootstrap-icons";

function Skills() {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    const skillsData = [
        {
            category: "Programming Languages",
            icon: <Code />,
            items: ["JavaScript", "TypeScript", "Java", "Python"],
        },
        {
            category: "Tools & Frameworks",
            icon: <Tools />,
            items: [
                "React",
                "NextJS",
                "NodeJS",
                "MongoDB",
                "Prisma",
                "Maven",
                "Scrapy",
                "NumPy",
                "Pandas",
                "GitHub",
            ],
        },
        {
            category: "Soft Skills",
            icon: <Lightbulb />,
            items: [
                "Problem Solving",
                "Analytical Thinking",
                "Attention to Detail",
            ],
        },
        {
            category: "Language Skills",
            icon: <Translate />,
            items: [
                "English Comprehension",
                "Basic Writing",
                "Basic Communication",
            ],
        },
    ];

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <TrackVisibility>
                            {({ isVisible }) => (
                                <div
                                    className={
                                        isVisible
                                            ? "animate__animated animate__fadeInLeft animate__delay-0.5s skill-bx"
                                            : "skill-bx"
                                    }
                                >
                                    <h2>Skills</h2>
                                    <Carousel
                                        responsive={responsive}
                                        infinite={true}
                                        className="skill-slider"
                                    >
                                        {skillsData.map(
                                            (skillCategory, index) => (
                                                <div
                                                    key={index}
                                                    className="skill-category"
                                                >
                                                    <div className="skill-icon">
                                                        {skillCategory.icon}
                                                    </div>
                                                    <h3>
                                                        {skillCategory.category}
                                                    </h3>
                                                    <ul>
                                                        {skillCategory.items.map(
                                                            (
                                                                item,
                                                                itemIndex
                                                            ) => (
                                                                <li
                                                                    key={
                                                                        itemIndex
                                                                    }
                                                                >
                                                                    {item}
                                                                </li>
                                                            )
                                                        )}
                                                    </ul>
                                                </div>
                                            )
                                        )}
                                    </Carousel>
                                </div>
                            )}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} alt="" />
        </section>
    );
}

export default Skills;
