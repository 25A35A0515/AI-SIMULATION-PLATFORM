import { useNavigate } from "react-router-dom";
import { useState } from "react";

function RoleSelection() {
  const navigate = useNavigate();
  const [role, setRole] = useState("Web Developer");
  

  const handleStart = () => {
    localStorage.setItem("role", role);
    localStorage.removeItem("answers");
    navigate("/interview");
  };

  return (
    <div style={styles.container}>
      <div style={styles.overlay}></div>

      <div style={styles.box}>
        <h2 style={styles.title}>Select Your Role</h2>

        <select
          style={styles.select}
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option>Web Developer</option>
          <option>Data Scientist</option>
          <option>AI Engineer</option>
        </select>

        <button style={styles.button} onClick={handleStart}>
          Start Interview
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    position: "relative",
    width: "100%",
    minHeight: "80vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1555949963-aa79dcee981d?auto=format&fit=crop&w=1350&q=80')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },

  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background:
      "linear-gradient(to bottom right, rgba(0,0,0,0.5), rgba(0,0,0,0.2))",
    zIndex: 1,
  },

  box: {
    position: "relative",
    zIndex: 2,
    padding: "40px",
    borderRadius: "12px",
    background: "rgba(255,255,255,0.95)",
    color: "#000",
    minWidth: "350px",
    maxWidth: "450px",
    width: "100%",
    textAlign: "center",
    boxShadow: "0 8px 20px rgba(0,0,0,0.2)", // added shadow
  },

  title: {
    marginBottom: "20px",
    fontSize: "24px",
    fontWeight: "600",
  },

  select: {
    width: "100%",
    padding: "12px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "16px",
    marginBottom: "20px",
  },

  button: {
    width: "100%",
    padding: "14px",
    background: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
    transition: "0.3s",
  },
};

export default RoleSelection;