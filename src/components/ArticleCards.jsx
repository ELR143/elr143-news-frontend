import React from "react";
import { useState, useEffect } from "react";
import { getArticles } from "../utils/api";
import { Card } from "./Card";

export default function ArticleCards() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles().then((data) => {
      setArticles(data);
    });
  }, []);

  return (
    <section>
      {articles.map((article) => {
        return (
          <Card key={article.article_id}>
            <div>
              <h2>{article.title}</h2>
              <p>{article.author}</p>
              <p>
                {article.topic.charAt(0).toUpperCase() + article.topic.slice(1)}
              </p>
            </div>
          </Card>
        );
      })}
    </section>
  );
}
