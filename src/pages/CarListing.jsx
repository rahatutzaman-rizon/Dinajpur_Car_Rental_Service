import React from 'react';
import { Container , Row , Col } from 'reactstrap';
import Helmet from '../components/Helmet/Helmet' ;
import CommonSection from '../components/UI/CommonSection' ;
import CarItem from "../components/UI/CarItem" ;
import carData from "../assets/data/carData" ;
 
const CarListing = () => {
    return <Helmet>
        <CommonSection title="Car Listing"></CommonSection>

        <section>
            <Container>
                <Row>
                    <Col lg='12'>
                        <div className="d-flex align-items-center gap-3 mb-5">
                               

                                
                        </div>
                    </Col>

                    {
                        carData.map( item => <CarItem item={item} key={item.id} />  
                            
                        )
                    }
                </Row>
            </Container>
        </section>
    </Helmet>
};

export default CarListing;