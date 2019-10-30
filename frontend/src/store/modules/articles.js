import axios from 'axios'

export default {
    actions: {
        getArticles(context) {
            const path = 'http://localhost:8000/api/articles';
            axios.get(path)
                .then((res) => {
                    const articles = res.data;
                    context.commit('updateArticles', articles)
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    },
    mutations: {
        updateArticles(state, articles) {
            state.articles = articles
        }
    },
    state: {
        articles: []
    },
    getters: {
        allArticles(state) {
            return state.articles
        },
        oneArticle(state) {
            return id => state.articles.filter(item => {
                return item.id === id
              });
            // let art = {};
            // state.articles.forEach(article) {
            //     if (article.id == id) {
            //         art = article
            //     }
            // }
            // return art
        }
    }
}