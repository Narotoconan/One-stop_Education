<template>
    <div class="favorites">
        <div class="row row-cols-1 row-cols-md-1">
            <div class="col" v-if="total">
                <favorites-item v-for="item in favoritesList"
                                class="mb-0 mt-4"
                                :item="item"
                                @reGetFa="getFavorites(page)"
                                :key="item.courseId">
                </favorites-item>
            </div>
            <div style="font-size: 3.5rem;color: rgba(0,0,0,.2);text-align: center;padding: 3rem" v-else>
                暂无收藏课程
            </div>
        </div>
        <div class="mt-5" style="text-align: center" v-if="total">
            <el-pagination
                    background
                    layout="prev, pager, next"
                    :page-size="size"
                    :total="total"
                    @current-change="getFavorites">
            </el-pagination>
        </div>
    </div>
</template>

<script>
    import favoritesItem from "./favoritesItem";

    export default {
        name: "favorites",
        components: {
            favoritesItem
        },
        data() {
            return {
                favoritesList:[],
                page:1,
                total:0,
                size:4
            }
        },
        mounted() {
            this.getFavorites(this.page)
        },
        methods: {
            getFavorites(page) {
                this.page = page
                this.$store.dispatch('getUserFavorites',{
                    c:page,
                    s:this.size
                }).then(res => {
                    if (res.resultCode !== 1222) {
                        this.$message.warning(res.resultCode+' '+res.message)
                        return
                    }
                    this.total = res.data.total
                    this.favoritesList = res.data.favorites
                }).catch(err => {
                    this.$message.error('获取课程失败')
                    console.log(err);
                })
            },

        }
    }
</script>

<style lang="less">

</style>
