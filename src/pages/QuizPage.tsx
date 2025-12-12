import { useEffect, useState } from "react";
import type { Quiz } from "../type";
import { getQuiz } from "../service/quiz-service";
import { arabicWords } from "../data/data";

export const QuizPage = () => {
  const [quiz, setQuiz] = useState<Quiz | null>(null);

  useEffect(() => {
    setQuiz(getQuiz(arabicWords.words)); // TODO persistence
  }, []);

  return <>En cours de développement</>;
};
