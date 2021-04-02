<template>
    <div :class="{navBarItem:true,active:isActive}" @click="itemClick">
        <slot name="itemName"></slot>
    </div>
</template>

<script>
    export default {
        name: "navBarItem",
        data(){
            return {
            }
        },
        props:{
          path:String,
            query:String
        },
        methods:{
            itemClick(){
                if (this.query){
                    this.$router.push({
                        path:this.path,
                        query:{
                            cur:this.query
                        }
                    })
                }else {
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

<style>

</style>