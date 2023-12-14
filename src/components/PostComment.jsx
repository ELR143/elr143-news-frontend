import React, { useState, useEffect } from "react";
import { postComment } from "../utils/api";
import { useParams } from "react-router-dom";

export default function PostComment({
  comments,
  setComments,
  isLoading,
  setIsLoading,
}) {
  const [input, setInput] = useState("");
  const [isError, setIsError] = useState(false);

  const { article_id } = useParams();

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    postComment(input, article_id).then((comment) => {
      setComments((currentComments) => {
        return [comment, ...currentComments];
      });
      setInput("");
      setIsLoading(false);
    });
  };

  if (isError) {
    return <ErrorPage message='sedfkljsdhlfkgj' />;
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
        <button>Post</button>
      </form>
    </section>
  );
}
