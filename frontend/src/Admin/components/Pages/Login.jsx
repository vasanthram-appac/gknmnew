import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import for navigation

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]); // State to manage validation errors
    const navigate = useNavigate();

    const submit = async (e) => {
        e.preventDefault();

        // Front-end validation
        const validationErrors = [];
        if (!username.trim()) validationErrors.push("Username is required.");
        if (!password.trim()) validationErrors.push("Password is required.");

        if (validationErrors.length > 0) {
            setErrors(validationErrors);
            return;
        }

        try {
            // Backend validation
            const response = await fetch("http://localhost:8000/login", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password }),
            });

            const data = await response.json();

            if (response.ok) {
                // Successful login, redirect to dashboard
                alert("Login successful!");
                sessionStorage.setItem("username", data.data.username);
                sessionStorage.setItem("token", data.data.token);
                navigate("/admin/doctor"); 
                setUsername(""); // Clear input fields
                setPassword(""); // Clear input fields
            } else {
                // Show backend validation errors
                setErrors([data.message || "Invalid username or password."]);
            }
        } catch (error) {
            console.error("Error during login:", error);
            setErrors(["Something went wrong. Please try again."]);
        }
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <img
                    src="your_logo_url_here"
                    alt="Hospital Logo"
                    className="hospital-logo"
                />
                <h2 className="login-title">Login to Admin Panel</h2>

                {/* Display validation errors */}
                {errors.length > 0 && (
                    <div className="error-messages">
                        {errors.map((error, index) => (
                            <p key={index} className="error-message">{error}</p>
                        ))}
                    </div>
                )}

                <form onSubmit={submit}>
                    <div className="input-group">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            placeholder="Enter your username"
                            className="input-field"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Enter your password"
                            className="input-field"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="login-button">
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
