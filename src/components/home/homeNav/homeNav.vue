<template>
    <div class="homeNav">
        <div class="container">
            <ul>
                <li @click="toRoute('/category/program','30')">
                    <home-nav-item :homeNavData="homeNavData1">
                        <template v-slot:icon>
                            <i class="bi bi-journal-code" style="font-size: 3rem"></i>
                        </template>
                    </home-nav-item>
                </li>
                <li @click="toRoute('/category/math','10')">
                    <home-nav-item :homeNavData="homeNavData2">
                        <template v-slot:icon>
                            <i class="bi bi-calculator" style="font-size: 3rem"></i>
                        </template>
                    </home-nav-item>
                </li>
                <li @click="toRoute('/category/english','20')">
                    <home-nav-item :homeNavData="homeNavData3">
                        <template v-slot:icon>
                            <i class="bi bi-chat-square-dots" style="font-size: 3rem"></i>
                        </template>
                    </home-nav-item>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
   import homeNavItem from "./homeNavItem";
   import $ from "jquery";
    export default {
        name: "homeNav",
        data(){
          return {
              homeNavData1:{
                  name:"代码编程课",
                  description:"快速学习掌并握编程技巧",
              },
              homeNavData2:{
                  name:"数学课程",
                  description:"运用数学思维解决问题",
              },
              homeNavData3:{
                  name:"英语课程",
                  description:"提高阅读写作水平与能力",
              },
          }
        },
        components:{
           homeNavItem
        },
        mounted() {
            this.homeNavItemHover()
        },
        methods:{
            homeNavItemHover(){
                $(".homeNav li").on("mouseenter",function () {
                    $(this).find("i").addClass("homeNavItemHover");
                    $(this).find("h5").addClass("homeNavItemHover");
                }).on("mouseleave",function () {
                    $(this).find("i").removeClass("homeNavItemHover");
                    $(this).find("h5").removeClass("homeNavItemHover");
                })
            },
            toRoute(path,cur){
                this.$router.push({
                    path : path,
                    query:{
                        cur:cur
                    }
                })
            }

        }
    }
</script>

<style lang="less">
    @import "../../../assets/css/home/homeNav/homeNav";
</style>