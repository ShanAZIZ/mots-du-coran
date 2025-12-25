import { BrowserRouter, Route, Routes } from "react-router";
import { HomePage } from "./pages/HomePage";
import { WordsPage } from "./pages/Words/WordsPage";
import { QuizPage } from "./pages/Quiz/QuizPage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/mots" element={<WordsPage />} />
          <Route path="/quizz" element={<QuizPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
