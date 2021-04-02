<template>
    <div class="userMg">
        <div class="userMgOne row">
            <div class="col">
                <user-card/>
            </div>
            <div class="col">
                <change-psw/>
            </div>
        </div>
        <div class="userMgTwo mt-5">
            <user-actions :userMessage="userMessage"/>
        </div>
    </div>
</template>

<script>
    import userCard from "./userCard";
    import userActions from "./userActions";
    import changePsw from "./changePsw";

    export default {
        name: "userMg",
        components: {
            userActions,
            userCard,
            changePsw
        },
        data() {
            return {
                userId: '',
                userName: '',
                userMessage: {}
            }
        },
        mounted: function () {

        },
        methods: {
        }
    }
</script>

<style scoped>

</style>
