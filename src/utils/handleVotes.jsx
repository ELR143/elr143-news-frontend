import { React, useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { updateArticleVotes } from "./api";

export const upVote = (
  article,
  setArticle,
  isUpvoteActive,
  setIsUpvoteActive,
  setError
) => {
  const articleId = article.article_id;

  let increment = 0;
  if (isUpvoteActive) {
    increment = -1;
  } else {
    increment = 1;
  }

  updateArticleVotes(increment, articleId)
    .then(() => {
      setArticle((updatedArticle) => {
        const newVotes = isUpvoteActive
          ? updatedArticle.votes - 1
          : updatedArticle.votes + 1;

        setIsUpvoteActive(!isUpvoteActive);

        return {
          ...updatedArticle,
          votes: newVotes,
        };
      });
    })
    .catch((err) => {
      setError({message: 'Internet Connection Issue: Your vote has not been logged. Please try again later'});
      setIsLoading(false);
      console.log(err);
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
      setError({message: 'Internet Connection Issue: Your vote has not been logged. Please try again later'});
      setIsLoading(false);
      console.log(err);
    });
};
