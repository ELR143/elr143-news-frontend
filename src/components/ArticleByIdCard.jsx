import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../utils/api";
import { upVote, downVote } from "../utils/handleVotes";
import Header from "./HeaderUser";
import { ErrorPage } from "../pages/ErrorPathNotFound";
import { Error } from "./Error";

export default function ArticleByIdCard() {
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false)
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
    }).catch(({response}) => {
      console.log(response, 'in articlebyid')
      setIsError({message: 'hi there' })
    });
  }, []);

  if(isError) {
    return <Error message='articleById' />
  }

  if (isLoading) {
    return <h1>Loading article...</h1>;
  } else {
    return (
      <section>
        <h1>{article.title}</h1>
        <p>{article.topic}</p>
        <p>{article.author}</p>
        <p>{article.body}</p>
        <button
          className={isUpvoteActive ? "upvote-active" : ""}
          onClick={() => {
            {
              upVote(
                article,
                setArticle,
                isUpvoteActive,
                setIsUpvoteActive,
                setIsError
              );
            }
          }}
        >
          Upvote
        </button>
        <p>{article.votes}</p>
        <button
          className={isDownvoteActive ? "downvote-active" : ""}
          onClick={() => {
            {
              downVote(
                article,
                setArticle,
                isDownvoteActive,
                setIsDownvoteActive,
                setIsError
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
