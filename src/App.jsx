import { useState } from "react";
import React from "react";
import "./App.css";
import Header from "./components/Header";
import ArticleCards from "./components/ArticleCards";

function App() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <Header />
      <ArticleCards
        articles={articles}
        setArticles={setArticles}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
    </>
  );
}

export default App;
