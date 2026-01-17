
import type { Surah } from "../../types/quranType";
import { ArabicText } from "../../components/ArabicText";

export const SurahCard = ({ surah }: { surah: Surah }) => {
  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
      <div className="card-body">
        <div className="flex justify-between items-start gap-4">
          <div className="flex-1">
            <h2 className="card-title text-2xl md:text-3xl mb-2">
             <ArabicText text={surah.name} />
            </h2>
            <p className="text-lg font-semibold text-primary">{surah.transliteration}</p>
            <p className="text-base text-base-content/70">{surah.translation}</p>
          </div>
          <div className="badge badge-lg badge-primary">{surah.id}</div>
        </div>
        
        <div className="divider my-2"></div>
        
        <div className="flex flex-wrap gap-2 text-sm">
          <div className="badge badge-outline">{surah.total_verses} versets</div>
        </div>
      </div>
    </div>
  );
};