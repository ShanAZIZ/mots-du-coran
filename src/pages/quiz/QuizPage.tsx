import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";
import type { Quiz } from "../../types/quizType";
import { getQuiz } from "../../service/quiz-service";
import { arabicWords } from "../../data/data";
import { QuizEndCard } from "./components/QuizEndCard";
import { QuizQuestionCard } from "./components/QuizQuestionCard";

export const QuizPage = () => {
  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isQuizComplete, setIsQuizComplete] = useState(false);
  let navigate = useNavigate();

  useEffect(() => {
    setQuiz(getQuiz(arabicWords.words)); // TODO persistence
  }, []);

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (!quiz) return;
    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsQuizComplete(true);
    }
  };

  if (!quiz) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="loading loading-spinner loading-lg text-primary"></div>
        <p className="text-lg md:text-xl ml-4">Chargement du quiz...</p>
      </div>
    );
  }

  if (isQuizComplete) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 bg-base-200">
        <QuizEndCard score={score} totalQuestions={quiz.questions.length} />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center mt-10 p-4">
      <div className="mb-4 md:mb-6 text-center w-full">
        <div className="badge badge-lg badge-primary mb-2">
          Question {currentQuestionIndex + 1} sur {quiz.questions.length}
        </div>
      </div>

      <QuizQuestionCard
        key={currentQuestionIndex}
        question={quiz.questions[currentQuestionIndex]}
        onAnswer={handleAnswer}
      />

      <button
        onClick={handleNextQuestion}
        className="btn btn-primary btn-lg mt-4 md:mt-6"
      >
        {currentQuestionIndex < quiz.questions.length - 1
          ? "Question suivante"
          : "Terminer"}
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
      <button
        className="btn btn-error btn-lg mt-4 md:mt-6"
        onClick={() => navigate("/")}
      >
        Quitter
      </button>
    </div>
  );
};
