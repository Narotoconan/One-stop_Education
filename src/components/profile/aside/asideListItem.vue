<template>
    <div :class="{active:isActive}" @click="itemClick">
        <slot name="asideItem"></slot>
    </div>
</template>

<script>
    export default {
        name: "asideListItem",
        props:{
            path:String
        },
        methods:{
            itemClick(){
                if(this.$route.path!==this.path){
                    this.$router.push(this.path)
                }
            }
        },
        computed:{
            isActive(){
                return this.$route.path.indexOf(this.path) !== -1
            }
        },
    }
</script>

<style lang="less">

</style>