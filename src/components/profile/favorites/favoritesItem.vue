<template>
    <div class="favoritesCard" @click="$router.push('/curriculum/'+item.courseId)">
        <img :src="$store.state.targetURL + item.courseCover" alt="">
        <div class="cardContent d-inline-block ml-3">
            <div class="cardTitle">{{ item.courseTitle }}</div>
            <div class="mt-3">
                <div class="d-inline-block">
                    <i class="bi bi-collection-play-fill" style="color: #ff6283"> </i>
                    <span>播放量：{{ item.viewCounts }}</span>
                </div>
                <div class="d-inline-block ml-4">
                    <i class="bi bi-bookmark-plus-fill" style="color: #ffb259"></i>
                    <span>收藏量：{{ item.favoriteCounts }}</span>
                </div>
            </div>
            <div class="cardFooter">
                <el-avatar size="small" :src="$store.state.targetURL + item.teacherAvatar"></el-avatar>
                <span class="ml-2">{{ item.teacherName }}</span>
                <div class="float-right">
                    <el-tag type="success" class="mr-2" @click.stop="toCate(item.categoryParentUrlName,item.categoryParentId)">{{ item.categoryParent }}</el-tag>
                    <el-tag type="warning" @click.stop="toCate(item.categoryParentUrlName,item.categoryChildrenId)">{{ item.categoryChildren}}</el-tag>
                </div>
            </div>
        </div>
        <div class="favoritesDelete" @click.stop="favoritesDelete">
            <i class="bi bi-x-circle"></i>
        </div>
    </div>
</template>

<script>
    export default {
        name: "favoritesItem",
        props:{
          item:Object
        },
        methods:{
            favoritesDelete() {
                this.$confirm('是否取消此收藏？, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    lockScroll:false,
                    type: 'warning'
                }).then(() => {
                    this.$store.dispatch('delFavorite',{
                        courseId:this.item.courseId
                    }).then(res => {
                        if (res.resultCode !== 1221) { //判断业务状态码
                            this.$message.warning(res.resultCode + ' ' + res.message +' '+ res.reason);
                            return;
                        }
                        this.$message.success('成功取消收藏')
                        this.$emit('reGetFa')
                    }).catch(err => {
                        this.$message.error('取消收藏失败')
                        console.log(err)
                    })
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消'
                    });
                });
            },
            toCate(path,code){
                this.$router.push({
                    path:'/category/'+path,
                    query:{
                        cur:code
                    }
                })
            },
        }
    }
</script>

<style scoped>

</style>
