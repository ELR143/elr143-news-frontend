import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCommentsByArticleId } from "../utils/api";
import { Card } from "./Card";
import CommentCards from "./CommentCards";

export default function CommentsContainer() {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  return <CommentCards comments={comments} setComments={setComments} setIsLoading={setIsLoading} />;
}
