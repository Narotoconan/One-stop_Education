<template>
    <div class="carouselImg">
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner" >
                <div class="carousel-item active" @click.stop="toRoute('/category/program?cur=34')">
                    <img src="../../../assets/img/carousel/tu-1.png" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item" @click.stop="toRoute('/category/english?cur=22')">
                    <img src="../../../assets/img/carousel/tu-2.png" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item" @click.stop="toRoute('/category/math?cur=14.stop')">
                    <img src="../../../assets/img/carousel/tu-3.png" class="d-block w-100" alt="...">
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "carouselImg",
        methods:{
            toRoute(path){
                this.$router.push(path)
            }
        }
    }
</script>

<style scoped>

</style>
