<template>
    <div class="login-form">
        <form class="login" @submit.prevent="login">
            <h1>Войти</h1>
            <div class="form-group">
                 <label for="inputEmail1">E-mail</label>
                 <input required v-model="email" type="email" class="form-control" id="inputEmail1" aria-describedby="emailHelp" placeholder="Введите e-mail"/>
            </div>
            <div class="form-group">
                <label for="inputPassword1">Пароль</label>
                 <input required v-model="password" type="password" class="form-control" id="inputPassword1" placeholder="Введите пароль"/>
                 <hr/>
                 <button type="submit" class="btn btn-outline-success">Login</button>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: "login",
        data(){
          return {
            email : "",
            password : ""
          }
        },
        methods: {
          login() {
            let email = this.email;
            let username = '';
            let password = this.password;
            this.$store.dispatch('login', { email, password, username })
           .then(() => this.$router.push('/'))
           .catch(err => console.log(err))
          }
        }
    }
</script>

<style scoped>
.login-form {
    margin-top: 30px;
    width: 35%;
}
</style>