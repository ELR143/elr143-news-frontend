import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../utils/api";
import { upVote, downVote } from "../utils/handleVotes";
import Error from "./Error";

export default function ArticleByIdCard() {
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [isUpvoteActive, setIsUpvoteActive] = useState(false);
  const [isDownvoteActive, setIsDownvoteActive] = useState(false);

  const { article_id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getArticleById(article_id).then((articleData) => {
      const copyArticleData = { ...articleData };
      copyArticleData.topic =
        copyArticleData.topic.charAt(0).toUpperCase() +
        copyArticleData.topic.slice(1);
      setArticle(copyArticleData);
      setIsLoading(false);
    });
  }, []);

  if (error) {
    return <Error message='Something went wrong. Please try again later' />;
  }

  if (isLoading) {
    return <h1>Loading article...</h1>;
  } else {
    return (
      <section className='single-article'>
        <img className='article-image' src={article.article_img_url}></img>
        <h1>{article.title}</h1>
        <p>{article.topic}</p>
        <p>{article.author}</p>
        <p>{article.body}</p>
        <button
          className={isUpvoteActive ? "upvote-active" : "button"}
          onClick={(e) => {
            e.target.disabled = true;
            {
              upVote(
                article,
                setArticle,
                isUpvoteActive,
                setIsUpvoteActive,
                setError
              );
            }
          }}
        >
          Upvote
        </button>
        <p>{article.votes}</p>
        <button
          className={isDownvoteActive ? "downvote-active" : "button"}
          onClick={(e) => {
            e.target.disabled = true;
            {
              downVote(
                article,
                setArticle,
                isDownvoteActive,
                setIsDownvoteActive,
                setError
              );
            }
          }}
        >
          Downvote
        </button>
      </section>
    );
  }
}
