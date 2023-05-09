import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar';
import Image from './components/image';
import { Col, Row } from 'react-bootstrap';

function App() {
  return (
    <>
      <NavBar />
      <section>
        <Row className='content-products'>
          <Col md={4} sm={6} xs={12}>
            <Image />
          </Col>
          <Col md={4} sm={6} xs={12}>
            <Image />
          </Col>
          <Col md={4} sm={6} xs={12}>
            <Image />
          </Col>
        </Row>
      </section>
    </>
  );
}

export default App;
