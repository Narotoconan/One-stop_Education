<template>
    <div class="searchCard">
        <div class="item">
            <img :src="$store.state.targetURL+curriculum.img" alt="" @click="toCur(curriculum.courseId)">
            <div class="d-inline-block ml-4 position-relative h-100" style="width: 60%">
                <div class="curTitle" @click="toCur(curriculum.courseId)">{{ curriculum.title }}</div>
                <div class="mt-4">
                    <small class="text-black-50" style="text-indent: 2em;">{{ curriculum.description }}</small>
                </div>
                <div class="cardB">
                    <el-avatar size="small" :src="$store.state.targetURL+curriculum.teacherAvatar"></el-avatar>
                    <span class="ml-2">{{ curriculum.teacherName }}</span>
                    <div class="itemDate text-black-50">{{ curriculum.startTime.split(' ')[0] }}</div>
                    <div class="itemCate float-right">
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
        name: "searchCard",
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
            toCur(curId){
                this.$router.push({
                    path:'/curriculum/'+curId,
                })
            }
        }
    }
</script>

<style scoped>

</style>
