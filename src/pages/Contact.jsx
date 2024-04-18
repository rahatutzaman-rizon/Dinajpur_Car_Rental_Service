import React from 'react';
import { Container, Row, Col, Form, FormGroup, Button } from 'react-bootstrap';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection';
import { Link } from 'react-router-dom';
import '../styles/contact.css';

const socialLinks = [
    {
        url: 'https://web.facebook.com/ariful.islam.80',
        icon: 'ri-facebook-line',
    },
    {
        url: 'https://www.linkedin.com/company/advance-car-rent-bd',
        icon: 'ri-linkedin-line',
    },
];

const Contact = () => {
    return (
        <Helmet title="Contact">
            <CommonSection title="Contact" />
            <section className="contact-section">
                <Container>
                    <Row>
                        <Col lg="7" md="7">
                            <h6 className="fw-bold mb-4">Get In Touch</h6>
                            <Form>
                                <FormGroup className="contact__form">
                                    <input type="text" placeholder="Your Name" />
                                </FormGroup>
                                <FormGroup className="contact__form">
                                    <input type="email" placeholder="Email" />
                                </FormGroup>
                                <FormGroup className="contact__form">
                                    <textarea
                                        rows="4"
                                        className="textarea"
                                        placeholder="Type Your Message Here..."
                                    ></textarea>
                                </FormGroup>
                                <Button className="contact__btn" type="submit">
                                    Send Message
                                </Button>
                            </Form>
                        </Col>
                        <Col lg="5" md="5">
                            <div className="contact__info">
                                <h6 className="fw-bold">Contact Information</h6>
                                <h2>Advance Car Rent Service</h2>
                                <p className="section__description mb-0">
                                    Suihari Micro Stand (Old Bus Stand)
                                </p>
                                <p className="section__description mb-0">Dinajpur-5200, Bangladesh</p>
                                <div className="d-flex align-items-center gap-2">
                                    <h6 className="mb-0 fs-6">Phone:</h6>
                                    <p className="section__description mb-0">+880 1841-649121</p>
                                </div>
                                <div className="d-flex align-items-center gap-2">
                                    <h6 className="mb-0 fs-6">Email:</h6>
                                    <p className="section__description mb-0">advancecarrent@gmail.com</p>
                                </div>
                                <p className="section__description mt-4">
                                    We provide all types of private car/microbus rental from Dinajpur to anywhere in
                                    Bangladesh.
                                </p>
                                <h6 className="fw-bold mt-4">Follow Us</h6>
                                <div className="d-flex align-items-center gap-4 mt-3">
                                    {socialLinks.map((item, index) => (
                                        <Link
                                            to={item.url}
                                            key={index}
                                            className="social__link-icon"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <i className={item.icon}></i>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default Contact;