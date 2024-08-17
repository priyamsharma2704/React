import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css';
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() 
{
    return(
      
        <Container fluid="md">
            <Row>
                <Col>blank</Col>
                <Col>Light/Dark</Col>
            </Row>
            <Row>
                <Col>pane</Col>
                <Col>blank</Col>
            </Row>
        </Container>
       
    );
}

export default App
