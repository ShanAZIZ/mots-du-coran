import { useEffect, useState } from "react";

import { WordCard } from "../components/WordCard";
import type { ArabicWord } from "../type";
import { SearchBar } from "../components/SearchBar";
import { LoadingPage } from "./LoadingPage";
import { ErrorPage } from "./ErrorPage";
import { BackButton } from "../components/BackButton";

export function WordsPage() {
  const [words, setWords] = useState<ArabicWord[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<boolean | null>(null);
  const [search, setSearch] = useState("");

  const filteredWords = words.filter((w) => {
    // TODO meilleure recherche https://fr.wikipedia.org/wiki/Normalisation_Unicode
    const q = search.toLowerCase().trim().normalize("NFC")
    return (
      w.arabicWord.toLowerCase().normalize("NFC").includes(q) ||
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
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    loadWords();
  }, []);

  if (isLoading) <LoadingPage />
  if (error) <ErrorPage />

  return (
    
    <main className="min-h-screen xl:mx-36 px-4 py-6">
      <BackButton />
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
  )
}
