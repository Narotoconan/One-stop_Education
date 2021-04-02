<template>
    <div class="hot">
        <div class="row row-cols-1 row-cols-md-3">
            <recommend-item v-for="item in curriculumList"
                            :curriculum="item"
                            :key="item.courseId"/>
        </div>
        <div class="mt-5" style="text-align: center">
            <el-pagination
                    background
                    layout="prev, pager, next"
                    :page-size="size"
                    :total="totalCount"
                    @current-change="getCur">
            </el-pagination>
        </div>
    </div>
</template>

<script>
    import category from "../../assets/js/category";
    import $ from 'jquery'
    import recommendItem from "../home/recommend/recommendItem";

    export default {
        name: "hot",
        data(){
            return {
                page:1,
                size:9,
                totalCount:1,
                curriculumList:[]
            }
        },
        components:{
            recommendItem
        },
        mounted() {
            category.typeClassAdd(5);
            category.changeBgTitle('热门课程');
            this.$store.commit('showCur','40');
            //category.curAdd(1)
            //this.$store.commit('activeCur','1');
            //$(".curList dd:nth-of-type(1)").addClass("curItemActive");
            this.$nextTick(() => {
                this.$store.commit('activeCur','1');
            })
            this.getCur(this.page)
        },
        beforeRouteLeave(to, from, next){
            category.typeClassRemove(5);
            next();
        },

        methods:{
            getCur(page){
                this.page=page;
                this.$store.dispatch('getCateCur',{
                    c:page,
                    s:this.size,
                    hot:true
                }).then(res => {
                    if (res.resultCode !== 1210) {
                        this.$message.warning(res.resultCode+'-'+res.message)
                        return
                    }
                    if (!res.data.total) {
                        this.$message.warning('无课程')
                        return
                    }
                    this.curriculumList = res.data.courses
                    this.totalCount = res.data.total
                    category.changeBg(this.$store.state.targetURL+this.curriculumList[0].img)
                }).catch(err => {
                    this.$message.error('获取课程失败')
                    console.log(err);
                })
            }
        }
    }
</script>

<style scoped>

</style>
