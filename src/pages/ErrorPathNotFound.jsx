import React from "react";
import { Link } from "react-router-dom";

export const ErrorPathNotFound = ({ title, message }) => {
  return (
    <section className='error'>
      <h2>{title}</h2>
      <p>{message}</p>
      <Link to={"/"}>Go back to all articles</Link>
    </section>
  );
};
