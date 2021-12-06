import { Container, Row, Col } from 'react-bootstrap'
import HeightAndWeight, {} from './components/HeightAndWeight'
import './App.css';

function App() {
  return (
    <Container fluid>
      <Row>
        <Col xs={12}>
          <h1 style={{ textAlign: 'center' }}>Body Mass Index</h1>
        </Col>
      </Row>
      <Row>
        <Col xs={12} 
             lg={{ offset: 1, span: 10}}
             xxl={{ offset: 2, span: 8}} >
          <HeightAndWeight></HeightAndWeight>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
