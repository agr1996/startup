import React from 'react'
import Blueprint from './Blueprint.png'



function Home() {
    return (
        <>
            <h2>About</h2>
            <p>Voodle is a combination of vector and doodle and is a web application that lets you directly mark up SVG files, then securely share them with other users.</p>
            <img src={Blueprint} className='blueprint' />

        </>
    );
}

export default Home;