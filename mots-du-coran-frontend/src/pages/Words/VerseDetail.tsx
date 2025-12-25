import type { Verse } from "../../type";

export const VerseDetail = ({ verse }: { verse: Verse }) => {

  return (
    <div className="mt-4 p-4 bg-base-200 rounded-lg border border-base-300 space-y-3 animate-fadeIn">
      <div className="flex items-center justify-between text-sm opacity-70">
        <span className="font-semibold">{verse.translationChapter}</span>
        <span className="font-arabic" dir="rtl">{verse.arabicChapter}</span>
      </div>
      <div className="divider my-2"></div>
      <div className="text-2xl font-arabic leading-loose text-right" dir="rtl">
        {verse.arabic}
      </div>
      <div className="text-base text-base-content/80 leading-relaxed italic">
        {verse.translation}
      </div>
      <div className="text-right text-sm opacity-60">
        Verset {verse.verseNum}
      </div>
    </div>
  );
}