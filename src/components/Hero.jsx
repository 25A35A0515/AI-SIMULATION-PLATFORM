import React from "react";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  // 🔐 Start Interview Logic
  const handleStart = () => {
    const user = localStorage.getItem("user");

    if (user) {
      navigate("/interview"); // already logged in
    } else {
      navigate("/login"); // go to login first
    }
  };

  return (
    <div style={styles.hero}>
      <div style={styles.overlay}></div>

      <div style={styles.content}>
        <h1 style={styles.title}>
          Practice Real Interviews with AI
        </h1>

        <p style={styles.subtitle}>
          Get instant feedback and improve your skills
        </p>

        <button
          style={styles.button}
          onClick={handleStart}
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = "scale(1.05)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.transform = "scale(1)")
          }
        >
          Start Interview
        </button>
      </div>
    </div>
  );
}

const styles = {
  hero: {
    position: "relative",
    width: "100%",
    minHeight: "70vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: "60px 20px",
    color: "white",
    background: "linear-gradient(135deg, #1e3a8a, #5b21b6, #312e81)",
  },

  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background:
      "linear-gradient(to bottom right, rgba(0,0,0,0.4), rgba(0,0,0,0.2))",
    zIndex: 1,
  },

  content: {
    position: "relative",
    zIndex: 2,
    maxWidth: "700px",
  },

  title: {
    fontSize: "3rem",
    fontWeight: "bold",
    marginBottom: "20px",
  },

  subtitle: {
    fontSize: "1.2rem",
    marginBottom: "40px",
    color: "#e0e7ff",
  },

  button: {
    padding: "14px 30px",
    background: "#6366f1",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "500",
    transition: "all 0.3s ease",
  },
};

export default Hero;