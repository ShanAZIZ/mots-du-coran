import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { quran } from "../../data/data";
import { ArabicText } from "../../components/ArabicText";
import { SearchBar } from "../../components/SearchBar";
import { SurahCard } from "./SurahCard";
import { StickyTopBar } from "../../components/StickyTopBar";
import type { Quran } from "../../types/quranType";

export const QuranPage = () => {
  const [quranData, setQuranData] = useState<Quran | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setQuranData(quran);
  }, []);

  // TODO raccourci vers un verset
  const filteredSurahs =
    quranData?.surah.filter(
      (surah) =>
        surah.name.includes(searchTerm) ||
        surah.id.toString().includes(searchTerm) ||
        surah.transliteration
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        surah.translation.toLowerCase().includes(searchTerm.toLowerCase()),
    ) || [];

  if (!quranData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-200">
      <StickyTopBar>
        <ArabicText text="القرآن الكريم" />
        <span> - Le Saint Coran</span>
      </StickyTopBar>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6 sm:mb-8 space-y-4 sm:space-y-6">
          <SearchBar value={searchTerm} onChange={setSearchTerm} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSurahs.map((surah) => (
            <div onClick={() => navigate(`surah/${surah.id}`)}>
              <SurahCard key={surah.id} surah={surah} />
            </div>
          ))}
        </div>

        {filteredSurahs.length === 0 && (
          <div className="text-center mt-8">
            <p className="text-lg text-base-content/70">
              Aucune sourate trouvée
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
