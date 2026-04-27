function How() {
    return (
      <div style={styles.container}>
        <h2 style={styles.heading}>How It Works</h2>
  
        <div style={styles.cards}>
  
          <div style={styles.card}>
            <div style={styles.number}>1</div>
            <h3>Select Role</h3>
            <p>Choose your preferred job role and difficulty level.</p>
          </div>
  
          <div style={styles.card}>
            <div style={styles.number}>2</div>
            <h3>Answer Questions</h3>
            <p>Respond to AI-generated interview questions in real-time.</p>
          </div>
  
          <div style={styles.card}>
            <div style={styles.number}>3</div>
            <h3>Get AI Feedback</h3>
            <p>Receive instant feedback on your performance and improve.</p>
          </div>
  
        </div>
      </div>
    );
  }
  
  const styles = {
    container: {
      minHeight: "80vh",
      padding: "40px",
      background: "#f1f5f9",
      textAlign: "center",
    },
    heading: {
      marginBottom: "30px",
    },
    cards: {
      display: "flex",
      justifyContent: "center",
      gap: "20px",
      flexWrap: "wrap",
    },
    card: {
      background: "white",
      padding: "25px",
      width: "250px",
      borderRadius: "10px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    },
    number: {
      background: "#2563eb",
      color: "white",
      width: "40px",
      height: "40px",
      borderRadius: "50%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: "0 auto 10px",
      fontWeight: "bold",
    },
  };
  
  export default How;