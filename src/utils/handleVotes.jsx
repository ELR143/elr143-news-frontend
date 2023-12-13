export const upVote = (setArticle, isUpvoteActive, setIsUpvoteActive) => {
  if (isUpvoteActive) {
    setArticle((currentArticle) => ({
      ...currentArticle,
      votes: currentArticle.votes - 1,
    }));
    setIsUpvoteActive(!isUpvoteActive);
  } else {
    setArticle((currentArticle) => ({
      ...currentArticle,
      votes: currentArticle.votes + 1,
    }));
    setIsUpvoteActive(!isUpvoteActive);
  }
};

export const downVote = (setArticle, isDownvoteActive, setIsDownvoteActive) => {
  setIsDownvoteActive(!isDownvoteActive);

  if (isDownvoteActive) {
    setArticle((currentArticle) => ({
      ...currentArticle,
      votes: currentArticle.votes + 1,
    }));
  } else {
    setArticle((currentArticle) => ({
      ...currentArticle,
      votes: currentArticle.votes - 1,
    }));
  }
};
