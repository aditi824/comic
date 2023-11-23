// App.js
import React, { useState } from "react";
import ComicForm from "./ComicForm";
import ComicDisplay from "./ComicDisplay";
import "./App.css";
import backgroundImage from "./background.jpg";
import bg2 from "./bg2.jpg";
function App() {
  const [comicText, setComicText] = useState("");
  const [comicImages, setComicImages] = useState([]);

  const generateComic = async () => {
    try {
      // Replace <API_KEY> with your actual API key
      const apiKey =
        "VknySbLLTUjbxXAXCjyfaFIPwUTCeRXbFSOjwRiCxsxFyhbnGjSFalPKrpvvDAaPVzWEevPljilLVDBiTzfIbWFdxOkYJxnOPoHhkkVGzAknaOulWggusSFewzpqsNWM";
      const apiUrl =
        "https://xdwvg9no7pefghrn.us-east-1.aws.endpoints.huggingface.cloud";

      // Assuming the API requires an array of 10 strings for 10 panels
      const panelTexts = comicText.split("\n").slice(0, 10);

      console.log(panelTexts);
      const panelPromises = panelTexts.map(async (text) => {
        const response = await fetch(apiUrl, {
          method: "POST",
          headers: {
            Accept: "image/png",
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ inputs: text }),
        });

        if (response.ok) {
          const result = await response.blob();
          return URL.createObjectURL(result);
        } else {
          return null;
        }
      });

      const images = await Promise.all(panelPromises);
      setComicImages(images.filter((image) => image !== null));
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again later.");
    }
  };
  const appContainerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    minHeight: "100vh", // Ensure the background covers the full height of the viewport
  };
  return (
    <>
      <div className="app-container" style={appContainerStyle}>
        <h1 className="head">Comic Strip Generator</h1>
        <ComicForm
          comicText={comicText}
          setComicText={setComicText}
          generateComic={generateComic}
        />
        <ComicDisplay comicImages={comicImages} />
        <div className="footer">
          <p>Created with ❤️ by Aaditi</p>
        </div>
      </div>
    </>
  );
}

export default App;
