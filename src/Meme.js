import React from 'react'

const Meme = ({bottomText, topText, onchange, onclick,image}) => {
    return (
        <>
            <div className='meme-container'>
                <input type='text' placeholder='Top text' onChange={onchange} name='topText' value={topText}/>
                <input type='text' placeholder='Bottom text' onChange={onchange} name='bottomText' value={bottomText}/>
                <button onClick={onclick}>Get a new meme image  🖼</button>
            </div>
            <div className="meme">
                <img src={image} className="meme--image" alt='meme' />
                <h2 className="meme--text top">{topText}</h2>
                <h2 className="meme--text bottom">{bottomText}</h2>
            </div>
        </>
    )
}

export default Meme