<template>
    <div class="homePage">
        <carousel/>
        <home-nav/>
        <recommend/>
    </div>
</template>

<script>
    import carousel from "../components/home/carousel/carousel";
    import homeNav from "../components/home/homeNav/homeNav";
    import recommend from "../components/home/recommend/recommend";

    export default {
        name: "home",
        components:{
            carousel,
            homeNav,
            recommend
        }
    }
</script>

<style lang="less">

</style>