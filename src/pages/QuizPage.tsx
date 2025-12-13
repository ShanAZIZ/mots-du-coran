import { useEffect, useState } from "react";
import type { Quiz } from "../type";
import { getQuiz } from "../service/quiz-service";
import { arabicWords } from "../data/data";
import { QuizQuestionCard } from "../components/QuizQuestionCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router";

export const QuizPage = () => {
  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isQuizComplete, setIsQuizComplete] = useState(false);

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
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="card bg-base-100 shadow-xl max-w-md w-full mx-4">
          <div className="card-body text-center p-6 md:p-8">
            <h2 className="card-title text-2xl md:text-3xl font-bold justify-center mb-4">
              Quiz terminé !
            </h2>
            <p className="text-5xl md:text-6xl mb-6">🎉</p>
            <div className="stats shadow">
              <div className="stat place-items-center">
                <div className="stat-title">Votre score</div>
                <div className="stat-value text-primary">
                  {score} / {quiz.questions.length}
                </div>
                <div className="stat-desc">
                  {score === quiz.questions.length
                    ? "Parfait !"
                    : score >= quiz.questions.length / 2
                      ? "Bien joué !"
                      : "Continuez à pratiquer !"}
                </div>
              </div>
            </div>
            <div className="card-actions justify-center mt-6">
              <Link to={"/"} className="btn btn-primary btn-lg">
                Terminer
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
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
    </div>
  );
};
