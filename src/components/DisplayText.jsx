import React, {useState } from "react";
import { text,arr} from "./TextArea";



function DisplayText(props){
    const [newText, setNewText ] = useState(text);

    function handleChange(event){
        setNewText(event.target.value);
    }

    function handleClick(){
        setNewText(arr.join(' '));
    }

    return (
        <div>
            <textarea 
            value={newText} 
            className="area edit" 
            onChange={handleChange}
            spellCheck={true}
            lang="en">
            </textarea>
            <div className="btn-container">
                <button className="btn" onClick={handleClick}>Add</button>
            </div>
        </div>
    );
}

export default DisplayText;