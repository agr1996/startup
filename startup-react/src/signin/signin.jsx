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
                    <label htmlFor="username"><small>Username</small></label>
                    <br />
                    <input type="text" id="username" name="username" required />
                </div>
                <div>
                    <label htmlFor="password"><small>Password</small></label>
                    <br />
                    <input type="password" id="password" name="password" required />
                </div>
                <div>
                    <input type="checkbox" id="rememberMe" name="rememberMe" />
                    <label htmlFor="rememberMe"><small>Remember me</small></label>
                </div>
                <div>
                    <button type="submit"><small>Sign in</small></button>
                </div>
            </form>
        </>
    );
}

export default SignIn;