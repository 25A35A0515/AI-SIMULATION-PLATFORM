import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Signup() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSignup = () => {
    setError("");

    if (!email || !password) {
      setError("Please fill all fields");
      return;
    }

    if (!validateEmail(email)) {
      setError("Enter valid email");
      return;
    }

    if (password.length < 4) {
      setError("Password must be at least 4 characters");
      return;
    }

    // ✅ Store full user data
    const userData = {
      email,
      password,
    };

    localStorage.setItem("userData", JSON.stringify(userData));

    alert("Account created successfully!");

    // ✅ Auto login (optional)
    localStorage.setItem("user", email);

    navigate("/interview"); // direct interview ki pampistham
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2>Create Account</h2>

        <input
          style={styles.input}
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          style={styles.input}
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p style={styles.error}>{error}</p>}

        <button style={styles.button} onClick={handleSignup}>
          Sign Up
        </button>

        <p style={styles.link} onClick={() => navigate("/login")}>
          Already have an account? Login
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#eef2f7",
  },
  card: {
    padding: "30px",
    background: "white",
    borderRadius: "12px",
    width: "330px",
    textAlign: "center",
    boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
  },
  input: {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "6px",
    border: "1px solid #ccc",
  },
  button: {
    width: "100%",
    padding: "10px",
    background: "#16a34a",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    marginTop: "10px",
  },
  error: {
    color: "red",
    fontSize: "13px",
  },
  link: {
    marginTop: "15px",
    color: "#2563eb",
    cursor: "pointer",
    fontSize: "14px",
  },
};

export default Signup;