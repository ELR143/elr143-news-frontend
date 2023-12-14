import React, { useState, useEffect } from "react";
import { postComment } from "../utils/api";
import { useParams } from "react-router-dom";
import { Error } from "./Error";

export default function PostComment({ setComments, setIsLoading }) {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const { article_id } = useParams();

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setDisabled(true);
    setIsLoading(true);

    const optimisticComment = {
      username: "tickle122",
      body: input,
      comment_id: null,
    };

    setComments((currentComments) => {
      return [optimisticComment, ...currentComments];
    });
    // setInput("");

    postComment(input, article_id)
      .then((comment) => {
        setComments((currentComments) => {
          const resetComments = currentComments.filter((comment) => {
            return comment.comment_id !== null;
          });
          console.log(currentComments);
          return [comment, ...resetComments];
        });
        setInput("");
        setIsLoading(false);
        setDisabled(false)
      })
      .catch(() => {
        setInput("");
        setError(true);
        setIsLoading(false);
        setDisabled(false)
        setComments((currentComments) => {
          const resetComments = currentComments.filter((comment) => {
            return comment.comment_id !== null;
          });
          return [...resetComments];
        });
      });
  };

  if (error) {
    return <Error message='Something went wrong. Please try again later' />;
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <label htmlFor='post-comment'>
          <input
            type='text'
            id='post-comment'
            placeholder='Add a comment'
            onChange={handleChange}
            value={input}
          ></input>
        </label>
        <button disabled={input.length < 1 || disabled}>Post</button>
      </form>
    </section>
  );
}
