
export type Quran = {
    surah: Surah[]
}

export type Surah = {
    id: number
    name: string
    transliteration: string
    translation: string
    origin: string
    total_verses: number
    verses: Verse[]
}

export type Verse = {
    surahNumber: number
    verseNumber: number
    verseArabic: string
    translation: string
}