import { Button, Image } from "react-bootstrap";
import images from '../images/Images';


const Buttons = (props) => {   
    let i = 0;
    return(
        <div>
            {props.buttons.map(element =>
                <button className="border-0 bg-none" key={i++}>
                    <Image src={images[element]} alt={element} width="50px"/>
                </button> 
                
            )}
        </div>
    )
};

export default Buttons;
