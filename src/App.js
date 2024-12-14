import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import LoginPage from "./components/LoginPage";
import SignUpPage from "./components/SignUpPage";
import MainScreen from "./components/MainScreen";
import Prediction from "./components/PredictionScreen";
import ContactUs from "./components/ContactUs";
import ProtectedRoute from "./ProtectedRoute";
import { AuthProvider } from "./AuthContext";

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <div className="app-container">
                    <NavBar />
                    <Routes>
                        <Route path="/" element={<Navigate replace to="/signup" />} />  
                        <Route path="/signup" element={<SignUpPage />} />  
                        <Route path="/login" element={<LoginPage />} />  
                        <Route element={<ProtectedRoute />}>
                            <Route path="/home" element={<MainScreen />} />
                            <Route path="/prediction" element={<Prediction />} />
                            <Route path="/contact" element={<ContactUs />} />
                        </Route>
                    </Routes>
                    <Footer />
                </div>
            </Router>
        </AuthProvider>
    );
};

export default App;
