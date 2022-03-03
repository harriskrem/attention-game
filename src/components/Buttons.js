import { useEffect } from "react";
import { Image } from "react-bootstrap";


const Buttons = ({btn}) => {   



    // console.log()
    
    // window.addEventListener("keydown", function (event) {
    //     if (event.defaultPrevented) {
    //       return;
    //     }
    
    //     switch (event.key) {
    //       case "Down":
    //       case "ArrowDown":
    
    //         if (event.key === answer.position) {
    //           console.log("Correct!");
    //           onTrue(true);
    //         }
    //         console.log("Event key: " + event.key);
    //         console.log("Answer: " + answer.position);
    //         break;
    //       case "Up":
    //       case "ArrowUp":
    //         if (event.key === answer.position) {
    //           console.log("Correct!");
    //           onTrue(true);
    //         }
    //         console.log("Event key: " + event.key);
    //         console.log("Answer: " + answer.position);
    //         break;
    //       case "Left":
    //       case "ArrowLeft":
    //         if (event.key === answer.position) {
    //           console.log("Correct!");
    //           onTrue(true);
    //         }
    //         console.log("Event key: " + event.key);
    //         console.log("Answer: " + answer.position);
    //         break;
    //       case "Right":
    //       case "ArrowRight":
    //         if (event.key === answer.position) {
    //           console.log("Correct!");
    //           onTrue(true);onTrue
    //         }
    //         console.log("Event key: " + event.key);
    //         console.log("Answer: " + answer.position);
    //         break;
    //       default:
    //         return;
    //     }

    //     event.preventDefault();
    //   }, true);

    return(
        <div>
                <button className="border-0 bg-none">
                    <Image src={btn.img} alt="Error loading images" width="80px"/>
                </button> 
                
     
        </div>
    )
};

export default Buttons;
