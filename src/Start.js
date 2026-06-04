import React from 'react'

export default function Start() {
  return (
    <>
    <header className='header'>
        <img src='image.png' alt='Logo' className='header-logo'/>
        <h1 className='header-title'>Hangman Challenge</h1>
    </header>
    <div className='play-section'>
      <aside className='model'><img src='hangman.png' alt='hangman-model'className='model-img'/></aside>
      <main className='main-container'>
        <div className='button-container'>
          <button className='button'  onClick={()=>console.log("Button-Clicked")} ><img src='play-button.png' alt='play-button' className='play-button'/></button>
          <h2 className='play'>Play</h2>
        </div>
      </main>
    </div>
    </>
  )
}

