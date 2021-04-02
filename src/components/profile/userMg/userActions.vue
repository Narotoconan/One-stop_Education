<template>
    <div class="userActions">
        <div class="container h-100">
            <div class="row h-50">
                <div class="col pt-2">
                    <actions-item :message="String(userMessage.userId)" name="用户ID">
                        <template v-slot:actionsItemIcon>
                            <i class="bi bi-credit-card-2-front" style="color: #ff6283"></i>
                        </template>
                    </actions-item>
                </div>
                <div class="col pt-2">
                    <actions-item :message="userMessage.username" name="用户名">
                        <template v-slot:actionsItemIcon>
                            <i class="bi bi-person-lines-fill" style="color: #74ff6d"></i>
                        </template>
                    </actions-item>
                </div>
                <div class="col pt-2">
                    <actions-item :message="userMessage.userTel" name="电话号码">
                        <template v-slot:actionsItemIcon>
                            <i class="bi bi-phone-vibrate" style="color: #b757ff"></i>
                        </template>
                    </actions-item>
                </div>
            </div>
            <div class="row h-50">
                <div class="col pt-2">
                    <actions-item :message="userMessage.userEmail" name="电子邮箱">
                        <template v-slot:actionsItemIcon>
                            <i class="bi bi-envelope-fill" style="color: #3d23ff"></i>
                        </template>
                    </actions-item>
                </div>
                <div class="col pt-2">
                    <actions-item :message="userMessage.userRegTime" name="注册日期">
                        <template v-slot:actionsItemIcon>
                            <i class="bi bi-calendar-week" style="color: #ffb259"></i>
                        </template>
                    </actions-item>
                </div>
                <div class="col pt-2">
                    <actions-item :message="String(userMessage.userGender) " name="用户性别">
                        <template v-slot:actionsItemIcon>
                            <i class="bi bi-exclude" style="color: #ff2850"></i>
                        </template>
                    </actions-item>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import actionsItem from "./actionsItem";

    export default {
        name: "userActions",
        components:{
            actionsItem
        },
        data() {
            return {
                userMessage:this.userMessage=JSON.parse(localStorage.getItem('user'))
            }
        },
        mounted() {

        },
        methods: {

        }
    }
</script>

<style scoped>

</style>
