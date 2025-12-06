import type { ArabicWord } from "../type";


type WordCardProps = {
  word: ArabicWord;
};
export function WordCard({ word }: WordCardProps) {
  return (
    <div className="card bg-gray-600 shadow-md">
      <div className="card-body">
        <h2 className="card-title text-2xl text-right">{word.arabicWord}</h2>
        <p className="text-sm opacity-80">{word.translation}</p>
        <div className="mt-2">
          <span className="badge badge-secondary">
            {word.wordType}
          </span>
        </div>
      </div>
    </div>
  );
}