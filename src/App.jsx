import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import ArticleByIdCard from "./components/ArticleByIdCard";

function App() {
  return (
    <BrowserRouter>
      <main className='app'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/articles/:article_id' element={<ArticleByIdCard />} />
          {/* <Route path='/articles/:article_id' element={<HomePage />} /> */}
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
