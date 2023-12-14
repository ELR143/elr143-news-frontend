import React from "react";
import { Link } from "react-router-dom";

export const ErrorNotFoundPage = () => {
  return (
    <section>
      <h2>404 - Article Not Found</h2>
      <Link to={'/'}>
        Go back to all articles
      </Link>
    </section>
  );
};
