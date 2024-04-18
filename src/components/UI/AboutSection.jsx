import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import aboutImg from "../../assets/all-images/cars-img/bmw-offer.png";

const AboutSection = ({ aboutClass }) => {
    return (
        <section
            className={`about__section ${aboutClass === 'aboutPage' ? 'mt-0' : 'mt-5'}`}
            style={{ backgroundColor: '#f8f9fa' }}
        >
            <Container>
                <Row className="align-items-center">
                    <Col lg={6} md={6}>
                        <div className="about__section-content">
                            <h4 className="section__subtitle mb-3">About Us</h4>
                            <h2 className="section__title mb-4">
                                Welcome to Advance Car Rent Service
                            </h2>
                            <p className="section__description mb-4">
                                We are a leading car rental service provider based in Dinajpur, Bangladesh.
                                Our goal is to offer reliable and affordable transportation solutions to
                                individuals and businesses alike. Whether you need a car for a day trip,
                                a long journey, or a business meeting, we have a diverse fleet to meet your
                                needs.
                            </p>
                            <div className="about__section-item mb-3">
                                <p className="section__description d-flex align-items-center gap-2">
                                    <i className="ri-checkbox-circle-line"></i> Friendly Budget Cars
                                </p>
                                <p className="section__description d-flex align-items-center gap-2">
                                    <i className="ri-checkbox-circle-line"></i> Dream Car Ride
                                </p>
                            </div>
                            <div className="about__section-item mb-4">
                                <p className="section__description d-flex align-items-center gap-2">
                                    <i className="ri-checkbox-circle-line"></i> Rent Any Car Any Time
                                </p>
                                <p className="section__description d-flex align-items-center gap-2">
                                    <i className="ri-checkbox-circle-line"></i> Safe Travel
                                </p>
                            </div>
                            <div className="about__section-contact">
                                <h5 className="mb-3">Contact Us:</h5>
                                <p className="mb-1">
                                    <i className="ri-map-pin-line me-2"></i>
                                    Suihari Micro Stand (Old Bus Stand), Dinajpur-5200
                                </p>
                                <p className="mb-1">
                                    <i className="ri-mail-line me-2"></i>
                                    advancecarrent@gmail.com
                                </p>
                                <p>
                                    <i className="ri-phone-line me-2"></i>
                                    +880 1841-649121
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} md={6}>
                        <div className="about__img">
                            <img src={aboutImg} alt="About" className="w-100" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default AboutSection;