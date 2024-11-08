import React from 'react'


function Register() {
    return (
        <>
            <form method="get" action="markup.html">
                <h2>Create Account</h2>
                <div>
                    <label htmlFor="username"><small>Username</small></label>
                    <br />
                    <input type="text" id="username" name="username" required />
                </div>
                <div>
                    <label htmlFor="email"><small>Email</small></label>
                    <br />
                    <input type="email" id="email" name="email" required></input>
                </div>
                <div>
                    <label htmlFor="password"><small>Password</small></label>
                    <br />
                    <input type="password" id="password" name="password" required />
                </div>
                <div>
                    <label htmlFor="confirm-password"><small>Confirm Password</small></label>
                    <br />
                    <input type="password" id="confirm-password" name="confirm-password" required />
                </div>
                <div>
                    <button type="submit"><small>Submit</small></button>
                </div>
            </form>
        </>
    )
}

export default Register;