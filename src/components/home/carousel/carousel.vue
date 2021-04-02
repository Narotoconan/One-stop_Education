<template>
    <div class="position-relative">
        <carousel-img></carousel-img>
        <curriculum-catalog></curriculum-catalog>
    </div>
</template>

<script>
    import carouselImg from "./carouselImg";
    import curriculumCatalog from "./curriculumCatalog";
    export default {
        name: "carousel",
        components:{
            carouselImg,
            curriculumCatalog
        }
    }
</script>

<style lang="less">
    @import "../../../assets/css/home/carousel/carousel.less";
</style>