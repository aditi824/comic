// ComicForm.js
import React from "react";
import "./App.css";
function ComicForm({ comicText, setComicText, generateComic }) {
  return (
    <div className="comic-form">
      <label htmlFor="comic-text">Enter text for each panel:</label>
      <textarea
        id="comic-text"
        rows="10"
        cols="50"
        value={comicText}
        onChange={(e) => setComicText(e.target.value)}
      ></textarea>
      <p className="cp">
        You can copy this text to start and change different panels to see the
        magic!!
      </p>
      <p className="copy">
        Panel 1: In a faraway galaxy,
        <br />
        Panel 2: A brave astronaut sets out on a mission.
        <br /> Panel 3: But suddenly, a wild alien appears! <br />
        Panel 4: The astronaut tries to communicate.
        <br /> Panel 5: Misunderstandings lead to a dance-off.
        <br /> Panel 6: The alien reveals a hidden talent.
        <br /> Panel 7: Laughter echoes through space.
        <br /> Panel 8: Friendship conquers all differences.
        <br /> Panel 9: Together, they explore the cosmos.
        <br /> Panel 10: The end of an unforgettable journey.
      </p>
      <button className="btn" onClick={generateComic}>
        Generate Comic
      </button>
    </div>
  );
}

export default ComicForm;
