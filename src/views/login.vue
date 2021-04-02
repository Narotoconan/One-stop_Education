<template>
    <div class="login">
        <div class="loginCard">
            <div class="cardLeft h-100">
                <a href="/home">
                    <img src="../assets/img/header/logo.png" alt="logo" class="logo">
                </a>
                <div style="margin: 0 auto;width: 90%">
                    <img src="../assets/img/login/loginAside.png" alt="logoAside" class="logoAside">
                </div>
            </div>
            <div class="cardRight h-100">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    import $ from 'jquery'

    export default {
        name: "login",
        mounted() {
            this.full()
            this.$store.commit('exitUserLogin',1)
        },
        methods:{
            full(){
                $(".login").css({
                    height:"100vh"
                });
            },
        }
    }
</script>

<style lang="less">
    @import "../assets/css/login/login";
</style>
