import React , {useState} from "react";

export default function TextForm(props) {
    const handleUpClick = ()=>
    {
        // console.log("upperCase was clicked");
        let newText = text.toUpperCase()
        setText(newText)
    }
    const handleOnChange = (event)=>
    {
        // console.log("On change");
        setText(event.target.value)
    }
    const handleLowClick = ()=>
    {
        let newtext = text.toLowerCase()
        setText(newtext)
    }
    const handleClearClick = ()=>
    {
        let newTextclear = ""
        setText(newTextclear)       
    }
    const [text, setText] = useState("");
  return (
    <>
    <div className="container my-3" >
    <div className="form-floating">
      <textarea
        className="form-control"
        value = {text}
        onChange={handleOnChange}
        id="Textarea"
        rows="18"></textarea>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>convert to upperCase</button>
        <button className="btn btn-primary" onClick={handleLowClick}>convert to lowercase</button>
        <button className="btn btn-danger mx-1" onClick={handleClearClick}>Delete Text</button>
    </div>
    </div>
    <div className="container">
        <h3>text summary </h3>
        <p>{text.split(" ").length} words and {text.length} characters </p>
        <h3>preview</h3>
        <p>{text}</p>

    </div>
    </>
  );
}
