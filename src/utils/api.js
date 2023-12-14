import axios from "axios";

const newsServer = axios.create({
  baseURL: "https://elr143-news-server.onrender.com/api",
});

export const getArticles = () => {
  return newsServer.get("/articles").then(({ data }) => {
    return data.articles;
  });
};

export const getArticleById = (article_id) => {
  return newsServer.get(`/articles/${article_id}`).then(({ data }) => {
    return data.article;
  });
};

export const getCommentsByArticleId = (article_id) => {
  return newsServer.get(`/articles/${article_id}/comments`).then(({ data }) => {
    return data.comments;
  });
};

export const updateArticleVotes = (inc_votes, article_id) => {
  const patchBody = {
    inc_votes: inc_votes,
  };
  return newsServer
    .patch(`/articles/${article_id}`, patchBody)
    .then(({ data }) => {
      return data.article;
    });
};

export const postComment = (body, article_id) => {
  const postBody = {
    username: "tickle122",
    body: body,
  };
  return newsServer
    .post(`/articles/${article_id}/comments`, postBody)
    .then(({ data }) => {
      return data.comment;
    });
};
