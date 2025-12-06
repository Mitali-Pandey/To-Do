import React from "react";
import "../components/About.css";

function About() {
  return (
    <div className="about d-flex justify-content-center align-items-center">
      <div className="container">
        <div className="d-flex"> <h1>About Us</h1> </div>
       
        <p>
          This To-Do application is designed to help you stay organized every
          day by allowing you to quickly add, edit, and manage tasks with ease.
          Its clean and minimal interface ensures a smooth, distraction- free
          experience while categories help you keep your workflow structured.
          Smart reminders keep you on track with deadlines, and completed tasks
          are stored so you can monitor your progress over time. Built with
          simplicity and functionality in mind, the app keeps your data secure
          and accessible whenever you need it. Whether you're managing work,
          studies, or personal goals, this application adapts to your needs and
          aims to make productivity effortless and enjoyable.
        </p>
      </div>
    </div>
  );
}

export default About;
