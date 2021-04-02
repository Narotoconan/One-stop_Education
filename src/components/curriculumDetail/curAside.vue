<template>
    <div class="curAside">
        <div class="teacherCard">
            <div style="padding-bottom: 15px;border-bottom: 1px dashed #c4c4c4">
                <img :src="$store.state.targetURL + curriculum.teacherAvatar" alt="" style="background-color: #e4e6ea">
                <span>{{ curriculum.teacherName }}</span>
            </div>
            <div class="mt-3">
                <small class="text-black-50 ">{{ curriculum.teacherInfo }}</small>
            </div>
        </div>
        <div class="desCard">
            <div class="title">
                <i class="bi bi-blockquote-right"></i>
                <span>课程介绍</span>
            </div>
            <small class="text-black-50">{{ curriculum.description }}</small>
        </div>
    </div>
</template>

<script>
    export default {
        name: "curAside",
        props:{
            curriculum: Object
        }
    }
</script>

<style scoped>

</style>
