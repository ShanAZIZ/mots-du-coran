import { useEffect, useState } from "react";

import { WordCard } from "../components/WordCard";
import type { ArabicWord } from "../type";
import { SearchBar } from "../components/SearchBar";
import { BackButton } from "../components/BackButton";
import { arabicWords } from "../data/data";

export function WordsPage() {
  const [words, setWords] = useState<ArabicWord[]>([]);
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
    setWords(arabicWords.words)
  })

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
