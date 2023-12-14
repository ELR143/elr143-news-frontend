import React from "react";
import { updateArticleVotes } from "./api";

export const upVote = (
  article,
  setArticle,
  isUpvoteActive,
  setIsUpvoteActive,
  setError
) => {
  const articleId = article.article_id;

  setArticle((currentArticle) => ({
    ...currentArticle,
    votes: currentArticle.votes + 1,
  }));

  updateArticleVotes(1, articleId)
    .then(() => {
      setIsUpvoteActive(!isUpvoteActive);

      setError(false);
    })
    .catch((err) => {
      setError(true);
      setArticle((currentArticle) => ({
        ...currentArticle,
        votes: currentArticle.votes - 1,
      }));
    });
};

export const downVote = (
  article,
  setArticle,
  isDownvoteActive,
  setIsDownvoteActive,
  setError
) => {
  const articleId = article.article_id;

  setArticle((currentArticle) => ({
    ...currentArticle,
    votes: currentArticle.votes - 1,
  }));

  updateArticleVotes(-1, articleId)
    .then(() => {
      setIsDownvoteActive(!isDownvoteActive);
      setError(false);
    })
    .catch((err) => {
      setError(true);
      setArticle((currentArticle) => ({
        ...currentArticle,
        votes: currentArticle.votes + 1,
      }));
    });
};
