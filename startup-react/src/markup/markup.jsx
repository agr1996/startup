import React from 'react'
import { useState } from 'react';

function Markup() {
    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleFileUpload = () => {
        if (file) {
            // Process the file here
            console.log('File uploaded:', file);
            // You can read the file content using FileReader or send it to a server
        }
    };

    return (
        <>
            <h1>Markup</h1>
            <div>
                <input type="file" onChange={handleFileChange} />
                <button onClick={handleFileUpload}>Upload</button>
            </div>
        </>
    );
}

export default Markup;