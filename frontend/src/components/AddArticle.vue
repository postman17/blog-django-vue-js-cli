<template>
    <div class="article-form">
        <form class="article" @submit.prevent="add">
            <h1>Добавление статьи</h1>
            <div class="form-group">
                 <label for="inputTitle1">Заголовок</label>
                 <input required v-model="title" type="text" class="form-control" id="inputTitle1" placeholder="Введите заголовок"/>
            </div>
            <div class="form-group">
                <label for="сontrolTextarea1">Тело статьи</label>
                <textarea required v-model="article" class="form-control" id="сontrolTextarea1" rows="5"></textarea>
            </div>
            <div class="form-group">
                <select required class="form-control" v-model="category">
                    <option disabled value="">Выберите один из вариантов</option>
                    <option v-for="category in allCategories" :key="category.id">{{ category.category }}</option>
                </select>
                <hr/>
                <button type="submit" class="btn btn-outline-success">Добавить</button>
            </div>
        </form>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
    import axios from 'axios'

    export default {
        name: "AddArticle",
        data(){
          return {
            title : "",
            article : "",
            category : ""
          }
        },
        computed: mapGetters(['allCategories']),
        methods: {
            ...mapActions(['getCategories']),
            add(){
                let data = {title: this.title, article: this.article, category: this.category};
                axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');
                axios({url: 'http://localhost:8000/api/articles/', data: data, method: 'POST' })
                    .then(() => {
                        this.$router.push('/')
                    })
                    .catch(error => {
                        console.log(error)
                    })
            }

        },
        mounted() {
            this.getCategories();
        }
    }
</script>

<style scoped>
.article-form{
    margin-top: 30px;
    width: 50%;
}
</style>