import axios from 'axios'

export default {
    actions: {
        getCategories(context) {
            const path = 'http://localhost:8000/api/category';
            axios.get(path)
                .then((res) => {
                    const category = res.data;
                    context.commit('updateCategories', category)
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    },
    mutations: {
        updateCategories(state, categories) {
            state.categories = categories
        }
    },
    state: {
        categories: []
    },
    getters: {
        allCategories(state) {
            return state.categories
        },
        OnlyCategories(state) {
            let categories = [];
            state.categories.forEach(category => {
               categories.push(category.category)
            });
            return categories
        },
    }
}