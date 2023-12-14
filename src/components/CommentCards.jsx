import React, { useState } from "react";
import { useEffect } from "react";
import { useAsyncError, useParams } from "react-router-dom";
import { getCommentsByArticleId } from "../utils/api";
import { Card } from "./Card";

export default function CommentCards({
  comments,
  setComments,
  isLoading,
  setIsLoading,
}) {
  const [isError, setIsError] = useState(false);
  const { article_id } = useParams();

  useEffect(() => {
    getCommentsByArticleId(article_id)
      .then((commentsArray) => {
        setComments(commentsArray);
        setIsLoading(false);
      })
      .catch(({ response }) => {
        console.log(response, "in comments");
      });
  }, []);

  if (isError) {
    setIsError(false)
    return <ErrorPage message='commentcards' />;
  }

  if (isLoading) {
    return <h1>Loading comments...</h1>;
  } else {
    return (
      <section>
        {comments.map((comment) => {
          return (
            <Card key={comment.comment_id}>
              <div>
                <p>{comment.author}</p>
                <p>{comment.body}</p>
                <button className='vote-buttons'>Upvote</button>
                <p>{comment.votes}</p>
                <button className='vote-buttons'>Downvote</button>
              </div>
            </Card>
          );
        })}
      </section>
    );
  }
}
