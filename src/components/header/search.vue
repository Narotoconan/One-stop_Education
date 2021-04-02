<template>
    <div class="search mr-3">
            <el-input
                    placeholder="请输入内容"
                    @keypress.enter.native="toSearchPage()"
                    style="border: 1px solid #e4e6ea;border-radius: 50px"
                    v-model="search">
                <i class="el-icon-search el-input__icon" slot="suffix" @click="toSearchPage()"></i>
            </el-input>
    </div>
</template>

<script>
    export default {
        name: "search",
        data(){
            return{
                search:''
            }
        },
        methods:{
            toSearchPage(){
                let searchWords=this.search.split(" ").join(""); //去除空格
                if (searchWords.length){
                    this.$router.push({
                        path:'/search',
                        query:{
                            w:searchWords
                        }
                    })
                    this.search=''
                }
            }
        }
    }
</script>

<style lang="less">

</style>
