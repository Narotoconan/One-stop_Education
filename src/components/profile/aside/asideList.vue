<template>
    <ul class="asideList flex-column">
        <li>
            <aside-list-item path="/profile/userMg">
                <template v-slot:asideItem>
                    <div>
                        <i class="el-icon-user-solid" style="color: #2f89fc"></i>
                        <span>我的信息</span>
                    </div>
                </template>
            </aside-list-item>
        </li>
        <li>
            <aside-list-item path="/profile/favorites">
                <template v-slot:asideItem>
                    <div>
                        <i class="el-icon-s-promotion" style="color: #fc5185"></i>
                        <span>我的收藏</span>
                    </div>
                </template>
            </aside-list-item>
        </li>
        <li>
            <aside-list-item path="/profile/browsed">
                <template v-slot:asideItem>
                    <div>
                        <i class="el-icon-s-claim" style="color: #43dde6"></i>
                        <span>浏览记录</span>
                    </div>
                </template>
            </aside-list-item>
        </li>
        <li>
            <div>
                <i class="el-icon-s-help" style="color: #21e6c1"></i>
                <span @click="$store.commit('exitUserLogin')">退出登录</span>
            </div>
        </li>
    </ul>
</template>

<script>
    import asideListItem from "./asideListItem";
    export default {
        name: "asideList",
        components:{
            asideListItem
        }
    }
</script>

<style scoped>

</style>
