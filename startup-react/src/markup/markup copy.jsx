import React from 'react'
import { useState } from 'react';
import './Markup.css'

function Markup() {
    const [file, setFile] = useState();

    function getFile(event) {
        setFile(URL.createObjectURL(event.target.files[0]));

    }

    return (
        <>
            <h1>Markup</h1>
            <div class="toolbar">
            <button><img src="assets/text.svg" alt="Button 1" /></button>
            <button><img src="assets/one-point-circle.svg" alt="Button 2" /></button>
            <button><img src="assets/square3d-corner-to-corner.svg" alt="Button 3" /></button>
            <button><img src="assets/linear.svg" alt="Button 4" /></button>
            <button><img src="assets/undo.svg" alt="Button 5" /></button>
            <button><img src="assets/erase.svg" alt="Button 6" /></button>
        </div>
            <div>
                <input type="file" accept='image/svg+xml' onChange={getFile} />
            </div>
            <div>
                <img  src={file} />
            </div>
        </>
    );
}

export default Markup;