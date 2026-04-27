import { Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import RoleSelection from "./components/RoleSelection";
import HowItWorks from "./components/HowItWorks";
import Benefits from "./components/Benefits";
import Footer from "./components/Footer";

import Interview from "./pages/Interview";
import Feedback from "./pages/Feedback";
import How from "./pages/How";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";

function Home() {
  return (
    <>
      <Hero />
      <RoleSelection />
      <HowItWorks />
      <Benefits />
    </>
  );
}

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        {/* ✅ Default = Home page */}
        <Route path="/" element={<Home />} />

        <Route path="/how" element={<How />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* 🔐 Protected Routes */}
        <Route
          path="/interview"
          element={
            localStorage.getItem("user") ? (
              <Interview />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />

        <Route
          path="/feedback"
          element={
            localStorage.getItem("user") ? (
              <Feedback />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />

        <Route
          path="/dashboard"
          element={
            localStorage.getItem("user") ? (
              <Dashboard />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;