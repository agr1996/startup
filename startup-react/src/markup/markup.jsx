import React from 'react'
import { useState } from 'react';

function Markup() {
    const [file, setFile] = useState(null);
    const [Preview, setPreview] = useState(null);

    const handleFileChange = (event) => {
        const selectedFile = setFile(event.target.files[0]);
        setFile(selectedFile);
        if (selectedFile) {
            const previewURL = URL.createObjectURL(selectedFile);
            setPreview(previewURL);
        }
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
                <input type="file" name='image' accept='image/svg+xml' onChange={handleFileChange} />
                <button onClick={handleFileUpload}>Upload</button>
            </div>
            {Preview && <img src={Preview} alt='Preview' />}
        </>
    );
}

export default Markup;