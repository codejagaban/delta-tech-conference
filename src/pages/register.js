import React, { useState } from 'react';
import Layout from '../components/layout';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Register = () => {

    const [state, setState] = useState({
        fullName : '',
        email: '',
        phoneNumber: '',
        variousTrack: '',
        messageForOrganizer: ''

    });
    const { fullName, email, phoneNumber, variousTrack, messageForOrganizer } = state;

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
                      <h4 className="">Register for  <span className="text-success">#DeltaTechConf2020</span></h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sapien nunc, vulputate vitae metus non it s free</p>

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
    <Form.Label>Phone Number (WhatsApp Preferably)</Form.Label>
    <Form.Control type="text"
     placeholder="Enter Phone Number"
     value={phoneNumber}
     name="phoneNumber"
     onChange={onInputChange} />
  
  </Form.Group>


  <Form.Group controlId="Track">
    <Form.Label>Choose A Track</Form.Label>
    <Form.Control as="select">
      <option value="Startups">Startups</option>
      <option value="Women In Tech">Women In Tech</option>
      <option value="Developer/Designer">Developer/Designer</option>
      <option value="Data science/AI/ML">Data science/AI/ML</option>
      <option value="Creatives">Creatives</option>
    </Form.Control>
  </Form.Group>

  <Form.Group controlId="formMessage">
    <Form.Label>Message To The Organizers</Form.Label>
    <Form.Control as="textarea" name="messageForOrganizer" value={messageForOrganizer} onChange={onInputChange} rows="6" />
  
  </Form.Group>



 
  <Button variant="success" className="cta-button" type="submit">
    Register
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

export default Register
