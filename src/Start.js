import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Start() {
  const navigate = useNavigate();

  return (
    <>
    <header className='header'>
        <img src='image.png' alt='Logo' className='header-logo'/>
        <h1 className='header-title'>Hangman Challenge</h1>
    </header>
    <div className='play-section'>
      <aside className='model'><img src='hangman.png' alt='hangman-model'className='model-img'/></aside>
      <main className='main-container'>
        <div className="start-button-container">
          <button className='button'  onClick={()=>navigate('/play')} ><img src='play-button.png' alt='play-button' className='play-button'/></button>
          <h2 className='play'>Play</h2>
        </div>
      </main>
    </div>
    </>
  )
}

