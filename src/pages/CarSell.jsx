import React from 'react';
import carData from '../assets/data/carData';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const CarSell = () => {
  return (
    <Container className="my-5">
      <h1 className="text-center mb-4">Car Selling Posts</h1>
      <Row>
        {carData.map((car) => (
          <Col md={4} key={car.id} className="mb-4">
            <Card style={{ height: '100%' }}>
              <Card.Img
                variant="top"
                src={car.imgUrl}
                alt={car.carName}
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <Card.Body>
                <Card.Title>{car.carName}</Card.Title>
                <Card.Text>
                  <p>
                    <strong>Brand:</strong> {car.brand}
                  </p>
                  <p>
                    <strong>Model:</strong> {car.model}
                  </p>
                  <p>
                    <strong>Price:</strong> ${car.price}
                  </p>
                  <p>
                    <strong>Rating:</strong> {car.rating}
                  </p>
                  <p>
                    <strong>Speed:</strong> {car.speed}
                  </p>
                  <p>
                    <strong>GPS:</strong> {car.gps}
                  </p>
                  <p>
                    <strong>Seat Type:</strong> {car.seatType}
                  </p>
                  <p>
                    <strong>Transmission:</strong> {car.automatic}
                  </p>
                </Card.Text>
                <Button variant="primary" className="mt-3">
                  Buy Now
                </Button>
              </Card.Body>
              <Card.Footer>
               
                {car.carRentalService && (
                  <p className="mt-2">
                    <strong>Rental Service:</strong> {car.carRentalService}
                  </p>
                )}
                {car.features && (
                  <div className="mt-2">
                    <strong>Features:</strong>
                    <ul>
                      {car.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CarSell;