<template>
    <div class="browsedCard">
        <div class="browsedTimeLine">
            <div class="browsedPoint" :style="'border-color: '+pointC[index % 4]"></div>
            <div class="timeLine"></div>
            <div class="dateTime">
                <span>{{ browsed.browsedDate }}</span>
            </div>
        </div>
        <div class="browsedContent">
            <div class="content">
                <img :src="this.$store.state.targetURL + browsed.courseCover" alt="" @click="$router.push('/video/'+browsed.videoId)">
                <div class="partTwo">
                    <div class="title" @click="$router.push('/video/'+browsed.videoId)">
                        {{ browsed.videoTitle }}
                    </div>
                    <div class="time">
                        <i class="bi bi-stopwatch-fill"></i>
                        <span>观看时间：{{ browsed.browsedTime }}</span>
                    </div>
                    <div class="cardFooter">
                        <el-avatar size="small" :src="this.$store.state.targetURL + browsed.teacherPhoto"></el-avatar>
                        <span class="ml-2">{{ browsed.teacherName }}</span>
                        <div class="d-inline-block ml-5">
                            <el-tag type="success" size="small">{{ browsed.categoryParent }}</el-tag>
                            <el-tag type="warning" size="small" style="margin-left: 5px">{{ browsed.categoryChildren }}</el-tag>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "browsedCard",
        props:{
            browsed:Object,
            index:Number
        },
        data(){
            return{
                pointC: [
                    "#1bc5bd",
                    "#f64e60",
                    "#8950fc",
                    "#ffa800",
                    ""
                ]
            }
        }
    }
</script>

<style scoped>

</style>
