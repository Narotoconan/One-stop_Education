<template>
    <div class="videoPage">
        <div style="height: 100px"></div>
        <video-message></video-message>
    </div>
</template>

<script>
    import videoMessage from "../components/videoPage/videoMessage";
    export default {
        name: "videoPage",
        components:{
            videoMessage
        },
        mounted() {
        },
        methods:{

        }

    }
</script>

<style lang="less">
    @import "../assets/css/videoPage/videoPage";
</style>
