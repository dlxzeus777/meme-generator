import React from 'react'
import Meme from './Meme'
import Header from './Header'
import './style.css'

const App = () => {
    const [memesData, setMemesData] = React.useState([])
    const [memes, setMemes] = React.useState(JSON.parse(localStorage.getItem('memes')) || {
        topText: '',
        bottomText: '',
        memeImage: 'https://i.imgflip.com/58q6lo.png'
    })
    React.useEffect(() =>
    {
        fetch('https://api.imgflip.com/get_memes')
        .then(response => response.json())
        .then(data => setMemesData(data));
        localStorage.setItem('memes', JSON.stringify(memes));
    },[memes])


    function getNewImg()
    {
        const randomMeme = Math.floor(Math.random() * memesData.data.memes.length)
        const url = memesData.data.memes[randomMeme].url
        setMemes(prevMeme => 
            {
                return {...prevMeme, memeImage: url}
            })
    }

    function handleChange(e)
    {
        const {name,value} = e.target
        setMemes(prevMeme => ({
            ...prevMeme, [name]:value
        }))
    }


    return (
        <div className='container'>
            <Header />
            <Meme 
                onclick={getNewImg}
                image={memes.memeImage}
                topText={memes.topText}
                bottomText={memes.bottomText}
                onchange={handleChange}
            />
        </div>
    )
}

export default App