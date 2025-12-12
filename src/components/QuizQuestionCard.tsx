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
          <p className="text-xs md:text-sm text-base-content/60 mb-2">
            Quelle est la traduction de :
          </p>
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

        {isAnswered && (
          <div className="mt-4 md:mt-6 text-center">
            {question.propositions[selectedProposition!].isValidAnswer ? (
              <div className="alert alert-success">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-current shrink-0 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="font-semibold">Correct !</span>
              </div>
            ) : (
              <div className="alert alert-error">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-current shrink-0 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-sm md:text-base">
                  Faux ! La bonne réponse est :{" "}
                  <strong>
                    {
                      question.propositions.find((p) => p.isValidAnswer)
                        ?.arabicWord.translation
                    }
                  </strong>
                </span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
