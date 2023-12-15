import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getArticles } from "../utils/api";
import { Card } from "./Card";

export default function ArticleCards() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getArticles().then((data) => {
      setArticles(data);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <section>
        {articles.map((article) => {
          return (
            <Link
              key={article.article_id}
              to={`/articles/${article.article_id}`}
            >
              <Card key={article.article_id}>
                <div>
                  <h2>{article.title}</h2>
                  <p>{article.author}</p>
                  <p>
                    {article.topic.charAt(0).toUpperCase() +
                      article.topic.slice(1)}
                  </p>
                </div>
              </Card>
            </Link>
          );
        })}
      </section>
    );
  }
}
