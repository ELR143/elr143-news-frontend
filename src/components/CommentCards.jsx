import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { deleteComment, getCommentsByArticleId } from "../utils/api";
import { Card } from "./Card";

export default function CommentCards({ comments, setComments, setIsLoading }) {
  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState(false);
  const { article_id } = useParams();

  const handleDelete = (comment_id) => {
    setDisabled(true);

    const storedComment = comments.find(
      (comment) => comment_id === comment.comment_id
    );

    setComments((currentComments) => {
      const optimisiticComments = currentComments.filter((comment) => {
        if (comment_id !== comment.comment_id) {
          return comment;
        }
      });
      setDisabled(false);
      return optimisiticComments;
    });

    deleteComment(comment_id)
      .then(() => {
        setDisabled(false);
      })
      .catch(() => {
        setError(true);
        setIsLoading(false);
        setDisabled(false);
        setComments((currentComments) => [storedComment, ...currentComments]);
      });
  };

  useEffect(() => {
    getCommentsByArticleId(article_id).then((commentsArray) => {
      setComments(commentsArray);
      setIsLoading(false);
    });
  }, []);

  if (error) {
    return <Error message={'Something went wrong. Please try again later'} />;
  }

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
              <button
                hidden={comment.author !== "tickle122"}
                disabled={disabled}
                onClick={() => {
                  handleDelete(comment.comment_id, comment.author);
                }}
              >
                Delete
              </button>
            </div>
          </Card>
        );
      })}
    </section>
  );
}
