<template>
    <div class="browsed pt-4" v-infinite-scroll="load">
        <div v-if="browsedList.length">
            <browsed-card v-for="(item,index) in browsedList"
                          :browsed="item"
                          :index="index"
                          :key="item.historyId">
            </browsed-card>
            <p v-if="loading">加载中...</p>
        </div>
        <div v-else style="text-align: center;font-size: 3.5rem;color: rgba(0,0,0,.2);padding: 3rem">
            暂无浏览历史
        </div>
    </div>
</template>

<script>
    import browsedCard from "./browsedCard";

    export default {
        name: "history",
        components: {
            browsedCard
        },
        data() {
            return {
                loading:false,
                browsedList:[],
                hasNext:false,
                page:1,
            }
        },
        mounted() {
            this.getBrowsed(1)
        },
        methods: {
            load() {
                /*if (!this.hasNext) {
                    if (this.browsedList.length > 6){
                        this.$message.warning('已经加载到底了')
                    }
                    return
                }*/

                 if (this.hasNext && this.browsedList.length >= 6){
                     this.page++
                     this.getBrowsed(this.page)
                     return
                 }
                 if (!this.hasNext && this.browsedList.length >= 6) {
                     this.$message.warning('已经加载到底了')
                 }
                /* if (this.hasNext){
                     this.page++
                     this.getBrowsed(this.page)
                     return
                 }
                 if (this.browsedList.length > 6){
                     this.$message.warning('已经加载到底了')
                     return
                 }*/
            },
            getBrowsed(page){
                this.page =page
                this.$store.dispatch('getUserBrowsed',{
                    c:page,
                    s:6
                }).then(res => {
                    if (res.resultCode !== 1150) { //判断业务状态码
                        this.$message.warning(res.resultCode + ' ' + res.message +' '+ res.reason);
                        return;
                    }
                    for (let j = 0,length = res.data.history.length; j<length; j++){
                        this.browsedList.push(res.data.history[j])
                    }
                    this.hasNext = res.data.hasNext
                }).catch(err => {
                    this.$message.error('获取历史记录失败')
                    console.log(err);
                })
            }

        }
    }
</script>

<style scoped>

</style>
