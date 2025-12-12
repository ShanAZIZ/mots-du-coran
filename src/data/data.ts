import jsonData from "./data.json";
import type { AllWords } from "../type";

export const arabicWords: AllWords = {
  words: JSON.parse(JSON.stringify(jsonData)),
}
