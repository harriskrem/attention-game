import { React, useEffect, useState } from "react";
import { Card, Container, Row, Image, Col, Fade} from "react-bootstrap";
import FadeIn from 'react-fade-in';

const CardImg = ({ buttons, answer, newGame, correct, setCorrect, wrong, setWrong, correctObj }) => {

  const keypress = event => {
    console.log(correctObj)
      if (event.defaultPrevented) {
        return;
      }
      switch (event.key) {
        case "Down":
        case "ArrowDown":

          if (event.key === correctObj.correctAnswer.position) {
            console.log("Correct!");
            setCorrect(++correct);
            newGame();
          } else {
            console.log("Wrong!");
            setWrong(++wrong);
            newGame();
          }

          console.log("Event key: " + event.key);
          console.log("Answer: " + correctObj.correctAnswer.position);
          break;
        case "Up":
        case "ArrowUp":
          if (event.key === correctObj.correctAnswer.position) {
            console.log("Correct!");
            setCorrect(++correct);
            newGame();
          } else {
            console.log("Wrong!");
            setWrong(++wrong);
            newGame();
          }
          console.log("Event key: " + event.key);
          console.log("Answer: " + correctObj.correctAnswer.position);
          break;
        case "Left":
        case "ArrowLeft":
          if (event.key === correctObj.correctAnswer.position) {
            console.log("Correct!");
            setCorrect(++correct);
            newGame();
          } else {
            console.log("Wrong!");
            setWrong(++wrong);
            newGame();
          }
          console.log("Event key: " + event.key);
          console.log("Answer: " + correctObj.correctAnswer.position);
          break;
        case "Right":
        case "ArrowRight":
          if (event.key === correctObj.correctAnswer.position) {
            console.log("Correct!");
            setCorrect(++correct);
            newGame();
          } else {
            console.log("Wrong!");
            setWrong(++wrong);
            newGame();
          }
          console.log("Event key: " + event.key);
          console.log("Answer: " + correctObj.correctAnswer.position);
          break;
        default:
          return;
      }

      event.preventDefault();
}
  useEffect(() => {
    
    window.addEventListener("keydown", keypress);
    return () => window.removeEventListener("keydown", keypress);
    
  }, [correctObj]);
  
  console.log(correct);
  console.log(wrong)
  
  return (
    <div>
      <p className="" >Correct: {correct} Wrong: {wrong}</p>
      <FadeIn>
        <Card>
          <Card.Header className="p-3">Press the arrow key on which position the arrow is pointing</Card.Header>
          <Card.Body className="p-2">
            <Container md="true">
              <Row className="justify-content-center">
              
                <Col className="col-6 col-md-5" >
                
                  {buttons.map((b, i) => 
                      
                        <button className="border-0 bg-none" key={i} >
                          <Image src={b.img}  alt="Error loading images" width="80px"/>
                        </button>  
                      
                    )
                  }
                  
                </Col>
                
              </Row>
            </Container>
          </Card.Body>
        </Card>
      </FadeIn>
    </div>
  );
};

export default CardImg;
