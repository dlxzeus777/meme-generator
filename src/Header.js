import React from 'react'
import trollface from './trollface.png'

const Header = () => {
  return (
    <header className='header-container'>
        <img src={trollface} alt='trollface' className='header-img' />
        <h2 className='header-h2'>Meme Generator</h2>
    </header>
  )
}

export default Header