import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions, deleteQuestion }) {
  const questionList = questions.map((question) => (
    <QuestionItem
      key={question.id}
      question={question}
      deleteQuestion={deleteQuestion}
    />
  ));
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questionList}</ul>
    </section>
  );
}

export default QuestionList;
