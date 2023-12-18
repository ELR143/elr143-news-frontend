import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getArticles } from "../utils/api";

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
      <section className='article-grid-container'>
        {articles.map((article) => {
          return (
            <Link
              key={article.article_id}
              to={`/articles/${article.article_id}`}
              className='article-grid-item'
              style={{ textDecoration: "none" }}
            >
              <div className='article-card'>
                <img className='article-image'
                  src={article.article_img_url}
                  alt='article image'
                ></img>
                <h2>{article.title}</h2>
                <p>Written by {article.author}</p>
                <p>
                  {article.topic.charAt(0).toUpperCase() +
                    article.topic.slice(1)}
                </p>
              </div>
            </Link>
          );
        })}
      </section>
    );
  }
}
