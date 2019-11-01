import Vue from 'vue'
import Vuex from 'vuex'
import articles from './modules/articles'
import authent from './modules/authent'
import categories from './modules/categories'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        articles,
        authent,
        categories
    }
})