import React, { useState } from "react";
import { postComment } from "../utils/api";
import { useParams } from "react-router-dom";
import Error from "./Error";
import ClipLoader from "react-spinners/ClipLoader";

export default function PostComment({ setComments, isLoading, setIsLoading }) {
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

    const optimisticComment = {
      author: "tickle122",
      body: input,
      votes: 0,
      comment_id: null,
    };

    setComments((currentComments) => {
      return [optimisticComment, ...currentComments];
    });

    postComment(input, article_id)
      .then((comment) => {
        setIsLoading(true);
        setComments((currentComments) => {
          const resetComments = currentComments.filter((comment) => {
            return comment.comment_id !== null;
          });
          console.log(currentComments);
          return [comment, ...resetComments];
        });
        setInput("");
        setDisabled(false);
      })
      .catch(() => {
        setInput("");
        setError(true);
        setDisabled(false);
        setComments((currentComments) => {
          const resetComments = currentComments.filter((comment) => {
            return comment.comment_id !== null;
          });
          return [...resetComments];
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  if (error) {
    return <Error message='Something went wrong. Please try again later' />;
  }
  
  if (isLoading) {
    return <h1>Loading...</h1>;
  } else {
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
}
