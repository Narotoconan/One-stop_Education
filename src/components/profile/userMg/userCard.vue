<template>
    <div class="userCard position-relative">
        <img :src="circleUrl" alt="avatar" class="avatar">
        <div class="userCardName d-inline-block align-middle ml-4">
            <span>{{ userName }}</span>
            <div class="text-black-50">{{ nowTime }}</div>
            <change-mg/>
        </div>
        <change-av/>
    </div>
</template>

<script>
    import changeMg from "./changeMg";
    import changeAv from "./changeAv";
    export default {
        name: "userCard",
        data() {
            return {
                circleUrl: this.$store.state.targetURL+this.$store.getters.getUser.userAvatar,
                nowTime: '',
                userName:this.$store.getters.getUser.username,
            }
        },
        components:{
            changeMg,
            changeAv
        },
        mounted() {
            this.nowHours()
        },
        methods: {
            nowHours() {
                let time = new Date();
                let hours = time.getHours();
                if (hours >= 0 && hours <= 5) this.nowTime = '凌晨好~~';
                if (hours >= 6 && hours <= 12) this.nowTime = '早上好~~';
                if (hours >= 13 && hours <= 17) this.nowTime = '下午好~~';
                if (hours >= 18 && hours <= 24) this.nowTime = '晚上好~~';
            }
        }
    }
</script>

<style scoped>

</style>
