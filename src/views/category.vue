<template>
    <div class="category">
        <div style="height: 100px"></div>
        <div class="categoryBg">
            <div class="mask"></div>
            <div class="content">课程名称</div>
        </div>
        <category-nav></category-nav>
        <div class="container pb-5" style="min-height: 38rem">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import categoryNav from "../components/category/categoryNav";
    export default {
        name: "category",
        components:{
            categoryNav
        }
    }
</script>

<style lang="less">
    @import "../assets/css/category/category";
    @import "../assets/css/home/recommend/recommend";
</style>
