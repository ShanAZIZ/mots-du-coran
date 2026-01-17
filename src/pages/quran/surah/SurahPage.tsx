import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { quran } from "../../../data/data";
import { ArabicText } from "../../../components/ArabicText";
import { VerseCard } from "./VerseCard";
import type { Surah } from "../../../types/quranType";

export const SurahPage = () => {
    let { surahId } = useParams();
  const [surah, setSurah] = useState<Surah | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const foundSurah = quran.surah.find((s) => s.id.toString() === surahId);
    setSurah(foundSurah || null);
    setLoading(false);
  }, [surahId]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-base-200">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (!surah) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-base-200">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Sourate non trouvée</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-200">
      <div className="sticky top-0 z-50 bg-base-100 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex items-center justify-between gap-4">
            {/* TODO FAS + Espace a la fin de la sourate + small header */}
            <Link to={"/"} className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Retour
            </Link>
            <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-base-content flex-shrink-0">
              {surah.id} - <ArabicText text={surah.name} /> - {surah.translation}
            </h1>
            <div className="w-10"></div>
          </div>
        </div>
      </div>

      <div className="p-5 max-w-4xl mx-auto">
        {surah.verses.map((verse) => (
          <VerseCard key={verse.verseNumber} verse={verse} />
        ))}
      </div>
      {surah.verses.length === 0 && (
        <div className="text-center mt-8">
          <div className="alert alert-info">
            <span>
              Les versets de cette sourate seront bientôt disponibles.
            </span>
          </div>
        </div>
      )}
    </div>
  );
}