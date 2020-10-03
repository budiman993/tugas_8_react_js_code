import React from 'react';
import './css/bootstrap.min.css';
import {Container, Row, Col, } from 'react-bootstrap';
import Pnavbar from './component/pnavbar';
import Pbreadcrumb from './component/pbreadcrumb';
import Pcarousel from './component/Pcarousel';
import Plistgroup from './component/ListGroup';
import Pjumbotron from './component/Pjumbotron';
import Pform from './component/Pform';


function App() {
  return (
    <div>
       <Pnavbar /> 
       <Pbreadcrumb />
       <br />
       <Pcarousel />
       <br />
       <Container fluid>
         <Row>
           <Col md="3"><Plistgroup /></Col>
           <Col md="6"><Pjumbotron /></Col>
           <Col md="3"><Pform /></Col>
         </Row>
       </Container>
    </div>
  );
}

export default App;
