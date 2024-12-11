import React from 'react'
import { useNavigate } from 'react-router-dom';
import './SignIn.css'


function SignIn() {
    const navigate = useNavigate();

    const [username, setUserName] = React.useState('');
    const [password, setPassword] = React.useState('');


    function handleSubmit(event) {
        event.preventDefault()
        SignIn(username, password)
    }

    async function SignIn(username, password) {
        const response = await fetch('/api/auth/login', {
            method: 'post',
            body: JSON.stringify({ username: username, password: password }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        if (response?.status === 200) {
            localStorage.setItem('username', username);
            navigate('/Markup');
        } else {
            const body = await response.json();
            alert(`⚠ Error: ${body.msg}`);
            console.log("unauthorized");
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <h2>Sign in</h2>
                </div>
                <div>
                    <label htmlFor="username"><small>Username</small></label>
                    <br />
                    <input type="text" id="username" name="username" required value={username} onChange={(e) => setUserName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="password"><small>Password</small></label>
                    <br />
                    <input type="password" id="password" name="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
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



