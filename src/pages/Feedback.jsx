import { useNavigate } from "react-router-dom";

function Feedback() {
  const navigate = useNavigate();

  const answers = JSON.parse(localStorage.getItem("answers")) || [];

  // score logic
  const score = answers.filter(ans => ans && ans.length > 20).length;

  // breakdown (simple logic)
  const communication = answers.filter(ans => ans.length > 15).length;
  const clarity = answers.filter(ans => ans.length > 25).length;
  const confidence = answers.filter(ans => ans.length > 10).length;

  // message
  let message = "";
  if (score === answers.length && answers.length !== 0) {
    message = "🌟 Excellent performance!";
  } else if (score >= 3) {
    message = "👍 Good attempt!";
  } else {
    message = "⚠️ Needs improvement!";
  }

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2>Feedback</h2>

        <h3>Your Score: {score} / {answers.length}</h3>

        <p style={styles.message}>{message}</p>

        <p style={styles.tip}>
          💡 Try to give more detailed answers for better results.
        </p>

        <hr />

        <h3>Score Breakdown:</h3>

        <p>🗣 Communication: {communication} / {answers.length}</p>
        <p>🧠 Clarity: {clarity} / {answers.length}</p>
        <p>💪 Confidence: {confidence} / {answers.length}</p>

        <button style={styles.button} onClick={() => navigate("/")}>
          🔁 Try Again
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "80vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f1f5f9",
  },
  card: {
    background: "white",
    padding: "25px",
    borderRadius: "10px",
    width: "400px",
    textAlign: "center",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },
  message: {
    fontSize: "18px",
    margin: "10px 0",
  },
  tip: {
    fontSize: "14px",
    color: "#555",
  },
  button: {
    marginTop: "20px",
    width: "100%",
    padding: "10px",
    background: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Feedback;