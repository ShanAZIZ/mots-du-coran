export type ArabicWord = {
    arabicWord: string
    translation: string
    wordType: string
    wordArabicType: string
    chapter: string
}

export type AllWords = {
    words: ArabicWords[]
} 

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