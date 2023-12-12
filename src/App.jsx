import { useState } from "react";
import React from "react";
import "./App.css";
import Header from "./components/Header";
import ArticleCards from "./components/ArticleCards";

function App() {
  return (
    <>
      <Header />
      <ArticleCards />
    </>
  );
}

export default App;
