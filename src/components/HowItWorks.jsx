import { useNavigate } from "react-router-dom";

function HowItWorks() {
  const navigate = useNavigate();

  return (
    <div style={styles.section}>
      <h2 style={styles.heading}>How It Works</h2>

      <div style={styles.container}>
        <div
          style={styles.card}
          onClick={() => navigate("/")}
          onMouseEnter={hover}
          onMouseLeave={leave}
        >
          <div style={styles.icon}>📌</div>
          <h3>Select Role</h3>
          <p>Choose your desired job role</p>
        </div>

        <div
          style={styles.card}
          onClick={() => navigate("/interview")}
          onMouseEnter={hover}
          onMouseLeave={leave}
        >
          <div style={styles.icon}>📝</div>
          <h3>Answer Questions</h3>
          <p>Respond to interview questions</p>
        </div>

        <div
          style={styles.card}
          onClick={() => navigate("/feedback")}
          onMouseEnter={hover}
          onMouseLeave={leave}
        >
          <div style={styles.icon}>🤖</div>
          <h3>Get AI Feedback</h3>
          <p>Receive instant performance report</p>
        </div>
      </div>
    </div>
  );
}

const hover = (e) => {
  e.currentTarget.style.transform = "translateY(-10px) scale(1.05)";
  e.currentTarget.style.boxShadow = "0 15px 25px rgba(0,0,0,0.2)";
};

const leave = (e) => {
  e.currentTarget.style.transform = "scale(1)";
  e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.15)";
};

const styles = {
  section: {
    padding: "70px 20px",
    background: "#f8fafc",
    textAlign: "center",
  },

  heading: {
    fontSize: "30px",
    fontWeight: "600",
    color: "#1e293b",
    marginBottom: "50px",
  },

  container: {
    display: "flex",
    justifyContent: "center",
    gap: "30px",
    flexWrap: "wrap",
  },

  card: {
    background: "linear-gradient(135deg, #60a5fa, #2563eb)",
    color: "white",
    padding: "30px",
    borderRadius: "15px",
    width: "240px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
  },

  icon: {
    fontSize: "35px",
    marginBottom: "10px",
  },
};

export default HowItWorks;