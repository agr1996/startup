import React from 'react'
import './SignIn.css'


function SignIn() {
    return (
        <>
            <form method="get" action="markup.html">
                <div>
                    <h2>Sign in</h2>
                </div>
                <div>
                    <label for="username"><small>Username</small></label>
                    <br></br>
                    <input type="text" id="username" name="username" required></input>
                </div>
                <div>
                    <label for="password"><small>Password</small></label>
                    <br></br>
                    <input type="password" id="password" name="password" required></input>
                </div>
                <div>
                    <input type="checkbox" id="rememberMe" name="rememberMe"></input>
                    <label for="rememberMe"><small>Remember me</small></label>
                </div>
                <div>
                    <button type="submit"><small>Sign in</small></button>
                </div>
            </form>
        </>
    );
}

export default SignIn;