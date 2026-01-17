import type { ArabicWord } from "./wordType"

export type Quiz = {
    questions: QuizQuestion[]
}

export type QuizQuestion = {
    questionWord: ArabicWord
    propositions: QuizProposition[]
}

export type QuizProposition = {
    arabicWord: ArabicWord
    isValidAnswer: boolean
}
