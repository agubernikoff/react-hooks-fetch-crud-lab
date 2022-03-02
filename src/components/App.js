import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then((resp) => resp.json())
      .then((data) => setQuestions(data));
  }, []);
  console.log(questions);

  function addnewQuestion(newQ) {
    setQuestions([...questions, newQ]);
  }

  function deleteQuestion(deletedQid) {
    const updatedQ = questions.filter((q) => q.id !== deletedQid);
    setQuestions(updatedQ);
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? (
        <QuestionForm addnewQuestion={addnewQuestion} />
      ) : (
        <QuestionList questions={questions} deleteQuestion={deleteQuestion} />
      )}
    </main>
  );
}

export default App;
