import type { Quran } from "../types/quranType";
import type { AllWords } from "../types/wordType";
import wordData from "./data.json";
import quranTranslated from "./quranTranslated.json"

export const arabicWords: AllWords = {
  words: JSON.parse(JSON.stringify(wordData)),
}

export const quran: Quran = {
  surah: JSON.parse(JSON.stringify(quranTranslated)),
}
