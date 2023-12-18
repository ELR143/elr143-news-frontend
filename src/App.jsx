import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/HeaderUser";
import HomePage from "./pages/HomePage";
import ArticleByIdPage from "./pages/ArticleByIdPage";
import { ErrorPathNotFound } from "./pages/ErrorPathNotFound";

function App() {
  return (
    <BrowserRouter>
      <main className='app'>
        <Header title='ELR143 News' />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/articles/:article_id' element={<ArticleByIdPage />} />
          <Route
            path='/*'
            element={
              <ErrorPathNotFound
                title='404 - Page Not Found'
                message="Looks like you're lost!"
              />
            }
          />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
