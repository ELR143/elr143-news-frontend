import React from "react";
import { useEffect } from "react";
import { getArticles } from "../utils/api";
import { Card } from "./Card";

export default function ArticleCards({
  articles,
  setArticles,
  isLoading,
  setIsLoading,
}) {
  useEffect(() => {
    setIsLoading(true);
    getArticles().then((data) => {
      setArticles(data);
      setIsLoading(false);
    });
  }, [articles]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <section>
        {articles.map((article) => {
          return (
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
          );
        })}
      </section>
    );
  }
}
