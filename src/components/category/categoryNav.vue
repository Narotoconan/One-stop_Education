<template>
    <div class="categoryNav">
        <div class="container">
            <span class="d-inline-block"></span>
            <dl style="border-bottom: 1px dashed #cbcbcb" class="categoryType">
                <dt>分类：</dt>
                <dd @click="typeClick('00')">全部课程</dd>
                <dd @click="typeClick('10')">数学课程</dd>
                <dd @click="typeClick('20')">英语课程</dd>
                <dd @click="typeClick('30')">代码课程</dd>
                <dd @click="typeClick('40')">热门课程</dd>
            </dl>
            <dl class="curList p-0">
                <dt>课程：</dt>
                <dd v-for="(item,index) in $store.state.curriculumList.curriculum"
                    @click="toCur($route.path,item.theCode),$store.commit('activeCur',index+1)"
                    :itemCode="item.theCode">{{ item.name }}
                </dd>
            </dl>
        </div>
    </div>
</template>

<script>
    export default {
        name: "categoryNav",
        mounted() {

        },
        data() {
            return {

            }
        },
        methods: {
            typeClick(theCode) {
                switch (theCode) {
                    case '00':
                        this.toCur('/category/all', theCode);
                        break;
                    case '10':
                        this.toCur('/category/math', theCode);
                        break;
                    case '20':
                        this.toCur('/category/english', theCode);
                        break;
                    case '30':
                        this.toCur('/category/program', theCode);
                        break;
                    case '40':
                        this.toCur('/category/hot', theCode);
                        break;
                }
            },
            toCur(path,theCode){
                //window.location.href=path+'?cur='+theCode
                this.$router.push({
                    path: path,
                    query: {
                        cur: theCode
                    }
                });
            }
        }
    }
</script>

<style scoped>

</style>
