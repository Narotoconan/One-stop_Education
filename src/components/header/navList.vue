<template>
    <div class="navList">
        <nav-bar-item path='/home'>
            <template v-slot:itemName>
                <span>首&nbsp页</span>
            </template>
        </nav-bar-item>
        <nav-bar-item path='/category/hot' query="40">
            <template v-slot:itemName>
                <span>热门课程</span>
            </template>
        </nav-bar-item>
        <nav-bar-item path='/category/all' query="00">
            <template v-slot:itemName>
                <span>全部课程</span>
            </template>
        </nav-bar-item>
    </div>
</template>

<script>
    import navBarItem from "./navBarItem";
    export default {
        name: "navList",
        components:{
            navBarItem
        },
        methods: {

        }
    }
</script>

<style scoped>

</style>