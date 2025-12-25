import type { QuizProposition } from "../type";

export const QuizPropositionButton = ({
  proposition,
  isSelected,
  isAnswered,
  onClick,
}: {
  proposition: QuizProposition;
  isSelected: boolean;
  isAnswered: boolean;
  onClick: () => void;
}) => {
  const getButtonClass = () => {
    if (!isAnswered) {
      return isSelected ? "btn-primary" : "btn-outline";
    }

    if (proposition.isValidAnswer) {
      return "btn-success";
    }

    if (isSelected && !proposition.isValidAnswer) {
      return "btn-error";
    }

  };

  return (
    <button
      onClick={onClick}
      className={`btn btn-lg w-full justify-start text-left ${getButtonClass()} p-3`}
    >
      <span className="text-base md:text-lg font-medium">
        {proposition.arabicWord.translation}
      </span>
    </button>
  );
};
