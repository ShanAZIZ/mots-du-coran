import { BrowserRouter, Route, Routes } from "react-router";
import { HomePage } from "./pages/HomePage";
import { WordsPage } from "./pages/WordsPage";
import { QuizPage } from "./pages/QuizPage";

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
