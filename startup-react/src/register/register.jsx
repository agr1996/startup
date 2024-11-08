import React from 'react'


function Register() {
    return (
        <>
            <form method="get" action="markup.html">
                <h2>Create Account</h2>
                <div>
                    <label for="username"><small>Username</small></label>
                    <br></br>
                    <input type="text" id="username" name="username" required></input>
                </div>
                <div>
                    <label for="email"><small>Email</small></label>
                    <br></br>
                    <input type="email" id="email" name="email" required></input>
                </div>
                <div>
                    <label for="password"><small>Password</small></label>
                    <br></br>
                    <input type="password" id="password" name="password" required></input>
                </div>
                <div>
                    <label for="confirm-password"><small>Confirm Password</small></label>
                    <br></br>
                    <input type="password" id="confirm-password" name="confirm-password" required></input>
                </div>
                <div>
                    <button type="submit"><small>Submit</small></button>
                </div>
            </form>
        </>
    )
}

export default Register;