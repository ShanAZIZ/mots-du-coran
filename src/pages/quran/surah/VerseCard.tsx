import type { Verse } from "../../../types/quranType";
import { ArabicText } from "../../../components/ArabicText";

export const VerseCard = ({ verse }: { verse: Verse }) => {
  return (
    <div className="card bg-base-100 shadow-lg mb-4">
      <div className="card-body">
        <div className="flex items-start gap-4">
          <div className="badge badge-primary badge-lg">
            {verse.verseNumber}
          </div>
          <div className="flex-1">
            <p className="text-2xl md:text-3xl text-right mb-4 leading-loose">
              <ArabicText text={verse.verseArabic} />
            </p>
            <div className="divider my-2"></div>
            <p className="text-base md:text-lg text-base-content/80">
              {verse.translation}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
