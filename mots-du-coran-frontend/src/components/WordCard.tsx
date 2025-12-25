import type { ArabicWord } from "../type";
import { ArabicText } from "./ArabicText";

export function WordCard({ word }: { word: ArabicWord }) {

  return (
    <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-all duration-300 border border-base-200">
      <div className="card-body">
        {word.wordType && (
          <div className="flex items-center gap-2 mb-2">
            <i className="fas fa-book-open text-primary"></i>
            <div className="badge badge-primary badge-sm font-semibold">
              {word.wordType}
            </div>
          </div>
        )}

        <div className="space-y-2">
          <div className="text-3xl font-amiri-quran font-bold text-base-content text-right">
            <ArabicText text={word.arabicWord} />
          </div>
          <div className="divider my-2"></div>

          <div className="text-lg font-medium text-base-content">
            {word.translation}
          </div>
        </div>
      </div>
    </div>
  );
}
