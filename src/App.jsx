import { useState } from "react";
import React from 'react'
import "./App.css";
import Header from "./components/Header";
import ArticleCards from "./components/ArticleCards";

function App() {
const [articles, setArticles] = useState([])

  return (
    <BrowserRouter>
      <Header />
      <ArticleCards articles={articles} setArticles={setArticles}/>
    </BrowserRouter>
  );
}

export default App;
