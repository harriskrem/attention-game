import { useState } from 'react';
import CardImg from './components/CardImg.js';
import {Navbar, Container} from 'react-bootstrap';

function App() {
  
  return (
    <div>
      <Navbar expand="lg" variant="light" bg="light">
        <Container className='justify-content-center'>
          <Navbar.Brand href="#">2</Navbar.Brand>
        </Container>
      </Navbar>
      <div className="d-flex flex-column vh-100 justify-content-center align-items-center text-center">
      {/* <CardImg numButtons={numButtons} buttons={buttons} answer={answer} onRetry={setState} />  */}
    </div>
    </div>
  );
}

export default App;
