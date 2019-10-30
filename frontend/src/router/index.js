import Vue from 'vue'
import Router from 'vue-router'
import ArticleList from '../components/ArticleList.vue'
import ArticleDetail from '../components/ArticleDetail.vue'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Main',
            component: ArticleList
        },
        {
            path: '/article/:id',
            name: 'ArticleDetail',
            component: ArticleDetail
        }
    ]
})