import type { ArabicWord } from "../type";


type WordCardProps = {
  word: ArabicWord;
};
export function WordCard({ word }: WordCardProps) {
  return (
    <div className="card shadow-md">
      <div className="card-body">
        <h2 className="card-title text-2xl text-right">{word.arabicWord}</h2>
        <p className="text-sm opacity-80">{word.translation}</p>
          <span className="badge badge-secondary text-sm">
            {word.wordType}
          </span>
      </div>
      <div className="card-actions justify-end">
        <span className="text-accent-content  p-3">
           {word.chapter}
        </span>
      </div>
    </div>
  );
}