import { useState } from "react";
import type { QuizQuestion } from "../type";
import { QuizPropositionButton } from "./QuizPropositionButton";

export const QuizQuestionCard = ({
  question,
  onAnswer,
}: {
  question: QuizQuestion;
  onAnswer: (isCorrect: boolean) => void;
}) => {
  const [selectedProposition, setSelectedProposition] = useState<number | null>(
    null,
  );
  const [isAnswered, setIsAnswered] = useState(false);

  const handlePropositionClick = (index: number) => {
    if (isAnswered) return;

    setSelectedProposition(index);
    setIsAnswered(true);

    const isCorrect = question.propositions[index].isValidAnswer;
    onAnswer(isCorrect);
  };

  return (
    <div className="card bg-base-100 shadow-xl w-full max-w-2xl mx-4">
      <div className="card-body p-4 md:p-6 lg:p-8">
        <div className="mb-6 md:mb-8 text-center">
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2"
            dir="rtl"
          >
            {question.questionWord.arabicWord}
          </h2>
        </div>

        <div className="space-y-3">
          {question.propositions.map((proposition, index) => (
            <QuizPropositionButton
              key={index}
              proposition={proposition}
              isSelected={selectedProposition === index}
              isAnswered={isAnswered}
              onClick={() => handlePropositionClick(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
