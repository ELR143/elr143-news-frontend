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
  const { article_id } = useParams();

  useEffect(() => {
    getCommentsByArticleId(article_id).then((commentsArray) => {
      setComments(commentsArray);
      setIsLoading(false);
    });
  }, []);

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
