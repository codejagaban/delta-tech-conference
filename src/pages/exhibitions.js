import React, { useState } from 'react';
import Layout from '../components/layout';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Exhibitions = () => {

    const [state, setState] = useState({
        fullName : '',
        email: '',
        company: '',
        role: '',
        companyDescription: ''

    });
    const { fullName, email, company, role, companyDescription } = state;

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
                      <h4 className="">Exhibition form for  <span className="text-success">#DeltaTechConf2020</span></h4>
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
    <Form.Label>Name of company/organization</Form.Label>
    <Form.Control type="text"
     placeholder="Enter name of company"
     value={company}
     name="company"
     onChange={onInputChange} />
  
  </Form.Group>


  <Form.Group controlId="Track">
    <Form.Label>Role in the organization</Form.Label>
    <Form.Control type="text"
     placeholder="Enter your role"
     value={role}
     name="role"
     onChange={onInputChange} />
 
  </Form.Group>

  <Form.Group controlId="formMessage">
    <Form.Label>A little description about your company.</Form.Label>
    <Form.Control as="textarea" name="companyDescription" value={companyDescription} onChange={onInputChange} rows="6" />
  
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

export default Exhibitions
