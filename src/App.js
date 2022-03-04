import { useEffect, useState } from 'react';
import CardImg from './components/CardImg.js';
import {Navbar, Container} from 'react-bootstrap';
import arrayShuffle from 'array-shuffle';
import images from './images/Images.js';

function App() {

  let numButtons = 8;
  
  const [buttons, setButtons] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [correctCounter, setCorrectCounter] = useState(0);
  const [wrongCounter, setWrongCounter] = useState(0);

  // generate random image number
  const generateRandom = () => {
    let rnd1 = Math.floor(Math.random() * 3);
    let rnd2 = Math.floor(Math.random() * 3);
  
    return [rnd1, rnd2];
  }

  // put the image number to the array
  const assignImages = () => {
    let [rnd1, rnd2] = generateRandom();
    let btns = [];
    for(let i=0;i<numButtons;i++) {
      btns.push(images[rnd1])
    }
    // one elem must have different img
    btns.push(images[rnd2]);
    let correctAnswer = images[rnd2];

    return [btns, correctAnswer];
  } 


  useEffect( () => {
      newGame();
  }, []);
  
const newGame = () =>{
  const [sbuttons, scorrectAnswer] = assignImages();
  const shuffledBtns = arrayShuffle(sbuttons);
  setButtons(shuffledBtns);
  setCorrectAnswer(scorrectAnswer);
} 


  return (
    <div>
      <Navbar expand="lg" variant="light" bg="light">
        <Container className='justify-content-center'>
          <Navbar.Brand href="#">Attention Game</Navbar.Brand>
        </Container>
      </Navbar>
      <div className="d-flex flex-column vh-100 justify-content-center align-items-center text-center">
        <CardImg 
          buttons={buttons} 
          answer={correctAnswer} 
          newGame={newGame} 
          correct={correctCounter} 
          setCorrect={setCorrectCounter} 
          wrong={wrongCounter} 
          setWrong={setWrongCounter} 
          correctObj={{correctAnswer, newGame}}/>
      </div>
    </div>
  );
}

export default App;
