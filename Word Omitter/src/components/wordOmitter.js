import React, { useState } from "react";

const OMITTED_WORDS = ["a", "the", "and", "or", "but"];

function WordOmitter() 
{
  const [inputText, setInputText] = useState("");
  const [omitWords, setOmitWords] = useState(true);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const toggleOmitWords = () => {
    setOmitWords(!omitWords);
  };

  const clearFields = () => {    
    setInputText("")
  };

  const getProcessedText = () => {
    if (omitWords){
      let omittedText = inputText.split(" ");

      omittedText = omittedText.filter((text) => {
        if (
          !(
            text === OMITTED_WORDS[0] ||
            text === OMITTED_WORDS[1] ||
            text === OMITTED_WORDS[2] ||
            text === OMITTED_WORDS[3] ||
            text === OMITTED_WORDS[4]
          )
        ) 
        {         
          return text
        }
     });

     return omittedText.join(" ")
    }
    
    else
    {
      return inputText
    } 


  };

  return (
    <div className="omitter-wrapper">
      <textarea
        placeholder="Type here..."
        value={inputText}
        onChange={handleInputChange}
        data-testid="input-area"
      />

      <div>
        <button onClick={toggleOmitWords} data-testid="action-btn">
          {omitWords ? "Show All Words" : "Omit Words"}
        </button>

        <button onClick={clearFields} data-testid="clear-btn">
          Clear
        </button>
      </div>

      <div>
        <h2> Output: </h2>
        <p data-testid="output-text">{getProcessedText()}</p>
      </div>
    </div>
  );
}

export { WordOmitter };