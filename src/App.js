// import { useState } from 'react';
import CardImg from './components/CardImg.js';
import {Navbar, Container} from 'react-bootstrap';
import arrayShuffle from 'array-shuffle';


function App() {

  let numButtons = 8;
  let buttons = [];
  let answer;

  const [isState, setState] = useState( {
    buttons: generateColors,
    answer : buttons.at(Math.random() * numButtons)
  });

  // generate random image number
  const generateImages = () => {
    let rnd1 = Math.floor(Math.random() * 3);
    let rnd2 = Math.floor(Math.random() * 3);

    let img1 = rnd1;
    let img2 = rnd2;

    return [img1, img2];
  }

  let [img1, img2] = generateImages();

  // put the image number to the array
  const assignImages = (img1, img2) => {
    let btns = [], answer;
    for(let i=0;i<numButtons;i++) {
      btns.push(img1);
    }
    btns.push(img2); // one elem must have different img
    answer = img2;
    return btns, answer;
  } 

  let [buttons, answer] = assignImages(img1, img2);
  const shuffledBtns = arrayShuffle(buttons);

  if(isState) // to re-render every time i press retry button
    setState(false);

  window.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) {
      return; 
    }
    switch (event.key) {
      case "Down": 
      case "ArrowDown":
        console.log(event.key);
        break;
      case "Up": 
      case "ArrowUp":
        console.log(event.key);
        break;
      case "Left": 
      case "ArrowLeft":
        console.log(event.key);
        break;
      case "Right": 
      case "ArrowRight":
        console.log(event.key);
        break;
      default:
        return; 
    }
    event.preventDefault();
  }, true);

  

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
