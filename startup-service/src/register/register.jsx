import React from 'react'
import { useNavigate } from 'react-router-dom';


function Register() {

    const navigate = useNavigate();

    const [username, setUserName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');
    const [displayError, setDisplayError] = React.useState(null);


    function handleSubmit(event) {
        event.preventDefault();
        if (password != confirmPassword) {
            alert("Passwords don't match")
            return
        }
        if (Create(username, email, password)) {
            navigate('/Markup');
        }

    }

    async function Create(username, email, password) {
        const response = await fetch('/api/auth/create', {
            method: 'post',
            body: JSON.stringify({ username: username, email: email, password: password }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        if (response?.status === 200) {
            localStorage.setItem('username', username);
            return true;

        } else {
            const body = await response.json();
            alert(`⚠ Error: ${body.msg}`);
            return false
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h2>Create Account</h2>
                <div>
                    <label htmlFor="username"><small>Username</small></label>
                    <br />
                    <input type="text" id="username" name="username" required value={username} onChange={(e) => setUserName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="email"><small>Email</small></label>
                    <br />
                    <input type="email" id="email" name="email" required value={email} onChange={(e) => setEmail(e.target.value)}></input>
                </div>
                <div>
                    <label htmlFor="password"><small>Password</small></label>
                    <br />
                    <input type="password" id="password" name="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="confirm-password"><small>Confirm Password</small></label>
                    <br />
                    <input type="password" id="confirm-password" name="confirm-password" required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                </div>
                <div>
                    <button type="submit"><small>Submit</small></button>
                </div>
            </form>
        </>
    )
}

export default Register;