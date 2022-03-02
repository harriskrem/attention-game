// import { useState } from 'react';
import CardImg from './components/CardImg.js';
import {Navbar, Container} from 'react-bootstrap';
import arrayShuffle from 'array-shuffle';


function App() {

  let numButtons = 8;
  let buttons = [];

  const generateImages = () => {
    let rnd1 = Math.floor(Math.random() * 3);
    let rnd2 = Math.floor(Math.random() * 3);

    let img1 = rnd1;
    let img2 = rnd2;

    return [img1, img2];
  }

 

  let [img1, img2] = generateImages();


  const assignImages = (img1, img2) => {
    let btns = [];
    for(let i=0;i<numButtons;i++) {
      btns.push(img1);
    }
    btns.push(img2); // one elem must have different img
    return btns;
  } 

  buttons = assignImages(img1, img2);
  const shuffledBtns = arrayShuffle(buttons);

  return (
    <div>
      <Navbar expand="lg" variant="light" bg="light">
        <Container className='justify-content-center'>
          <Navbar.Brand href="#">Attention Game</Navbar.Brand>
        </Container>
      </Navbar>
      <div className="d-flex flex-column vh-100 justify-content-center align-items-center text-center">
        <CardImg buttons={shuffledBtns}  /> {/* answer={answer} onRetry={setState} */}
      </div>
    </div>
  );
}

export default App;
