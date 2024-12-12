import React from 'react'
import { useState } from 'react';
import './Markup.css'
import text from './text.svg'
import onePointCircle from './one-point-circle.svg'
import square3d from './square3d-corner-to-corner.svg'
import linear from './linear.svg'
import undo from './undo.svg'
import erase from './erase.svg'
import { isAuthenticated } from '../AuthState';
import { useNavigate } from 'react-router-dom';
import { ImageEvent, GameNotifier } from '../gameNotifier';

function Markup() {
    const [file, setFile] = useState();

    if (!isAuthenticated()) {
        const navigate = useNavigate();
        navigate('/SignIn');
    }
    
    React.useEffect(() => {
        console.log('Loading SVG');
        const svgContainer = document.getElementById('svg');
        loadSvgIntoDom('/api/svg', svgContainer);
    }, []);

    React.useEffect(() => {
        GameNotifier.addHandler(handleEvent);
    
        return () => {
          GameNotifier.removeHandler(handleEvent);
        };
      });

    function handleEvent(event) {
        console.log('Markup event', event);
        if (event.type === ImageEvent.Loadsvg) {
            const svgContainer = document.getElementById('svg');
            loadSvgIntoDom('/api/svg', svgContainer);
        }
    }

    async function getFile(event) {
        const svgContainer = document.getElementById('svg');
        await loadSvgIntoDom(URL.createObjectURL(event.target.files[0]), svgContainer);
        const svg = svgContainer.innerHTML;
        fetch('/api/svg', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ svg: svg }),
        })
            .then((response) => {
                if (response.ok) {
                    GameNotifier.broadcastEvent('Markup', ImageEvent.Loadsvg, 0);
                } else {
                    throw new Error('Failed to save SVG');
                }
            })
            .catch((ex) => {
                console.error(ex);
            });
    }

    async function loadSvgIntoDom(url, parentElement) {
        const response = await fetch(url);
        const text = await response.text();
        console.log(text);
        const xmlDoc = new DOMParser().parseFromString(text, 'text/xml');
        const docEle = xmlDoc.documentElement;
        // If there is no viewbox then add one.
        if (!docEle.getAttribute("viewBox")) {
            console.log("0 0 " + docEle.width.baseVal.value + " " + docEle.height.baseVal.value);
            docEle.setAttribute("viewBox", "0 0 " + docEle.width.baseVal.value + " " + docEle.height.baseVal.value);
        }

        parentElement.innerHTML = '';
        parentElement.append(document.importNode(xmlDoc.documentElement, true));
    }

    return (
        <>
            <div className='Markup'>
                <h1>Markup</h1>
                <div class="toolbar">
                    <button><img src={text} alt="Sent" /></button>
                    <button><img src={onePointCircle} alt="Sent" /></button>
                    <button><img src={square3d} alt="Sent" /></button>
                    <button><img src={linear} alt="Sent" /></button>
                    <button><img src={undo} alt="Sent" /></button>
                    <button><img src={erase} alt="Sent" /></button>
                </div>

                <div id='svg' className='panda'>

                </div>
                <div>
                    <input type="file" accept='image/svg+xml' onChange={getFile} />
                </div>
            </div>

        </>
    );
}

export default Markup;