<template>
    <div class="searchPage">
        <div style="height: 100px"></div>
        <div class="container pr-0 pl-0">
            <div class="searchContent mt-5 pb-5">
                <div class="left">
                    <div class="title">
                        <span>搜索结果</span>
                        <small class="text-black-50 ml-3">搜索<span style="color: #ffb259;letter-spacing: 0">“{{ $route.query.w }}”</span>共找到到 {{ totalCount }} 个相关课程</small>
                    </div>
                    <div class="searchList mt-3" v-if="totalCount">
                        <search-card v-for="item in searchList"
                                     :curriculum="item"
                                     :key="item.courseId">
                        </search-card>
                    </div>
                    <div class="searchNone" v-else>
                        暂无搜索结果
                    </div>
                    <div class="mt-5" style="text-align: center" v-if="totalCount">
                        <el-pagination
                                background
                                layout="prev, pager, next"
                                :page-size="size"
                                :total="totalCount"
                                @current-change="toSearch">
                        </el-pagination>
                    </div>
                </div>
                <!--<div class="right">
                    <div class="hotCur">
                        <span>热门课程</span>
                        <small class="text-black-50 float-right" @click="$router.push({path:'/category/hot',query:{cur:'40'}})">查看全部 <span style="font-family: 宋体;font-weight: 700"> > </span></small>
                        <div>
                            <hot-card></hot-card>
                            <hot-card></hot-card>
                            <hot-card></hot-card>
                            <hot-card></hot-card>
                            <hot-card></hot-card>
                        </div>
                    </div>
                </div>-->
            </div>
        </div>
    </div>
</template>

<script>
    import searchCard from "../components/searchPage/searchCard";
    import hotCard from "../components/searchPage/hotCard";
    export default {
        name: "searchPage",
        components:{
          searchCard,
            hotCard
        },
        data(){
            return{
                searchList:[],
                hotList:[],
                totalCount:1,
                size:5,
                page:1
            }
        },
        watch:{
            $route(){
                this.toSearch(this.page)
            },
        },
        mounted() {
            this.toSearch(1)
        },
        methods:{
            toSearch(page){
                this.page = page
                this.$store.dispatch('getSearchList',{
                    c:page,
                    s:this.size,
                    title: this.$route.query.w
                }).then(res => {
                    if (res.resultCode !== 1210) { //判断业务状态码
                        this.$message.warning(res.resultCode + ' ' + res.message)
                        return
                    }
                    this.searchList = res.data.courses
                    this.totalCount = res.data.total
                }).catch(err => {
                    this.$message.error('搜索课程失败')
                    console.log(err);
                })
            },
        }
    }
</script>

<style lang="less">
    @import "../assets/css/searchPage/searchPage";
</style>
