import {React, useState } from "react";
import { Card, Container, Row, Col, Button, InputGroup, DropdownButton, Dropdown, FormControl } from "react-bootstrap";
import Buttons from "./Buttons";

const CardImg = (props) => {

    const [isBtnTrue, setBtn] = useState(false);
    const [isTxtCorrect, setTxt] = useState(false);
    const [isClassName, setClassName] = useState(false);

    let btnClassName = isBtnTrue ? 'btn mb-2' : 'btn mb-2 d-none'; // if true show the retry button
    let text = isTxtCorrect ? 'Correct!' : 'Wrong!';

    let labelClassName = isClassName ? '' : 'd-none';

    return (
        <div><p className={labelClassName} >{text}</p>
        <Card>
            
        <Card.Header className="p-3">Press the arrow key on which position the arrow is pointing</Card.Header>
        <Card.Body className="p-2">
            <Container md="true">
            <Row className="justify-content-center">
                <Col className="col-3 col-sm-5">
                <Buttons buttons={props.buttons}  /> {/* onCorrect={setCorrect} setTxt={setLabel}  answer={props.answer}  */}
                </Col>
            </Row>
            </Container>
        </Card.Body>
        <div>
                <Button className={btnClassName} >Play Again!</Button>
                <InputGroup className={btnClassName}>
                    <DropdownButton  variant="outline-secondary" title="Number of Colors" id="input-group-dropdown-1">
                    <Dropdown.Item href="#">3</Dropdown.Item>
                    <Dropdown.Item href="#">6</Dropdown.Item>
                    <Dropdown.Item href="#">9</Dropdown.Item>
                    </DropdownButton>
                </InputGroup>
        </div>
        </Card>
        </div>
    );
};

export default CardImg;
