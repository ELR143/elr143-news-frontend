import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArticleById, updateArticleVotes } from "../utils/api";
import { upVote, downVote } from "../utils/handleVotes";
import Header from "./Header";

export default function ArticleByIdCard() {
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isUpvoteActive, setIsUpvoteActive] = useState(false);
  const [isDownvoteActive, setIsDownvoteActive] = useState(false);

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
      <button
        className={isUpvoteActive ? "upvote-active" : ""}
        onClick={() => {
          {
            upVote(setArticle, isUpvoteActive, setIsUpvoteActive);
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
            downVote(setArticle, isDownvoteActive, setIsDownvoteActive);
          }
        }}
      >
        Downvote
      </button>
    </section>
  );
}
