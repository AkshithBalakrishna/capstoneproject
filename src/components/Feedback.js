import { useState, useEffect } from "react";
import axios from "axios";
import "./Feedback.css";
import Navbar from "./Navbar";

function Feedback() {
  const [feedbackData, setFeedbackData] = useState("");

  useEffect(() => {
    axios.get("http://localhost:4001/feedbackData").then((res) => {
      setFeedbackData(res.data);
    });
  }, []);
  return (
    <header>
      <Navbar />
      <section id="feedbackSection">
        {feedbackData &&
          feedbackData.map((feedback) => (
            <div id="feedbackDiv" key={feedback._id}>
              <img id="feedbackImg" src={feedback.movieImage} />
              <h1 id="feedbackTitle">{feedback.movieTitle}</h1>
              <h3 id="feedbackUserName">{feedback.userName}</h3>
              <p id="feedbackFeedback">{feedback.movieFeedback}</p>
            </div>
          ))}
      </section>
    </header>
  );
}

export default Feedback;
