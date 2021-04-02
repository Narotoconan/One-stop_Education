<template>
    <div class="sign">
        <div class="loginTitle">欢迎注册账号 <span style="font-family: 华文细黑">:)</span></div>
        <div class="signForm">
            <div class="input userName">
                <div>
                    <i class="bi bi-person-fill mr-3"></i>
                    <div class="d-inline-block">
                        <div class="mb-1">
                            <small class="text-black-50">用户名/ Name</small>
                        </div>
                        <input type="text" v-model="sign.username" placeholder="用户名称">
                    </div>
                </div>
            </div>
            <div class="input userEmail">
                <div>
                    <i class="bi bi-envelope-fill mr-3"></i>
                    <div class="d-inline-block">
                        <div class="mb-1">
                            <small class="text-black-50">邮箱/ Email</small>
                        </div>
                        <input type="email" v-model="sign.email" placeholder="绑定邮箱">
                    </div>
                </div>
            </div>
            <div class="input userPassword">
                <div>
                    <i class="bi bi-key-fill mr-3"></i>
                    <div class="d-inline-block">
                        <div class="mb-1">
                            <small class="text-black-50">密码/ Password</small>
                        </div>
                        <input type="password" v-model="sign.password" placeholder="密码">
                    </div>
                </div>
            </div>
            <div class="input userGender">
                <div>
                    <i class="bi bi-exclude mr-3"></i>
                    <div class="d-inline-block">
                        <div class="mb-1">
                            <small class="text-black-50">性别 / Gender</small>
                        </div>
                        <el-radio v-model="sign.gender" label="1">男性</el-radio>
                        <el-radio v-model="sign.gender" label="0">女性</el-radio>
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-4" style="text-align: center">
            <el-button type="warning" round plain @click="signAccount"> 注 册 账 号 </el-button>
        </div>
    </div>
</template>

<script>
    import $ from "jquery";

    export default {
        name: "toSign",
        data(){
            return{
                sign:{
                    username:'',
                    email:'',
                    password:'',
                    gender:'1'
                }
            }
        },
        mounted() {
            this.iconColor()
        },
        methods:{
            iconColor(){
                $(".input input").on("focus",function () {
                    $(this).parent().siblings(".bi").addClass("iconColor");
                }).on("blur",function () {
                    $(this).parent().siblings(".bi").removeClass("iconColor")
                })
            },
            signAccount(){
                for (let key of Object.values(this.sign)) {
                    if (!key) {
                        this.$message.warning('相关注册信息不能为空')
                        return
                    }
                }
                this.$store.dispatch('toSignAccount',this.sign)
            }
        }
    }
</script>

<style scoped>

</style>
