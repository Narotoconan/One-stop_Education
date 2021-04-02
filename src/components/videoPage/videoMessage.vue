<template>
    <div class="videoMessage pt-5 pb-5">
        <div class="container pr-0 pl-0">
            <div class="videoTitle h2">{{ video.title }}</div>
            <div class="videoInfo mb-4 mt-4">
                <el-button type="primary" icon="el-icon-video-play" size="mini">播放量：{{ video.viewCounts }}</el-button>
                <a :href="'https://www.bilibili.com/video/'+video.bv" target="_blank">
                    <el-button type="success" icon="el-icon-video-camera" size="mini">B站视频：{{ video.bv }}</el-button>
                </a>
                <el-button type="warning" icon="el-icon-time" size="mini"@click="$router.push('/category/program?cur=30')">类别：{{ video.categoryParent }}</el-button>
                <el-button type="danger" icon="el-icon-s-opportunity" size="mini" @click="$router.push('/category/program?cur=31')">课程：{{video.categoryChildren}}</el-button>
            </div>
            <div class="videoBox">
                <iframe :src="'https://player.bilibili.com/player.html?bvid='+video.bv+'&page='+video.page+'&high_quality=1&danmaku=0'"
                        frameborder="no" width="100%" height="100%" allowfullscreen="true"
                        sandbox="allow-top-navigation allow-same-origin allow-forms allow-scripts">
                </iframe>
            </div>
            <div class="row introduction">
                <div class="col-9 description">
                        <div class="intCard">
                        <div class="title">
                            <i class="bi bi-chat-left-text-fill"></i>
                            课程内容
                        </div>
                        <p>{{ video.content }}</p>
                    </div>
                </div>
                <div class="col-3 teacher">
                    <div class="intCard">
                        <div class="tBorder w-75">
                            <img :src="$store.state.targetURL + video.teacherAvatar" alt="avatar" style="background-color: #d5d7db">
                            <h3 class="mt-3 mb-3">{{ video.teacherName }}</h3>
                            <small class="text-black-50">
                                {{ video.teacherInfo }}
                            </small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "videoMessage",
        data(){
            return{
                video:{}
            }
        },
        mounted() {
            this.getVideo()
        },
        methods:{
            getVideo(){
                this.$store.dispatch('getVideoMessage',{
                    vid:this.$route.params.videoId
                }).then(res => {
                    if (res.resultCode !== 1520) { //判断业务状态码
                        this.$message.warning(res.resultCode + ' ' + res.reason)
                        console.log(res);
                        return
                    }
                    this.video = res.data
                    document.title= res.data.title
                }).catch(err => {
                    this.$message.error('获取视频信息失败')
                    console.log(err);
                })
            }
        },

    }
</script>

<style scoped>

</style>
