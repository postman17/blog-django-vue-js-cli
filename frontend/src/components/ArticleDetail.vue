<template>
    <div class="card">
        <div class="card-body">
            <h5 class="card-title">{{ getArticle.title }}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{{ getArticle.category }}</h6>
            <p class="card-text">{{ getArticle.article }}</p>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        name: "ArticleDetail",
        computed: {
            ...mapGetters(['oneArticle']),
            getArticle() {
                return this.oneArticle(this.$route.params.id)[0]
            }
        }
    }
</script>

<style scoped>
.card {
    margin-top: 20px;
    width: 80%;
}
</style>