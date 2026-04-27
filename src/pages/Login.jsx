import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // ✅ Email validation
  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  // ✅ Handle Login
  const handleLogin = () => {
    setError("");

    if (!email || !password) {
      setError("Please enter email and password");
      return;
    }

    if (!validateEmail(email)) {
      setError("Enter a valid email");
      return;
    }

    // ✅ Check if user exists (from signup)
    const storedUser = JSON.parse(localStorage.getItem("userData"));

    if (!storedUser) {
      setError("No account found. Please Sign Up");
      return;
    }

    if (storedUser.email !== email || storedUser.password !== password) {
      setError("Invalid email or password");
      return;
    }

    setLoading(true);

    // simulate API
    setTimeout(() => {
      localStorage.setItem("user", email); // session
      navigate("/interview");
    }, 1000);
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={{ marginBottom: "15px" }}>Login</h2>

        <input
          style={styles.input}
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div style={{ position: "relative" }}>
          <input
            style={styles.input}
            type={showPassword ? "text" : "password"}
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <span
            style={styles.showBtn}
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "Hide" : "Show"}
          </span>
        </div>

        {error && <p style={styles.error}>{error}</p>}

        <button
          style={{
            ...styles.button,
            background: loading ? "#93c5fd" : "#2563eb",
            cursor: loading ? "not-allowed" : "pointer",
          }}
          onClick={handleLogin}
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        {/* ✅ Signup Navigation */}
        <div style={styles.links}>
          <p
            style={styles.link}
            onClick={() => navigate("/signup")}
          >
            Don't have an account? Sign Up
          </p>
        </div>
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
    boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
    width: "330px",
    textAlign: "center",
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
    color: "white",
    border: "none",
    borderRadius: "6px",
    marginTop: "10px",
    fontWeight: "bold",
  },
  error: {
    color: "red",
    fontSize: "13px",
    marginTop: "5px",
  },
  showBtn: {
    position: "absolute",
    right: "10px",
    top: "50%",
    transform: "translateY(-50%)",
    fontSize: "12px",
    cursor: "pointer",
    color: "#2563eb",
  },
  links: {
    marginTop: "15px",
    fontSize: "14px",
  },
  link: {
    color: "#2563eb",
    cursor: "pointer",
  },
};

export default Login;