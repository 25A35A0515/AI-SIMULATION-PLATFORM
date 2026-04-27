function Benefits() {
  return (
    <div style={styles.section}>
      <h2 style={styles.heading}>Benefits</h2>

      <div style={styles.container}>
        <div style={styles.card} onMouseEnter={hover} onMouseLeave={leave}>
          💻 Technical Testing
        </div>

        <div style={styles.card} onMouseEnter={hover} onMouseLeave={leave}>
          🤖 AI Feedback
        </div>

        <div style={styles.card} onMouseEnter={hover} onMouseLeave={leave}>
          🗣 Communication Improvement
        </div>

        <div style={styles.card} onMouseEnter={hover} onMouseLeave={leave}>
          🎯 Real Interview Experience
        </div>
      </div>
    </div>
  );
}

const hover = (e) => {
  e.currentTarget.style.transform = "translateY(-8px) scale(1.05)";
  e.currentTarget.style.boxShadow = "0 12px 20px rgba(0,0,0,0.2)";
};

const leave = (e) => {
  e.currentTarget.style.transform = "scale(1)";
  e.currentTarget.style.boxShadow = "0 6px 12px rgba(0,0,0,0.1)";
};

const styles = {
  section: {
    padding: "70px 20px",
    background: "#ffffff",
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
    gap: "20px",
    flexWrap: "wrap",
  },

  card: {
    background: "#dbeafe",
    padding: "25px",
    borderRadius: "12px",
    width: "260px",
    fontWeight: "500",
    transition: "all 0.3s ease",
    boxShadow: "0 6px 12px rgba(0,0,0,0.1)",
    cursor: "default",
  },
};

export default Benefits;