// SignupPage.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/SignUpPage.css";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match. Please try again.");
      return;
    }

    try {
      const response = await fetch("http://127.0.0.1:8000/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: formData.username,
          email: formData.email,
          password: formData.password,
        }),
      });

      if (response.ok) {
        alert("Signup successful! Redirecting to login page...");
        navigate("/login");
      } else {
        const error = await response.json();
        alert(error.detail || "Signup failed. Please try again.");
      }
    } catch (error) {
      alert("An error occurred during signup. Please try again later.");
      console.error("Signup error:", error);
    }
  };

  return (
    <div className="signup-container">
      <h2>Create an Account</h2>
      <form onSubmit={handleSubmit} className="signup-form">
        <input
          type="text"
          name="username"
          placeholder="Choose a username"
          value={formData.username}
          onChange={handleChange}
          className="signup-input"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="you@example.com"
          value={formData.email}
          onChange={handleChange}
          className="signup-input"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Create a password"
          value={formData.password}
          onChange={handleChange}
          className="signup-input"
          required
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm your password"
          value={formData.confirmPassword}
          onChange={handleChange}
          className="signup-input"
          required
        />
        <button type="submit" className="signup-button">
          Sign Up
        </button>
      </form>
      <p className="login-link">
        Already have an account? <a href="/login">Login</a>
      </p>
    </div>
  );
};

export default SignupPage;