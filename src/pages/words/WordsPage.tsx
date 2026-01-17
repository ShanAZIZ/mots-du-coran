import { useEffect, useState } from "react";

import { WordCard } from "../quran/WordCard";
import { SearchBar } from "../../components/SearchBar";
import { arabicWords } from "../../data/data";
import { StickyTopBar } from "../../components/StickyTopBar";
import type { ArabicWord } from "../../types/wordType";

const normalizeForSearch = (text: string): string => {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // Supprime les diacritiques
    .trim();
};

export function WordsPage() {
  const [words, setWords] = useState<ArabicWord[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setWords(arabicWords.words);
  }, []);

  const filteredWords = words.filter((w) => {
    const query = normalizeForSearch(search);
    const arabicNormalized = normalizeForSearch(w.arabicWord);
    const translationNormalized = normalizeForSearch(w.translation);
    const chapterNormalized = w.chapter ? normalizeForSearch(w.chapter) : "";

    return (
      arabicNormalized.includes(query) ||
      translationNormalized.includes(query) ||
      chapterNormalized.includes(query)
    );
  });

  const groupedWords = filteredWords.reduce(
    (acc, word) => {
      const chapter = word.chapter;
      if (!acc[chapter]) {
        acc[chapter] = [];
      }
      acc[chapter].push(word);
      return acc;
    },
    {} as Record<string, ArabicWord[]>,
  );

  return (
    <main className="min-h-screen bg-base-200">
      <StickyTopBar>
        <span>Dictionnaire Arabe</span>
      </StickyTopBar>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
        <div className="mb-6 sm:mb-8 space-y-4 sm:space-y-6">
          <SearchBar value={search} onChange={setSearch} />
        </div>

        <div className="alert shadow-sm mb-4 sm:mb-6">
          <div>
            <span className="text-sm sm:text-base text-base-content/80">
              {filteredWords.length} mot{filteredWords.length > 1 ? "s" : ""}{" "}
              trouvé{filteredWords.length > 1 ? "s" : ""}
            </span>
          </div>
        </div>

        <div className="my-8 text-sm opacity-60 justify-center items-center">
          <p>
            Source des données :{" "}
            <a
              href="https://www.arabereussite.com/apprendre-les-mots-du-coran/"
              target="_blank"
              rel="noopener noreferrer"
              className="link link-hover underline"
            >
              Arabe Réussite
            </a>
          </p>
        </div>

        {Object.entries(groupedWords).map(([chapter, chapterWords]) => (
          <details
            key={chapter}
            className="collapse collapse-arrow bg-base-100 border border-base-300 mb-3 sm:mb-4"
            name="chapter-accordion"
            open
          >
            <summary className="collapse-title font-semibold">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                <i className="fas fa-book-open text-primary text-xl sm:text-2xl"></i>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-base-content">
                  {chapter}
                </h2>
                <div className="badge badge-md sm:badge-lg badge-primary badge-outline">
                  {chapterWords.length}
                </div>
              </div>
            </summary>

            <div className="collapse-content">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 pt-4">
                {chapterWords.map((word, index) => (
                  <WordCard
                    key={`${word.arabicWord}-${word.translation}-${index}`}
                    word={word}
                  />
                ))}
              </div>
            </div>
          </details>
        ))}

        {filteredWords.length === 0 && (
          <div className="hero min-h-[400px]">
            <div className="hero-content text-center">
              <div className="max-w-md">
                <h3 className="text-2xl font-bold text-base-content/60">
                  Aucun mot trouvé
                </h3>
                <p className="py-4 text-base-content/60">
                  Aucun résultat pour "{search}"
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
