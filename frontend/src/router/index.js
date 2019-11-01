import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
import ArticleList from '../components/ArticleList.vue'
import ArticleDetail from '../components/ArticleDetail.vue'
import Login from '../components/Login.vue'
import Secure from '../components/Secure.vue'
import Register from '../components/Register.vue'
import AddArticle from '../components/AddArticle.vue'

Vue.use(Router);

let router = new Router({
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
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/register',
            name: 'register',
            component: Register
        },
        {
            path: '/secure',
            name: 'secure',
            component: Secure,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/add-article',
            name: 'add-article',
            component: AddArticle,
            meta: {
                requiresAuth: true
            }
        }
    ]
});

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next();
      return
    }
    next('/login')
  } else {
    next()
  }
});

export default router