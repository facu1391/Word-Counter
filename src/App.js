import React, { useState } from "react";
import Header from "./components/Header/Header";
import TextInput from "./components/TextInput/TextInput";
import WordStats from "./components/WordStats/WordStats";
import './App.css';

function App() {
  const [text, setText] = useState("");
  const [wordCount, setWordCount] = useState(0);
  const [characterCount, setCharacterCount] = useState(0);
  const [sentenceCount, setSentenceCount] = useState(0);
  const [paragraphCount, setParagraphCount] = useState(0);

  const handleTextChange = (e) => {
    const newText = e.target.value;
    setText(newText);
    // Implementa la lógica de conteo de palabras aquí y actualiza el estado en consecuencia
    // Implementa la lógica de conteo de palabras aquí
    const wordsArray = newText.split(/\s+/).filter((word) => word !== "");
    setWordCount(wordsArray.length);

    // Implementa la lógica de conteo de caracteres aquí
    setCharacterCount(newText.length);

    // Implementa la lógica de conteo de oraciones aquí
    const sentenceArray = newText.split(/[.!?]/).filter((sentence) => sentence !== "");
    setSentenceCount(sentenceArray.length);

    // Implementar la lógica de conteo de párrafos aquí
    const paragraphArray = newText.split("\n").filter((p) => p.trim() !== "");
    setParagraphCount(paragraphArray.length);
  };

  return (
    <div className="App">
      <Header />
      <div className="container">
        <TextInput onTextChange={handleTextChange} />
        <WordStats
          wordCount={wordCount}
          characterCount={characterCount}
          sentenceCount={sentenceCount}
          paragraphCount={paragraphCount}
        />
      </div>
    </div>
  );
}

export default App;
