import { React, useEffect, useState } from "react";
import { Card, Container, Row, Image, Col, Fade} from "react-bootstrap";
import FadeIn from 'react-fade-in';

const CardImg = ({ buttons, answer, newGame, correct, setCorrect, wrong, setWrong, correctObj }) => {

  const keypress = event => {
      if (event.defaultPrevented) {
        return;
      }
      switch (event.key) {
        case "Down":
        case "ArrowDown":

          if (event.key === correctObj.correctAnswer.position) {
            setCorrect(++correct);
            newGame();
          } else {
            setWrong(++wrong);
            newGame();
          }
          break;
        case "Up":
        case "ArrowUp":
          if (event.key === correctObj.correctAnswer.position) {
            setCorrect(++correct);
            newGame();
          } else {
            setWrong(++wrong);
            newGame();
          }
          break;
        case "Left":
        case "ArrowLeft":
          if (event.key === correctObj.correctAnswer.position) {
            setCorrect(++correct);
            newGame();
          } else {
            setWrong(++wrong);
            newGame();
          }
          break;
        case "Right":
        case "ArrowRight":
          if (event.key === correctObj.correctAnswer.position) {
            setCorrect(++correct);
            newGame();
          } else {
            setWrong(++wrong);
            newGame();
          }
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
  
  
  return (
    <div>
      <div className="mt-5" > <h5 className="text-success">Correct: {correct}</h5> <h5 className="text-danger" >Wrong: {wrong}</h5> </div>
      <FadeIn>
            <Container md="true">
              <Row className="justify-content-center">
                <Col className="col-6 col-md-5" >
                  {buttons.map((b, i) => 
                        <button className="border-0 bg-none " key={i} >
                          <Image src={b.img}  alt="Error loading images" width="80px"/>
                        </button>
                    )
                  }
                </Col>
              </Row>
            </Container>
      </FadeIn>
    </div>
  );
};

export default CardImg;
