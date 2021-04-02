<template>
    <div class="program">
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
    import recommendItem from "../home/recommend/recommendItem";

    export default {
        name: "program",
        data(){
            return {
                page:1,
                totalCount:1,
                size:9,
                curriculumList:[]
            }
        },
        components:{
            recommendItem
        },
        mounted() {
            this.initialPage()
        },
        beforeRouteLeave(to, from, next){
            category.typeClassRemove(4);
            next();
        },
        watch:{
            $route(){
                let cur = Number(this.$route.query.cur)
                if (cur!==30){
                    this.getCur(this.page,cur)
                    return
                }
                this.getCur(this.page)
            },
        },
        methods:{
            getCur(page,cur){
                this.page=page;
                this.$store.dispatch('getCateCur',{
                    c:page,
                    s:this.size,
                    asc:true,
                    par:'program',
                    cur
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
            },
            initialPage(){
                category.typeClassAdd(4);
                category.changeBgTitle('代码编程');
                this.$store.commit('showCur','30');
                this.$nextTick(() => {
                    switch (this.$route.query.cur) {
                        case '30':
                            this.$store.commit('activeCur','1');
                            this.getCur(this.page)
                            break;
                        case '31':
                            this.$store.commit('activeCur','2');
                            this.getCur(this.page,31)
                            break;
                        case '32':
                            this.$store.commit('activeCur','3');
                            this.getCur(this.page,32)
                            break;
                        case '33':
                            this.$store.commit('activeCur','4');
                            this.getCur(this.page,33)
                            break;
                        case '34':
                            this.$store.commit('activeCur','5');
                            this.getCur(this.page,34)
                            break;
                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>
