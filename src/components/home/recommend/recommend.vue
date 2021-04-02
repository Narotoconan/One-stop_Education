<template>
    <div class="recommend">
        <div class="container pl-0 pr-0">
            <div class="float-right again" @click="getRandomCurriculum">
                <i class="el-icon-refresh-left"></i>
                <span class="ml-2">换一换</span>
            </div>
            <h3 class="recommendTitle">推荐课程</h3>
            <div class="recommendList">
                <div class="row row-cols-1 row-cols-md-3">
                    <recommend-item v-for="item in recommendList"
                                    :curriculum="item"
                                    :key="item.courseId"/>
                </div>
            </div>
            <div class="mt-3 listMore">
                <button type="button" class="btn btn-warning" @click="$router.push('/category/all?cur=00')">&nbsp&nbsp查看更多课程 <span> > </span>&nbsp&nbsp</button>
            </div>
        </div>
    </div>
</template>

<script>
    import recommendItem from "./recommendItem";
    export default {
        name: "recommend",
        components: {
            recommendItem
        },
        data() {
            return {
                recommendList:[]
            }
        },
        mounted() {
           this.getRandomCurriculum()
        },
        methods: {
            getRandomCurriculum(){
                this.$store.dispatch('getRandomCurriculum',6)
                    .then(res => {
                        if (res.resultCode !== 1210) { //判断业务状态码
                            this.$message.warning(res.resultCode + ' ' + res.message)
                            return
                        }
                        if (!res.data.total) {
                            this.$message.warning('无课程')
                            return
                        }
                        this.recommendList = res.data.courses
                    }).catch(err => {
                    this.$message.error('推荐课程失败')
                    console.log(err);
                })
            }
        }
    }
</script>

<style lang="less">
    @import "../../../assets/css/home/recommend/recommend";
</style>
