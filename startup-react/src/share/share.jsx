import React from 'react';
import share from './share.svg';

function Share() {
    return (
        <>
            <form method="get" action="markup.html">
                <div>
                    <h2>Share</h2>
                </div>
                <div>
                    <label htmlFor="id"><small>ID</small></label>
                    <br />
                    <input type="text" placeholder="Recipient ID" id="title" name="title" required />
                </div>
                <div>
                    <label htmlFor="file"><small>File</small></label>
                    <br />
                    <input type="file" id="file" name="file" required />
                </div>
                <div>
                    <label htmlFor="description"><small>Description</small></label>
                    <br />
                    <textarea id="description" placeholder="Optional" name="description"></textarea>
                </div>
                <div>
                    <button type="submit">
                        <img src={share} alt="Sent" style={{ width: '20px', height: '20px' }} />
                    </button>
                </div>
            </form>
        </>
    );
}

export default Share;
