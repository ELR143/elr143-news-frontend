import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCommentsByArticleId } from "../utils/api";
import { Card } from "./Card";
import CommentCards from "./CommentCards";
import PostComment from "./PostComment";

export default function CommentsContainer() {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <section>
      <PostComment
        comments={comments}
        isLoading={isLoading}
        setComments={setComments}
        setIsLoading={setIsLoading}
      />
      <CommentCards
        comments={comments}
        setComments={setComments}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
    </section>
  );
}
