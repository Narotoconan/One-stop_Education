<template>
    <div class="listItem">
        <div>
            <img :src="itemData.photo" :alt="itemData.name">
            <span class="ml-2">{{ itemData.name }}</span>
        </div>
        <div class="listContentBorder">
            <div class="listContent">
                <div class="container h-100">
                    <div class="row h-50">
                        <div class="col pt-2" @click="toRoute(itemData.curriculum[0].path,itemData.curriculum[0].cur)">
                            <img :src="itemData.curriculum[0].curriculumPhoto" :alt="itemData.curriculum[0].curriculumName">
                            <h5>{{ itemData.curriculum[0].curriculumName }}</h5>
                            <small class="text-black-50">{{ itemData.curriculum[0].description }}</small>
                        </div>
                        <div class="col pt-2" @click="toRoute(itemData.curriculum[1].path,itemData.curriculum[1].cur)">
                            <img :src="itemData.curriculum[1].curriculumPhoto" :alt="itemData.curriculum[1].curriculumName">
                            <h5>{{ itemData.curriculum[1].curriculumName }}</h5>
                            <small class="text-black-50">{{ itemData.curriculum[1].description }}</small>
                        </div>
                    </div>
                    <div class="row h-50">
                        <div class="col pt-2" @click="toRoute(itemData.curriculum[2].path,itemData.curriculum[2].cur)">
                            <img :src="itemData.curriculum[2].curriculumPhoto" :alt="itemData.curriculum[2].curriculumName">
                            <h5>{{ itemData.curriculum[2].curriculumName }}</h5>
                            <small class="text-black-50">{{ itemData.curriculum[2].description }}</small>
                        </div>
                        <div class="col pt-2" @click="toRoute(itemData.curriculum[3].path,itemData.curriculum[3].cur)">
                            <img :src="itemData.curriculum[3].curriculumPhoto" :alt="itemData.curriculum[3].curriculumName">
                            <h5>{{ itemData.curriculum[3].curriculumName }}</h5>
                            <small class="text-black-50">{{ itemData.curriculum[3].description }}</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "listItem",
        props: {
            itemData: Object
        },
        methods:{
            toRoute(path,cur){
                this.$router.push({
                    path : path,
                    query:{
                        cur:cur
                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>