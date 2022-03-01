import { Button } from "react-bootstrap";




const Buttons = (props) => {

    
    let buttons = props.buttons;

    

    const checkColor = (e) => {
        if(e.target.style.backgroundColor === props.answer) {
            props.onCorrect(true);
            props.setTxt(true);
            console.log('Correct!');
        } else {
            props.setTxt(false);
        }
    }

    return(
        <div>
            {props.buttons.map(element =>
                <Button className="p-5 border-0 rounded m-2" key={element} onClick={checkColor} style={{backgroundColor: element}}  ></Button>
            )}
        </div>
    )
};

export default Buttons;
