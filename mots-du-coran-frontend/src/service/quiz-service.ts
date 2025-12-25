import type { ArabicWord, Quiz, QuizProposition, QuizQuestion } from "../type";

const getRandomWord = (allWords: ArabicWord[]) => {
  return allWords[Math.floor(Math.random() * allWords.length)];
};

const getshuffledPropositions = (array: QuizProposition[]): QuizProposition[] => {
  const shuffled = [...array]; // Create a copy to avoid mutating the original

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // Swap elements
  }
  
  return shuffled;
}

const getRandomWords = (
  allWords: ArabicWord[],
  count: number = 10,
): ArabicWord[] => {
  const words: ArabicWord[] = [];
  while (words.length < count) {
    const word = getRandomWord(allWords);
    const wordNotInArray = !words.some((w) => w.arabicWord === word.arabicWord);
    if (wordNotInArray) {
      words.push(word);
    }
  }
  return words;
};

const getQuizQuestion = (
  answerWord: ArabicWord,
  allWords: ArabicWord[],
  propositionCount: number = 3,
): QuizQuestion => {
  const propositionWords: ArabicWord[] = [];
  while (propositionWords.length < propositionCount) {
    const word = getRandomWord(allWords);
    const wordIsValidProposition =
      !propositionWords.some((w) => w.arabicWord === word.arabicWord) &&
      word.arabicWord !== answerWord.arabicWord;
    if (wordIsValidProposition) propositionWords.push(word);
  }

  const propositions: QuizProposition[] = propositionWords.map((word) => {
    return {
      arabicWord: word,
      isValidAnswer: false,
    };
  });

  propositions.push({
    arabicWord: answerWord,
    isValidAnswer: true,
  });

  return {
    questionWord: answerWord,
    propositions: getshuffledPropositions(propositions),
  };
};

export const getQuiz = (allWords: ArabicWord[]): Quiz => {
  const words = getRandomWords(allWords);
  return {
    questions: words.map((word) => getQuizQuestion(word, allWords))
  };
};


