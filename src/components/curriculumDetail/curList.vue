<template>
    <div class="curList">
        <div class="title">
            <i class="bi bi-view-list"></i>
            <span>课程目录</span>
        </div>
        <ul class="theList mt-3" v-if="videoList.length">
            <li v-for="(item,index) in videoList" @click="toVideo(item.vid,item)">
                <div @mouseenter="listShow(item)">
                    <i class="bi bi-play-circle"></i>
                    <span class="ml-4 mr-4"> Lesson {{index+1}} </span>
                    <span style="font-size: 1.05rem">{{ item.title }}</span>
                    <div class="watch">
                        <el-button type="warning" size="small" plain round>观看课程</el-button>
                    </div>
                </div>
            </li>
        </ul>
        <div class="none" v-else>
            <div>该课程还未上传视频</div>
        </div>
    </div>
</template>

<script>
    import $ from 'jquery'
    export default {
        name: "curList",
        data(){
            return{
                videoList:[]
            }
        },
        props:{
          curriculumId:Number
        },
        mounted() {
            this.$store.dispatch('getCurVideo',{
                courseId:this.curriculumId
            }).then(res => {
                if (res.resultCode !== 1510) { //判断业务状态码
                    console.log(res.resultCode + ' ' + res.message + ' ' + res.reason);
                    return
                }
                this.videoList = res.data.videos
            }).catch(err => {
                this.$message.error('获取列表失败')
                console.log(err);
            })
            this.$nextTick(() => {
                this.listShow()

            })
        },
        methods:{
            listShow(){
                $(".theList li").on("mouseenter",function () {
                    $(this).find(".watch").css({"opacity":1})
                }).on("mouseleave",function () {
                    $(this).find(".watch").css({"opacity":0})
                })
            },
            toVideo(vid,videoMg){
                this.$router.push({
                    path:'/video/'+vid,
                })
                this.$store.commit('saveVideoMg',videoMg)
            }
        }
    }
</script>

<style scoped>

</style>
