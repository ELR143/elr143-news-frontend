import axios from 'axios'

const newsServer = axios.create({baseURL: 'https://elr143-news-server.onrender.com/api'})

export const getArticles = () => {
    return newsServer.get('/articles').then(({data}) => {
        return data.articles
    })
}

export const getTopics = () => {
    return newsServer.get('/topics').then(({data}) => {
        return data.articles
    })
}