<template>
    <div class="userLogin mt-5">
        <div class="inputGroup">
            <div class="input user">
                <div>
                    <i class="bi bi-person-circle mr-3"></i>
                    <div class="d-inline-block">
                        <div class="mb-1">
                            <small class="text-black-50">用户信息/ Message</small>
                        </div>
                        <input type="text" v-model="userMessage" placeholder="用户邮箱/电话">
                    </div>
                </div>
            </div>
            <div class="input password">
                <div>
                    <i class="bi bi-shield-lock-fill mr-3"></i>
                    <div class="d-inline-block">
                        <div class="mb-1">
                            <small class="text-black-50">用户密码/ Password</small>
                        </div>
                        <input type="password" v-model="userPassword" placeholder="密码">
                    </div>
                </div>
            </div>
        </div>
        <div class="p-4">

        </div>
        <div class="toSubmit mt-3">
            <el-button round type="warning" @click="userLogin" style="width: 50%"> 登 录 </el-button>
            <div class="float-right mt-2">
                <el-link type="info" @click="toRoute('/login/toSign')">用户注册</el-link>
            </div>
        </div>
    </div>
</template>

<script>
    import $ from "jquery";
    export default {
        name: "userLogin",
        data() {
            return {
                userMessage: '',
                userPassword: '',
                radio: false
            }
        },
        mounted() {
            this.iconColor()
        },
        methods: {
            toRoute(path) {
                this.$router.push(path);
            },
            iconColor() {
                $(".input input").on("focus", function () {
                    $(this).parent().siblings(".bi").addClass("iconColor");
                }).on("blur", function () {
                    $(this).parent().siblings(".bi").removeClass("iconColor")
                })
            },
            userLogin() {
                this.$store.dispatch('toLogin', {
                    userMessage: this.userMessage,
                    userPassword: this.userPassword,
                })
            }
        },

    }
</script>

<style scoped>

</style>
