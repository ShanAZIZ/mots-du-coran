import { useState } from "react";
import type { ArabicWord } from "../type";
import { VerseDetail } from "./VerseDetail";
import { ArabicText } from "./ArabicText";

export function WordCard({ word }: { word: ArabicWord }) {
  const [showVerse, setShowVerse] = useState(false);

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
        {word.verse && (
          <div className="mt-4">
            <button
              onClick={() => setShowVerse(!showVerse)}
              className="badge badge-outline badge-lg gap-2 cursor-pointer hover:badge-primary transition-all"
            >
              <i className="fas fa-quran text-sm"></i>
              <span className="font-semibold">
                {word.verse?.translationChapter} {word.verse?.chapterNum}:
                {word.verse?.verseNum}
              </span>
              <i
                className={`fas fa-chevron-${showVerse ? "up" : "down"} text-xs`}
              ></i>
            </button>
          </div>
        )}
        {word.verse && showVerse && <VerseDetail verse={word.verse} />}
      </div>
    </div>
  );
}
