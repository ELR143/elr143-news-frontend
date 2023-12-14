import React from "react";
import { Link } from "react-router-dom";

export const ErrorPage = ({message}) => {
  return (
    <section className='error'>
      <h2>{message}</h2>
      <Link to={'/'}>
        Go back to all articles
      </Link>
    </section>
  );
};
