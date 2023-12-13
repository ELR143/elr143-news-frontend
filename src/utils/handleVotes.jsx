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

  let increment = isUpvoteActive ? -1 : 1;

  setArticle((currentArticle) => ({
    ...currentArticle,
    votes: currentArticle.votes + increment,
  }));

  updateArticleVotes(increment, articleId)
    .then(() => {
      setIsUpvoteActive(!isUpvoteActive);
    })
    .catch((err) => {
      setError({ message: "Something went wrong. Please try again later" });
      setArticle((currentArticle) => ({
        ...currentArticle,
        votes: currentArticle.votes - increment,
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

  let increment = 0;
  if (isDownvoteActive) {
    increment = 1;
  } else {
    increment = -1;
  }

  updateArticleVotes(increment, articleId);

  updateArticleVotes(increment, articleId)
    .then(() => {
      setArticle((updatedArticle) => {
        const newVotes = isDownvoteActive
          ? updatedArticle.votes + 1
          : updatedArticle.votes - 1;

        setIsDownvoteActive(!isDownvoteActive);

        return {
          ...updatedArticle,
          votes: newVotes,
        };
      });
    })
    .catch((err) => {
      setError({ message: "Something went wrong. Please try again later" });
    });
};
