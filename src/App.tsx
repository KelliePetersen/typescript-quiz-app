import React from 'react';
import QuestionCard from './components/QuestionCard';

function App() {
  const startQuiz = async () => {

  }

  const checkAnswer = (event: React.MouseEvent<HTMLButtonElement>) => {

  }

  const nextQuestion = () => {

  }

  return (
    <div className="App">
      <h1>REACT QUIZ</h1>
      <button className="start" onClick={startQuiz}>
        Start Quiz
      </button>
      <p className="score">Score:</p>
      <p>Loading questions...</p>
      <QuestionCard />
      <button className="next" onClick={nextQuestion}>
        Next
      </button>
    </div>
  );
}

export default App;
