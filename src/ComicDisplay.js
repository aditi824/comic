// ComicDisplay.js
import React from "react";
import "./App.css";
function ComicDisplay({ comicImages }) {
  return (
    <div className="comic-display">
      {comicImages.map((image, index) => (
        <img key={index} src={image} alt={`Panel ${index + 1}`} />
      ))}
    </div>
  );
}

export default ComicDisplay;
