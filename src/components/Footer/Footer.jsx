import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark py-5 mt-5">
      <Container>
        <Row>
          <Col md={4}>
            <h5 style={{ color: '#20e4a2' }}>About Us</h5>
            <p style={{ color: '#20e4a2' }}>
              We are a leading car rental service provider in Dinajpur, Bangladesh. Our mission is to offer a seamless and convenient car rental experience to our valued customers.
            </p>
          </Col>
          <Col md={4}>
            <h5 style={{ color: '#20e4a2' }}>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" style={{ color: '#20e4a2' }}>
                  Home
                </a>
              </li>
              <li>
                <a href="#" style={{ color: '#20e4a2' }}>
                  About
                </a>
              </li>
              <li>
                <a href="#" style={{ color: '#20e4a2' }}>
                  Services
                </a>
              </li>
              <li>
                <a href="#" style={{ color: '#20e4a2' }}>
                  Contact
                </a>
              </li>
            </ul>
          </Col>
          <Col md={4}>
            <h5 style={{ color: '#20e4a2' }}>Advance Rent a Car Services, Dinajpur</h5>
            <p style={{ color: '#20e4a2' }}>
              We provide all types of AC/Non AC Toyota X-Noah/Hi-Ace Super GL/Car rental from Dinajpur to anywhere in Bangladesh.
            </p>
            <p style={{ color: '#20e4a2' }}>
              <i className="bi bi-geo-alt-fill me-2"></i>
              Suihari Micro Stand (Old Bus Stand), Dinajpur-5200, Bangladesh
            </p>
            <p style={{ color: '#20e4a2' }}>
              <i className="bi bi-envelope-fill me-2"></i>
              advancecarrent@gmail.com
            </p>
            <p style={{ color: '#20e4a2' }}>
              <i className="bi bi-telephone-fill me-2"></i>
              +880 1841-649121
            </p>
          </Col>
        </Row>
        <hr className="bg-secondary" />
        <p className="text-center" style={{ color: '#20e4a2' }}>
          &copy; {new Date().getFullYear()} Car Rental BD. All rights reserved.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;