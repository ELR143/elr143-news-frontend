import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCommentsByArticleId } from "../utils/api";
import { Card } from "./Card";

export default function CommentsContainer() {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { article_id } = useParams();

  useEffect(() => {
    getCommentsByArticleId(article_id).then((commentsArray) => {
      setComments(commentsArray);
      setIsLoading(false);
    });
  }, []);

  return (
    <section>
      {comments.map((comment) => {
        return (
          <Card key={comment.comment_id}>
            <div>
              <p>{comment.author}</p>
              <p>{comment.body}</p>
              <p>{comment.votes}</p>
            </div>
          </Card>
        );
      })}
    </section>
  );
}
