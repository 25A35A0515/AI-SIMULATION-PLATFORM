import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Interview() {
  const navigate = useNavigate();

  const [role, setRole] = useState("Web Developer");
  const [questions, setQuestions] = useState([]);
  const [currentQ, setCurrentQ] = useState(0);
  const [answer, setAnswer] = useState("");
  const [answers, setnswers] = useState([]);

  // ✅ SAFE PROTECTION
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      navigate("/login");
    }
  }, []); // ❗ no dependency

  // ✅ LOAD QUESTIONS
  useEffect(() => {
    setQuestions([
      "Tell me about yourself",
      "What is HTML?",
      "What is CSS?",
      "What is React?",
      "Difference between CSS and Bootstrap?"
    ]);
  }, []);

  const handleNext = () => {
    if (!answer.trim()) {
      alert("Enter answer");
      return;
    }

    const updated = [...answers, answer];
    setAnswers(updated);
    setAnswer("");

    if (currentQ < questions.length - 1) {
      setCurrentQ(currentQ + 1);
    } else {
      localStorage.setItem("answers", JSON.stringify(updated));
      navigate("/feedback");
    }
  };

  // ❗ IMPORTANT: prevent crash before questions load
  if (questions.length === 0) {
    return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
  }

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2>Interview</h2>

        <p><b>Q{currentQ + 1}:</b> {questions[currentQ]}</p>

        <textarea
          style={styles.textarea}
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />

        <button style={styles.button} onClick={handleNext}>
          {currentQ === questions.length - 1 ? "Submit" : "Next"}
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
  },
  card: {
    background: "white",
    padding: "20px",
    width: "400px",
    borderRadius: "10px",
  },
  textarea: {
    width: "100%",
    height: "100px",
    margin: "10px 0",
  },
  button: {
    width: "100%",
    padding: "10px",
    background: "blue",
    color: "white",
    border: "none",
  },
};

export default Interview;