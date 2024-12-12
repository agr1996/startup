import React from 'react'
import { useState } from 'react';
import './Markup.css'
import text from './text.svg'
import onePointCircle from './one-point-circle.svg'
import square3d from './square3d-corner-to-corner.svg'
import linear from './linear.svg'
import undo from './undo.svg'
import erase from './erase.svg'

function Markup() {
    const [file, setFile] = useState();

    function getFile(event) {
        setFile(URL.createObjectURL(event.target.files[0]));

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

                <div className='panda'>
                    <img src={file} />
                </div>
                <div>
                    <input type="file" accept='image/svg+xml' onChange={getFile} />
                </div>
            </div>

        </>
    );
}

export default Markup;