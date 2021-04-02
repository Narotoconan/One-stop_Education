<template>
    <div class="actionsItem">
        <div>
            <slot name="actionsItemIcon"></slot>
        </div>
        <h5 class="mt-3">{{ name }}</h5>
        <div class="mt-2" style="font-weight: 700" v-if="this.name === '用户性别'">{{ val }}</div>
        <div class="mt-2" style="font-weight: 700" v-else-if="message">{{ message }}</div>
        <div class="mt-2" style="font-weight: 700" v-else>暂无信息</div>
    </div>
</template>

<script>
    export default {
        name: "actionsItem",
        data(){
          return {
              val: ''
          }
        },
        props: {
            message:String,
            name: String,
        },
        mounted() {
            this.gender()
        },
        methods: {
            gender() {
                if (this.name === '用户性别') {
                    //this.message ? this.val = "男" : this.val = "女"
                    if (this.message === '0'){
                        this.val = "女"
                    }else {
                        this.val = "男"
                    }
                }
            }

        }
    }
</script>

<style scoped>

</style>
