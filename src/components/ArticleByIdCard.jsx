import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../utils/api";
import Header from "./Header";

export default function ArticleByIdCard() {
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const { article_id } = useParams();

  useEffect(() => {
    getArticleById(article_id).then((articleData) => {
      const copyArticleData = { ...articleData };
      copyArticleData.topic =
        copyArticleData.topic.charAt(0).toUpperCase() +
        copyArticleData.topic.slice(1);
      setArticle(copyArticleData);
      setIsLoading(false);
    });
  }, []);

  return (
    <section>
      <Header title={article.title} />
      <p>{article.topic}</p>
      <p>{article.author}</p>
      <p>{article.body}</p>
      <p>{article.votes}</p>
    </section>
  );
}
