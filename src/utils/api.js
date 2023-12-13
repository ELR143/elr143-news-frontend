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
