import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css'

function Signup() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignup = (e) => {
        e.preventDefault();

        const usernamePattern = /^[a-zA-Z0-9_]{4,}$/;
        const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;

        if (usernamePattern.test(username) && passwordPattern.test(password)) {
            // Save the user details to localStorage or a database
            // Here, we'll just log the details to the console
            console.log('New user signed up:', { username, password });

            // Set the isLoggedIn state to true
            // Save the authentication token to localStorage or session storage
            localStorage.setItem('token', 'your_auth_token');
            // Redirect to the home page after successful signup
            navigate('/');
        } else {
            // Clear the username and password fields
            setUsername('');
            setPassword('');
            // Show an error message or perform any other error handling
            console.log('Invalid credentials');
        }

        // Clear the form fields
        setUsername('');
        setPassword('');

        // Redirect to the login page after successful signup
        navigate('/login');
    };

    return (
        <div className="signup-container">
            <h2>Signup</h2>
            <form className="signup-form" onSubmit={handleSignup}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit">Signup</button>
            </form>
        </div>

    );
}

export default Signup;
