import React, { useState } from "react";

function Slides({ slides }) {

  const [slidePos, setSlidePos] = useState(0)

  const handleRestart = () =>{
    setSlidePos(0)
  }

  const handlePrevious = () =>{
    setSlidePos(slidePos - 1)
  }

  const handleNext = () =>{
    setSlidePos(slidePos + 1)
  }

  return (
    <div>
      <div id="navigation" className="text-center">
        <button data-testid="button-restart" className="small outlined" onClick={handleRestart} disabled = {slidePos === 0?true:false}>
          Restart
        </button>
        <button data-testid="button-prev" className="small" onClick={handlePrevious} disabled = {slidePos === 0?true:false}>
          Prev
        </button>
        <button data-testid="button-next" className="small" onClick={handleNext} disabled = {slidePos === (slides.length-1)?true:false}>
          Next
        </button>
      </div>
      <div id="slide" className="card text-center">
        <h1 data-testid="title">{slides[slidePos].title}</h1>
        <p data-testid="text">{slides[slidePos].text}</p>
      </div>
    </div>
  );
}

export default Slides;
