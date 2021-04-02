<template>
    <div class="profile">
        <div style="height: 100px"></div>
        <div class="container pr-0 pl-0 pt-5">
            <el-container>
                <el-aside width="245px">
                    <aside-list/>
                </el-aside>
                <el-main style="padding-top: 0;padding-right: 0;padding-bottom: 0">
                    <div class="profileContent">
                        <keep-alive>
                            <router-view></router-view>
                        </keep-alive>
                    </div>
                </el-main>
            </el-container>
        </div>
    </div>
</template>

<script>
    import asideList from "../components/profile/aside/asideList";
    export default {
        name: "profile",
        components: {
            asideList
        },
        methods:{

        }
    }
</script>

<style lang="less">
    @import "../assets/css/profile/profile";
</style>
