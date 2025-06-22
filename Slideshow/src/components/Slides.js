import React, { useState } from "react";

function Slides({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    if (currentIndex < slides.length - 1) 
    {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const goToPrev = () => {
    if (currentIndex > 0) 
    {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const restart = () => {
    setCurrentIndex(0);
  };

  return (
    <div>
      <div id="navigation" className="text-center">
        <button
          data-testid="button-restart"
          className="small outlined"
          onClick={restart}
          disabled={currentIndex === 0}
        >
          Restart
        </button>
            
        <button
          data-testid="button-prev"
          className="small"
          onClick={goToPrev}
          disabled={currentIndex === 0}
        >
          Prev
        </button>
            
        <button
          data-testid="button-next"
          className="small"
          onClick={goToNext}
          disabled={currentIndex === slides.length - 1}
        >
          Next
        </button>            
      </div>
            
      <div id="slide" className="card text-center">
        <h1 data-testid="title">{slides[currentIndex].title}</h1>
        <p data-testid="text">{slides[currentIndex].text}</p>
      </div>
    </div>
  );
}

export default Slides;
