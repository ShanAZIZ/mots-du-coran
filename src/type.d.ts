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

type Quiz = {
    questions: QuizQuestion[]
}

type QuizQuestion = {
    ArabicWord: ArabicWord
    propositions: QuizProposition[]
}

type QuizProposition = {
    arabicWord: ArabicWord
    isValidAnswer: boolean
}