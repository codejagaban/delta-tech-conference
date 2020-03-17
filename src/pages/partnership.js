import React, { useState } from 'react';
import Layout from '../components/layout';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
const Partners = () => {

    const [state, setState] = useState({
        fullName : '',
        email: '',
        companyName: '',
        position: '',
        message: ''

    });
    const { fullName, email, companyName, position, message } = state;

    const onInputChange = e =>  {
        const name = e.target.name;
      const value = e.target.value;
        setState({ ...state,   [name] : value });
    }
    
    const onFormSubmit = (e) => {
        e.preventDefault()
        console.log(state);

    }
    return (
        <>
        <Layout >

           <section className="partners">
              <Container>
                  <Row>
                      <Col md="6" className="mx-auto">
                      <h4 className="">Become A <span className="text-success">Partner</span></h4>
                      <p>If you will like to sponsor our event or show case a demo of your business or platform, kindly fill the form below </p>

                      <Form onSubmit={onFormSubmit}>
        <Form.Group controlId="formFullName">
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="text" 
            value={fullName} 
            placeholder="Enter Full Name"
            name="fullName"
            onChange={onInputChange}
            />
        
        </Form.Group>

  <Form.Group controlId="formEmail">
    <Form.Label>Email Address</Form.Label>
    <Form.Control type="email" 
    value={email} 
    name="email"
    placeholder="Enter Email Address"
    onChange={onInputChange}
     />
  
  </Form.Group>

  <Form.Group controlId="formCompanyName">
    <Form.Label>Company Name</Form.Label>
    <Form.Control type="text"
     placeholder="Enter Company Name"
     value={companyName}
     name="companyName"
     onChange={onInputChange} />
  
  </Form.Group>


  <Form.Group controlId="formPosition">
    <Form.Label>Position in your company</Form.Label>
    <Form.Control type="text" 
    placeholder="Enter Your Position In Your Company"
    value={position}
    name="position"
    onChange={onInputChange} />
  
  </Form.Group>

  <Form.Group controlId="formMessage">
    <Form.Label>Your Message</Form.Label>
    <Form.Control as="textarea" name="message" value={message} onChange={onInputChange} rows="6" />
  
  </Form.Group>



 
  <Button variant="success" className="cta-button" type="submit">
    Submit
  </Button>
</Form>
                      </Col>
                  </Row>
              </Container>

           </section>

        </Layout>
            
        </>
    )
}

export default Partners
