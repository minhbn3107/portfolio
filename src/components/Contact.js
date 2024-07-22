import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import contactImg from "../assets/img/icon/contact-img.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
    const [buttonText, setButtonText] = useState("Send");
    const [status, setStatus] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();

        setButtonText("Sending...");
        const formData = new FormData(e.target);
        formData.append("access_key", "fd398552-24a6-4ae1-84d2-7bdbe3b98899");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: json,
        }).then((res) => res.json());

        setButtonText("Send");
        toast("Your Information has been sent");
        if (res.success) {
            setStatus({ success: true, message: "Message sent successfully" });
        } else {
            setStatus({
                success: false,
                message: "Something went wrong, please try again later!",
            });
        }
    };

    return (
        <section className="contact" id="contact">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src={contactImg} alt="Contact Us" />
                    </Col>
                    <Col md={6}>
                        <h2>Get in touch</h2>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input
                                        type="text"
                                        placeholder="First Name"
                                        name="firstName"
                                    />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input
                                        type="text"
                                        placeholder="Last Name"
                                        name="lastName"
                                    />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input
                                        type="email"
                                        placeholder="Email Address"
                                        name="email"
                                    />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input
                                        type="telephone"
                                        placeholder="Phone No."
                                        name="telephone"
                                    />
                                </Col>
                                <Col sm={12} className="px-1">
                                    <textarea
                                        rows="6"
                                        placeholder="Message"
                                        name="message"
                                    ></textarea>
                                    <button type="submit">
                                        <span>{buttonText}</span>
                                    </button>
                                </Col>
                            </Row>
                        </form>
                    </Col>
                    {status.message && (
                        <Col>
                            <p
                                className={
                                    status.success === false
                                        ? "danger"
                                        : "success"
                                }
                            >
                                {status.message}
                            </p>
                        </Col>
                    )}
                </Row>
            </Container>
            <ToastContainer />
        </section>
    );
}

export default Contact;
