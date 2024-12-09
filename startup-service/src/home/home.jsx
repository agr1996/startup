import React from 'react'
import Blueprint from './Blueprint.png'
import './Home.css'



function Home() {

    const [quote, setQuote] = React.useState('Loading...');
    const [quoteRef, setQuoteRef] = React.useState('Loading...');
    const [ping, setPingData] = React.useState('Loading...');

    React.useEffect(() => {
        fetch('https://scripture.dicax.org/api/day')
        .then((response) => response.json())
        .then((data) => {
            setQuote(data.text);
            setQuoteRef(data.reference);
        })
        .catch();
        //can remove this was here for learning
        fetch('/api/ping')
        .then((response) => response.json())
        .then((data) => {
            setPingData(data.msg);
        })
        .catch();
    } , []);

    async function thirdPartyAPI() {
        const response = await fetch('https://scripture.dicax.org/api/day');
        const data = await response.json();
        console.log(data);

    }

    return (
        <>
            <h2>About</h2>
            <p>Voodle is a combination of vector and doodle and is a web application that lets you directly mark up SVG files, then securely share them with other users.</p>
            <img src={Blueprint} className='blueprint' />
            <div className='quote'>{quote}</div>
            <div className='quoteRef'>{quoteRef}</div>
            <div className='ping'>{ping}</div>

        </>
    );
}

export default Home;