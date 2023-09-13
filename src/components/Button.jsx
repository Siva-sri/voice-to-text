import React from "react";
import SpeechRecognition from "react-speech-recognition";

function Button(props){
    function handleClick(event){
        if(props.name === "Start") {
            SpeechRecognition.startListening({continuous: true, language :"en-IN"});
        }
        else if(props.name === "Stop"){
            SpeechRecognition.stopListening();
        }
        else if(props.name === "Add"){
            
        } 
    }
    return (
        <button
        onClick={handleClick}
        className="btn"
        >{props.name}</button>
    );
}

export default Button;