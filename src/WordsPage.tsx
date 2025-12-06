import { useEffect, useState } from "react";

import { WordCard } from "./components/WordCard";
import type { ArabicWord } from "./type";
import { SearchBar } from "./components/SearchBar";

export function WordsPage() {
  const [words, setWords] = useState<ArabicWord[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState("");

  const filteredWords = words.filter((w) => {
    const q = search.toLowerCase().trim();
    return (
      w.arabicWord.toLowerCase().includes(q) ||
      w.translation.toLowerCase().includes(q)
    );
  });

  useEffect(() => {
    const loadWords = async () => {
      try {
        setIsLoading(true);
        const res = await fetch("data.json");
        if (!res.ok) {
          throw new Error("Failed to load words");
        }
        const data = (await res.json()) as ArabicWord[];
        setWords(data);
      } catch (err) {
        setError(
          "حدث خطأ أثناء تحميل الكلمات. حاول مرة أخرى لاحقًا. \nUne erreur est survenue",
        );
      } finally {
        setIsLoading(false);
      }
    };
    loadWords();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-lg text-primary" />
      </div>
    );
  }
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-error text-center px-4">{error}</p>
      </div>
    );
  }
  return (
    <main className="min-h-screen px-4 py-6">
      <SearchBar value={search} onChange={setSearch} />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredWords.map((word) => (
          <WordCard
            key={`${word.arabicWord}-${word.translation}`}
            word={word}
          />
        ))}
      </div>
    </main>
  );
}
