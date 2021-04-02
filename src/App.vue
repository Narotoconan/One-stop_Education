<template>
    <div id="app">
        <router-link to="/index"></router-link>
        <router-link to="/login"></router-link>
        <router-view></router-view>

    </div>
</template>

<script>
    export default {
        name: 'App',
        components: {}
    }
</script>

<style lang="less">
    li{
        list-style-type: none !important;
    }
    /* 定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
    ::-webkit-scrollbar {
        width: 7px;
        height: 7px;
        background-color: #F5F5F5;
    }

    /*定义滚动条轨道 内阴影+圆角*/
    ::-webkit-scrollbar-track {
        box-shadow: 0 0 6px rgba(0, 0, 0, 0.3);
        -webkit-box-shadow: 0 0 6px rgba(0, 0, 0, 0.3);
        border-radius: 10px;
        background-color: #f5f5f5;
    }

    /*定义滑块 内阴影+圆角*/
    ::-webkit-scrollbar-thumb {
        border-radius: 10px;
        box-shadow: 0 0 6px rgba(0, 0, 0, .1);
        -webkit-box-shadow: 0 0 6px rgba(0, 0, 0, .1);
        background-color: #e3a96a;
    }

    　　 /* webkit, opera, IE9 */
    　　::selection {
        background: #f3ca82;
        color: #ffffff;
    }

    　　 /* mozilla firefox */
    　　::-moz-selection {
        background: #f3ca82;
        color: #ffffff;
    }
</style>
