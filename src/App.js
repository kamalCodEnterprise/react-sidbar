
import './App.css';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import { Col, Container, Row } from 'react-bootstrap';
import { useState } from 'react';
function App() {
  const [selectedItem, setSelectedItem] = useState('');

    const handleItemClick = (item) => {
        setSelectedItem(item);
    };
  return (
    <div className="App my-4">
      
      
      <Container>
      <Row>
        <Col sm={4}><Sidebar handleItemClick={handleItemClick} /></Col>
        <Col sm={8}><MainContent selectedItem={selectedItem} /></Col>
      </Row>
      
    </Container>
      
    </div>
  );
}

export default App;
