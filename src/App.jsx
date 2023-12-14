import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import "./App.css";
import Header from "./components/HeaderUser";
import HomePage from "./pages/HomePage";

import ArticleByIdPage from "./pages/ArticleByIdPage";

function App() {
  return (
    <BrowserRouter>
      <main className='app'>
        <Header title='ELR143 News' />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/articles/:article_id' element={<ArticleByIdPage />} />
          {/* <Route path='/articles/:article_id' element={<HomePage />} /> */}
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
