import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { Link } from 'gatsby'

const Footer = () => {
    return (
        <footer>
       <Container>
       <Row>
          <Col md="3">
          </Col>

           <Col md="3">
               <p>Our Events</p>
               <ul className="footer__link">
                   <li><Link>Delta Tech Conf 2020</Link></li>
                   <li><Link>Volunteers</Link></li>
                   <li><Link>Speakers</Link></li>

               </ul>
           </Col>

           <Col md="3">
               <p>Partnerships</p>
               <ul className="footer__link">
                   <li><Link>Partner with us</Link></li>
                   <li><Link>Meet our partners</Link></li>
                   <li><Link>Sponsors</Link></li>

               </ul>
           </Col>

           <Col md="3">
               <p>Useful Links</p>
               <ul className="footer__link">
                   <li><Link>Blog</Link></li>
                   <li><Link>Anti-harassment policy</Link></li>
                   <li><Link>Terms and conditions</Link></li>

               </ul>
           </Col>
         
       </Row>
       </Container>
            
        </footer>
    )
}

export default Footer;
