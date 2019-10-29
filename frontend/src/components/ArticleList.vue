<template>
    <div class="list-group">
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
    </div>
</template>

<script>
    import Article from '../components/Article'

    export default {
        name: "ArticleList",
        components: {
            Article
        }
    }
</script>

<style scoped>
</style>