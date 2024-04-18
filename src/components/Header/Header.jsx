import React, { useRef } from 'react';
import { Container, Row, Col, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import '../../styles/Header.css';

const navLinks = [
    {
        path: '/home',
        display: 'Home'
    },
    {
        path: '/about',
        display: 'About'
    },
    {
        path: '/cars',
        display: 'Cars'
    },
    {
        path: '/blogs',
        display: 'Blog'
    },
    {
        path: '/contact',
        display: 'Contact'
    },
    {
        path: '/sell',
        display: 'Car Sell'
    },
];

const Header = () => {
    const menuRef = useRef(null);

    const toggleMenu = () => menuRef.current.classList.toggle('menu__active');

    return (
        <header className="header">
            <div className="header__middle">
                <Container>
                    <Row className="align-items-center">
                        <Col xs={12} sm={4} lg={4} md={3} className="order-2 order-sm-1">
                            <div className="logo">
                                <h1>
                                    <Link to="/home" className="d-flex align-items-center gap-3">
                                        <i className="ri-car-line"></i>
                                        <span>Advance Rent a Car Services</span>
                                    </Link>
                                </h1>
                            </div>
                        </Col>

                        <Col xs={12} sm={4} lg={3} md={3} className="order-3 order-sm-2">
                            <div className="header__location d-flex align-items-center gap-2">
                                <span>
                                    <i className="ri-earth-line"></i>
                                </span>
                                <div className="header__location-content">
                                    <h4>Suihari Micro Stand</h4>
                                    <h4>Dinajpur-5200</h4>
                                </div>
                            </div>
                        </Col>

                        <Col xs={12} sm={4} lg={3} md={3} className="order-4 order-sm-3">
                            <div className="header__location d-flex align-items-center gap-2">
                                <span>
                                    <i className="ri-time-line"></i>
                                </span>
                                <div className="header__location-content">
                                    <h4>Available Time</h4>
                                    <h6>24 Hours</h6>
                                </div>
                            </div>
                        </Col>

                        <Col xs={12} sm={0} lg={2} md={3} className="order-1 order-sm-4 d-flex align-items-center justify-content-sm-end">
                            <button className="header__btn btn">
                                <Link to="https://maps.app.goo.gl/5pQBrhT2hbNfdbzc7">
                                    <i className="ri-map-pin-line"></i>Location
                                </Link>
                            </button>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className="main__navbar">
                <Container>
                    <Navbar expand="lg" className="navigation__wrapper">
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={toggleMenu}>
                            <i className="ri-menu-line"></i>
                        </Navbar.Toggle>

                        <Navbar.Collapse id="responsive-navbar-nav" ref={menuRef}>
                            <Nav className="menu">
                                {navLinks.map((item, index) => (
                                    <NavLink
                                        to={item.path}
                                        className={(navClass) =>
                                            navClass.isActive ? 'nav__active nav__item' : 'nav__item'
                                        }
                                        key={index}
                                    >
                                        {item.display}
                                    </NavLink>
                                ))}
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Container>
            </div>
        </header>
    );
};

export default Header;