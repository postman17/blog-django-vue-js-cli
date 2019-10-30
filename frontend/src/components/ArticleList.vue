<template>
    <div class="list-group">
        <div class="article" v-for="article in allArticles" :key="article.id">
            <Article :article="article"/>
        </div>
    </div>
</template>

<script>
    import Article from '../components/Article'
    import { mapGetters, mapActions } from 'vuex'

    export default {
        name: "ArticleList",
        components: {
            Article
        },
        computed: mapGetters(['allArticles']),
        methods: mapActions(['getArticles']),
        mounted() {
            this.getArticles();
        }
    }
</script>

<style scoped>
</style>