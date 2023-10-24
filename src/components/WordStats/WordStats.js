import React from "react";

function WordStats({ wordCount, characterCount, sentenceCount, paragraphCount }) {
  return (
        <div className="output-container">
        <div className="output">
            <p className="words">Palabras</p>
            <span>{wordCount}</span>
        </div>
        <div className="output">
            <p className="characters">Caracteres</p>
            <span>{characterCount}</span>
        </div>
        <div className="output">
            <p className="sentences">Oraciones</p>
            <span>{sentenceCount}</span>
        </div>
        <div className="output">
            <p className="paragraphs">Párrafos</p>
            <span>{paragraphCount}</span>
        </div>
        </div>
  );
}

export default WordStats;