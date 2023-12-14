import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import "./App.css";
import Header from "./components/HeaderUser";
import HomePage from "./pages/HomePage";

import ArticleByIdPage from "./pages/ArticleByIdPage";
import { ErrorPage } from "./pages/ErrorPathNotFound";

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
            element={<ErrorPage title='404 - Page Not Found' message="Looks like you're lost!"/>}
          />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
