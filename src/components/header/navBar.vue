<template>
    <div id="navBar">
        <div class="container h-100 position-relative">
            <div class="navOne">
                <a href="/home">
                    <web-logo />
                </a>
                <div class="d-inline-block">
                    <nav-list />
                </div>
            </div>
            <div class="navTwo">
                <search />
                <login />
            </div>
        </div>

    </div>
</template>

<script>
    import navList from "./navList";
    import search from "./search";
    import login from "./login";
    import webLogo from "./webLogo";

    export default {
        name: "navBar",
        components:{
            navList,
            search,
            login,
            webLogo
        }
    }
</script>

<style lang="less">
    @import "../../assets/css/header/navBar";
</style>
