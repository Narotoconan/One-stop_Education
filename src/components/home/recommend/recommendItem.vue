<template>
    <div class="recommendItem col mb-4" @click="toCurriculum(curriculum.courseId)">
        <div class="card">
            <img :src="$store.state.targetURL+curriculum.img" class="card-img-top" alt="..." style="height: 193px">
            <div class="card-body">
                <h5 class="card-title mb-4">{{ curriculum.title }}</h5>
                <div>
                    <el-avatar size="small" :src="$store.state.targetURL+curriculum.teacherAvatar"></el-avatar>
                    <span style="font-weight: 600">{{ curriculum.teacherName }}</span>
                    <div class="float-right">
                        <el-tag type="success" class="mr-2" @click.stop="toCate(curriculum.categoryURLName,curriculum.categoryParentId)">{{ curriculum.categoryParent }}</el-tag>
                        <el-tag type="warning" @click.stop="toCate(curriculum.categoryURLName,curriculum.categoryChildrenId)">{{ curriculum.categoryChildren}}</el-tag>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "recommendItem",
        data(){
            return{

            }
        },
        props:{
            curriculum:Object
        },
        methods:{
            toCate(path,code){
                this.$router.push({
                    path:'/category/'+path,
                    query:{
                        cur:code
                    }
                })
            },
            toCurriculum(curriculumId){
                this.$router.push({
                    path:`/curriculum/${curriculumId}`,
                })
            },
        }
    }
</script>

<style scoped>

</style>
