import React from 'react'


function Share() {
    return (
        <>
            <form method="get" action="markup.html">
                <div>
                    <h2>Share</h2>
                </div>
                <div>
                    <label for="id"><small>ID</small></label>
                    <br></br>
                    <input type="text" placeholder="Recipient ID" id="title" name="title" required></input>
                </div>
                <div>
                    <label for="file"><small>File</small></label>
                    <br></br>
                    <input type="file" id="file" name="file" required></input>
                </div>
                <div>
                    <label for="description"><small>Description</small></label>
                    <br></br>
                    <textarea id="description" placeholder="Optional" name="description"></textarea>
                </div>
                <div>
                    <button type="submit">
                        <img src='share.svg' alt="Sent" style="width: 20px; height: 20px;"></img>
                    </button>
                </div>
            </form>
        </>
    );
}

export default Share;