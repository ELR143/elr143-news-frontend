import { updateArticleVotes } from "./api";

export const upVote = (
  article,
  setArticle,
  isUpvoteActive,
  setIsUpvoteActive,
  setIsError
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
      console.log(err);
      setIsError(err);
    });
};

export const downVote = (
  article,
  setArticle,
  isDownvoteActive,
  setIsDownvoteActive,
  setIsError
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
      console.log(err);
      setIsError(err);
    });
};
