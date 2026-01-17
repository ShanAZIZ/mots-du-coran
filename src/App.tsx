import { BrowserRouter, Route, Routes } from "react-router";
import { HomePage } from "./pages/HomePage";
import { WordsPage } from "./pages/words/WordsPage";
import { QuranPage } from "./pages/quran/QuranPage";
import { SurahPage } from "./pages/quran/surah/SurahPage";
import { QuizPage } from "./pages/quiz/QuizPage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/coran" element={<QuranPage />} />
          <Route path="/coran/surah/:surahId" element={<SurahPage />} />
          <Route path="/mots" element={<WordsPage />} />
          <Route path="/quizz" element={<QuizPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
