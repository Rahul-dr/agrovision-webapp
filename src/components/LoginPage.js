// LoginPage.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";
import "../styles/LoginPage.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setIsAuthenticated } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://127.0.0.1:8000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        // Save the token (optional, for authentication in the app)
        localStorage.setItem("token", data.access_token);
        setIsAuthenticated(true);
        navigate("/home");
      } else {
        const error = await response.json();
        alert(error.detail || "Invalid credentials. Please try again.");
      }
    } catch (error) {
      alert("An error occurred while logging in. Please try again later.");
      console.error("Login error:", error);
    }
  };

  return (
    <div className="login-container">
      <h1>Welcome Back</h1>
      <form onSubmit={handleLogin} className="login-form">
        <input
          type="email"
          className="login-input"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          className="login-input"
          placeholder="Your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
      <p className="signup-link">
        Don't have an account? <a href="/signup">Sign Up</a>
      </p>
    </div>
  );
};

export default LoginPage;