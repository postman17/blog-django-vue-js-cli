<template>
    <div class="card">
        <div class="card-body">
            <h5 class="card-title">{{ article.title }}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{{ article.category }}</h6>
            <h6 class="card-subtitle mb-2 text-muted">{{ article.created_at }}</h6>
            <p class="card-text">{{ article.article.substr(0, 100) + '...' }}</p>
            <button v-on:click="goToDetail(article.id)" class="btn btn-outline-success my-2 my-sm-0" type="submit">Подробнее</button>
        </div>
    </div>
</template>

<script>
    import Router from '../router'

    export default {
        name: "Article",
        props: {
            article: Object
        },
        methods: {
            goToDetail: (id) => {
                Router.push({name:'ArticleDetail', params: {id: id}});
            }
        }
    }
</script>

<style scoped>
.card {
    margin-top: 20px;
    width: 100%;
}
</style>