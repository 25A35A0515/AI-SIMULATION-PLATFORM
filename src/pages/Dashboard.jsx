import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <h2>Welcome Back 👋</h2>

      <div style={styles.card}>
        <p>Interviews Completed: 3</p>
        <p>Average Score: 75%</p>
      </div>

      <button
        style={styles.button}
        onClick={() => navigate("/interview")}
      >
        Start New Interview
      </button>
    </div>
  );
}

const styles = {
  container: {
    padding: "40px",
    textAlign: "center",
  },
  card: {
    background: "#e0ecff",
    padding: "20px",
    margin: "20px auto",
    width: "300px",
    borderRadius: "10px",
  },
  button: {
    padding: "12px 20px",
    background: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default Dashboard;