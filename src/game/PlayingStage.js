import React, { useEffect } from "react";
import wordList from  './words.js';
import { letters } from "./letters.js";

function PlayingStage() {
    
        //useState:-
        const [category, setCategory] = React.useState("");
        const [word, setWord] = React.useState("");

    

    // /game-logic
    const Startgame =() =>{
        // categories logic 
         const categories = Object.keys(wordList);

        const randomCategory =
                categories[Math.floor(Math.random() * categories.length)];
        // word from category
        const words = wordList[randomCategory];

        const randomWord =
            words[Math.floor(Math.random() * words.length)];

        setCategory(randomCategory);
        setWord(randomWord);
    }
    // useefffect is use to riander for first time the page load
    useEffect(() => {
    Startgame();
}, []);

  return (
    <>
    <header className='header'>
        <img src='image.png' alt='Logo' className='header-logo'/>
        <h1 className='header-title'>{category}</h1>
    </header>
    <div className='play-section'>
      <aside className='model'><img src='hangman.png' alt='hangman-model'className='model-img'/></aside>
      <main className='main-container-play'>
        <h2>Guess the Word</h2>
        <h1 className="display-word">
                {word}
        </h1>
        <p className="lives">
            Wrong Guesses: 0 / 6
        </p>
        <div className="hint-container">
            <button className="hint-btn">💡 Hint 1</button>
            <button className="hint-btn">⭐ Hint 2</button>
        </div>
        <div className='button-container'>
         
            {letters.map((letter) => (
            <button key={letter} className="key">
                {letter}
            </button>
            ))}

        </div>
        <div className="reset-container">
            <button className="reset-btn" onClick={Startgame}>
                🔄 Reset Game
            </button>
        </div>
      </main>
    </div>
    </>
  )
}

export default PlayingStage
