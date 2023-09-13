import React from "react";
import {useSpeechRecognition} from "react-speech-recognition";
import Button from "./Button";

let text;
let arr = [];

function TextArea(props) {
    // Acquire the required hooks
    
    // // const time = setInterval(() => {
    // //     if(transcript === '' && arr[arr.length-1] !== '\n'){
    // //         console.log('yes');
    // //         arr.push('\n');
    // //     }
    // // },6000);
    // // console.log(arr);

    // function setArray(){
    //     arr.push('\r\n');
    // }

    const {transcript, 
        browserSupportsSpeechRecognition,
    } = useSpeechRecognition();
    text = transcript;

    if(transcript !== ' '){
        console.log('here');
            var lastArr = text.split(' ');
            lastArr.forEach((word)=>{
                if(word !== '' && !arr.includes(word) && !arr.includes('\n')){
                        arr.push(word);
                }
            });
    }
    if(!browserSupportsSpeechRecognition){
        return <p>Browser doesn't support speech recognition. Sorry for inconvinience.</p>;
    }

    return (
        <div>
            <div className="area">{arr.join(' ')}</div>
            <div className="btn-container">
            <Button 
                name = "Start"
                value = "yes"/>
            <Button 
                name = "Stop"
                value = "no"/>
            </div>
        </div>
    );
}

export default TextArea;
export {text, arr};