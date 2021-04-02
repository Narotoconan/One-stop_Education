<template>
    <div class="curriculumDetail pb-5">
        <div style="height: 100px"></div>
        <div class="container pr-0 pl-0">
            <curriculum-card :curriculum="curriculum" v-if="curriculum"></curriculum-card>
            <div class="curContent mt-4">
                <cur-list :curriculumId="Number(this.$route.params.curriculumId)"></cur-list>
                <cur-aside :curriculum="curriculum" v-if="curriculum"></cur-aside>
            </div>
        </div>
    </div>
</template>

<script>
    import curriculumCard from "../components/curriculumDetail/curriculumCard";
    import curAside from "../components/curriculumDetail/curAside";
    import curList from "../components/curriculumDetail/curList";
    import { Loading } from 'element-ui';

    export default {
        name: "curriculumDetail",
        components:{
          curriculumCard,
            curAside,
            curList
        },
        data(){
          return {
              curriculum:null
          }
        },
        mounted() {
            let loadingInstance=Loading.service({
                target:document.querySelector('.curriculumDetail')
            })
            this.$store.dispatch('getCateCur',{
                cid:this.$route.params.curriculumId
            }).then(res => {
                loadingInstance.close();
                if (res.resultCode !== 1210) { //判断业务状态码
                    this.$message.warning(res.resultCode + ' ' + res.message)
                    return
                }
                this.curriculum = res.data.courses[0]
            }).catch(err => {
                loadingInstance.close();
                this.$message.error('获取课程失败')
                console.log(err);
            })
        },
        methods:{

        }
    }
</script>

<style lang="less">
    @import "../assets/css/curriculumDetail/curriculumDetail";
</style>
