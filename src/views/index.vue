<template>
    <div class="index">
        <nav-bar></nav-bar>
        <keep-alive include="home,searchPage,curriculum,profile">
            <router-view></router-view>
        </keep-alive>
        <footerMg/>
        <el-backtop></el-backtop>
    </div>
</template>

<script>
    import navBar from "../components/header/navBar";
    import footerMg from "../components/footer/footerMg";

    export default {
        name: "index",
        components:{
            navBar,
            footerMg
        }
    }
</script>

<style scoped>

</style>
