<template>
  <div id="app">
    <header>
        <nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark">
          <a class="navbar-brand" href="#">Блог</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <router-link class="nav-link" to="/">Главная</router-link>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Категории</a>
                </li>
                <li class="nav-item">
                    <span v-if="isLoggedIn"><router-link class="nav-link" to="/add-article">Добавить статью</router-link></span>
                </li>
                <li class="nav-item">
                    <span v-if="!isLoggedIn"><router-link class="nav-link" to="/login">Войти<span class="sr-only">(current)</span></router-link></span>
                </li>
                <li class="nav-item">
                    <span v-if="!isLoggedIn"><router-link class="nav-link" to="/register">Регистрация</router-link></span>
                </li>
                <li class="nav-item">
                    <span v-if="isLoggedIn"><a class="nav-link" @click="logout">Выйти</a></span>
                </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
              <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
              <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </nav>
    </header>
    <div class="row h-100 justify-content-center align-items-center">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app',
    computed : {
        isLoggedIn() { return this.$store.getters.isLoggedIn }
    },
    methods: {
      logout() {
        this.$store.dispatch('logout')
        .then(() => {
          this.$router.push('/login')
        })
      }
    },
    components: {
    },
    created() {
        this.$http.interceptors.response.use(undefined, function (err) {
          return new Promise(() => {
            if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
              this.$store.dispatch('logout')
            }
            throw err;
          });
        });
    }
  }
</script>

<style>

</style>
