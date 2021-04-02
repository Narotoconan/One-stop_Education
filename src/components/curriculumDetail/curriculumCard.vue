<template>
    <div class="curriculumCard">
        <div class="content" v-if="curriculum">
            <img :src="$store.state.targetURL+curriculum.img" alt="cover">
            <div class=" ml-3 contentText">
                <h3>{{ curriculum.title }}</h3>
                <div class="shortMg mt-4">
                    <div>
                        <i data-v-9ad2d3e8="" class="bi bi-collection-play-fill" style="color: rgb(255, 98, 131);"></i>
                        总播放量：{{ curriculum.viewCounts }}
                    </div>
                    <div>
                        <i data-v-9ad2d3e8="" class="bi bi-bookmark-plus-fill" style="color: rgb(255, 178, 89);"></i>
                        收藏人数：{{ curriculum.favoriteCounts }}
                    </div>
                </div>
                <div class="tag">
                    <el-tag type="success" @click="toCate(curriculum.categoryURLName,curriculum.categoryParentId)">
                        {{curriculum.categoryParent }}
                    </el-tag>
                    <el-tag type="warning" @click="toCate(curriculum.categoryURLName,curriculum.categoryChildrenId)">
                        {{ curriculum.categoryChildren }}
                    </el-tag>
                </div>
                <el-button type="primary" @click="toFavorite" v-if="!isFavorite">收藏课程</el-button>
                <el-button type="danger" @click="delFavorite" v-else>取消收藏</el-button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "curriculumCard",
        props: {
            curriculum: Object
        },
        data(){
          return {
              isFavorite:false
          }
        },
        mounted() {
          this.checkFavorite()
        },
        methods: {
            toCate(path, code) {
                this.$router.push({
                    path: '/category/' + path,
                    query: {
                        cur: code
                    }
                })
            },
            toFavorite(){
                if (!this.$store.getters.checkLogin) {
                    this.$message.warning('请登录操作')
                    return
                }
                this.$store.dispatch('addFavorite',{
                    courseId:this.curriculum.courseId
                }).then(res => {
                    if (res.resultCode !== 1220) { //判断业务状态码
                        this.$message.warning(res.resultCode + ' ' + res.message);
                        return;
                    }
                    this.$message.success('成功添加收藏')
                    this.isFavorite = true
                    this.curriculum.favoriteCounts++
                }).catch(err => {
                    this.$message.error('收藏失败')
                    console.log(err)
                })
            },
            delFavorite(){
                this.$store.dispatch('delFavorite',{
                    courseId:this.curriculum.courseId
                }).then(res => {
                    if (res.resultCode !== 1221) { //判断业务状态码
                        this.$message.warning(res.resultCode + ' ' + res.message +' '+ res.reason);
                        return;
                    }
                    this.$message.success('成功取消收藏')
                    this.isFavorite = false
                    this.curriculum.favoriteCounts--
                }).catch(err => {
                    this.$message.error('取消收藏失败')
                    console.log(err)
                })
            },
            checkFavorite(){
                if (!this.$store.getters.checkLogin) {
                    return
                }
                this.$store.dispatch('isFavorite',{
                    cid:this.curriculum.courseId
                }).then(res => {
                    if (res.resultCode !== 1222) { //判断业务状态码
                        this.$message.warning(res.resultCode + ' ' + res.message +' '+ res.reason);
                        return;
                    }
                    this.isFavorite = res.data.isFavorite
                }).catch(err => {
                    this.$message.error('查询收藏失败')
                    console.log(err)
                })
            }
        }
    }
</script>

<style scoped>

</style>
