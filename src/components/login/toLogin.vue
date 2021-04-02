<template>
    <div class="toLogin">
        <div class="loginTitle">欢迎登陆 <span style="font-family: 华文细黑">:)</span></div>
        <small class="description text-black-50">
            请通过电子邮件地址或所绑定的电话号码的信息凭证用密码登录您的个人账户
            <span><i class="bi bi-bell-fill"></i></span>
        </small>

        <div class="loginInput">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        name: "toLogin",

    }
</script>

<style scoped>

</style>