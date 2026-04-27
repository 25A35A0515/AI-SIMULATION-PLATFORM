import { Link } from "react-router-dom";
import React from "react";

function Navbar() {

  const handleMouseEnter = (e) => {
    e.currentTarget.style.color = "#3B82F6"; // blue on hover
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.color = "white"; // revert to white
  };

  return (
    <div style={styles.nav}>
      <h2 style={styles.logo}>AI Interviewer Pro</h2>

      <div style={styles.links}>
        <Link
          to="/"
          style={styles.link}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Home
        </Link>
        <Link
          to="/how"
          style={styles.link}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          How It Works
        </Link>
        <Link
          to="/login"
          style={styles.link}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Login
        </Link>
      </div>
    </div>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px 30px",
    background: "#0f172a",
    color: "white",
    alignItems: "center",
  },
  logo: {
    margin: 0,
  },
  links: {
    display: "flex",
    gap: "20px",
  },
  link: {
    color: "white", // default white
    textDecoration: "none",
    fontWeight: "500",
    transition: "color 0.3s", // smooth color change
  },
};

export default Navbar;