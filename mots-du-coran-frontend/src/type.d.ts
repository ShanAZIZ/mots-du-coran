export type ArabicWord = {
    arabicWord: string
    translation: string
    wordType: string
    wordArabicType: string
    chapter: string
    verse?: Verse
}

export type Verse = {
    arabic: string
    verseNum: number
    chapterNum: number
    arabicChapter: string
    translationChapter: string
    transliterationChapter: string
    translation: string
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