import { useState } from "react";
import CommentCards from "./CommentCards";
import PostComment from "./PostComment";

export default function CommentsContainer() {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <section>
      <PostComment
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
