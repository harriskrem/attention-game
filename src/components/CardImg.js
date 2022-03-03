import {React, useEffect, useState } from "react";
import { Card, Container, Row, Col, Button, InputGroup, DropdownButton, Dropdown, FormControl } from "react-bootstrap";
import Buttons from "./Buttons";

const CardImg = ({answer,buttons,newGame}) => {

    // const [isBtnTrue, setBtn] = useState(false);
    // const [isTxtCorrect, setTxt] = useState(false);
    // const [isClassName, setClassName] = useState(false);

    // let btnClassName = isBtnTrue ? 'btn mb-2' : 'btn mb-2 d-none'; // if true show the retry button
    // let text = isTxtCorrect ? 'Correct!' : 'Wrong!';

    // let labelClassName = isClassName ? '' : 'd-none';
    useEffect(()=> {
        if(!!answer)
         { window.addEventListener("keydown", function (event) {
        if (event.defaultPrevented) {
          return;
        }
    
        switch (event.key) {
          case "Down":
          case "ArrowDown":
    
            if (event.key === answer.position) {
              console.log("Correct!");
              newGame();
            }
            console.log("Event key: " + event.key);
            console.log("Answer: " + answer.position);
            break;
          case "Up":
          case "ArrowUp":
            if (event.key === answer.position) {
              console.log("Correct!");
              newGame();
            }
            console.log("Event key: " + event.key);
            console.log("Answer: " + answer.position);
            break;
          case "Left":
           case "ArrowLeft":
            if (event.key === answer.position) {
              console.log("Correct!");
              newGame();
            }
            console.log("Event key: " + event.key);
            console.log("Answer: " + answer.position);
            break;
          case "Right":
          case "ArrowRight":
            if (event.key === answer.position) {
              console.log("Correct!");
              newGame();
            }
            console.log("Event key: " + event.key);
            console.log("Answer: " + answer.position);
            break;
          default:
            return;
        }

        event.preventDefault();
      }, true);
    console.log('Mpike')}
    },[answer])

    return (
        <div><p className="d-none" ></p>
        <Card>
            
        <Card.Header className="p-3">Press the arrow key on which position the arrow is pointing</Card.Header>
        <Card.Body className="p-2">
            <Container md="true">
            <Row className="justify-content-center">
                <Col >
                    {buttons.map((b,i) => <Buttons key={i} btn={b}  />)}
                {/* <Buttons buttons={buttons} answer={correctAnswer} onTrue={onTrue} /> onCorrect={setCorrect} setTxt={setLabel}  answer={answer}  */}
                </Col>
            </Row>
            </Container>
        </Card.Body>
        </Card>
        </div>
    );
};

export default CardImg;
