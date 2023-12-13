import { React, useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { updateArticleVotes } from "./api";

export const upVote = (
  article,
  setArticle,
  isUpvoteActive,
  setIsUpvoteActive
) => {
  const articleId = article.article_id;
  const [error, setError] = useState(false);

  let increment = 0;
  if (isUpvoteActive) {
    increment = -1;
  } else {
    increment = 1;
  }

  console.log(error);
  updateArticleVotes(increment, articleId).then(() => {
    setArticle((updatedArticle) => {
      const newVotes = isUpvoteActive
        ? updatedArticle.votes - 1
        : updatedArticle.votes + 1;

      setIsUpvoteActive(!isUpvoteActive);

      return {
        ...updatedArticle,
        votes: newVotes,
      };
    }).catch((err) => {
      setError("Something went wrong");
      setIsLoading(false);
      console.log(err);
    });
  });
};

export const downVote = (
  article,
  setArticle,
  isDownvoteActive,
  setIsDownvoteActive
) => {
  const articleId = article.article_id;

  let increment = 0;
  if (isDownvoteActive) {
    increment = 1;
  } else {
    increment = -1;
  }

  updateArticleVotes(increment, articleId).then(() => {
    setArticle((updatedArticle) => {
      const newVotes = isDownvoteActive
        ? updatedArticle.votes + 1
        : updatedArticle.votes - 1;

      setIsDownvoteActive(!isDownvoteActive);

      return {
        ...updatedArticle,
        votes: newVotes,
      };
    }).catch((err) => {
      setError("Something went wrong");
      setIsLoading(false);
      console.log(err);
    });
  });
};
