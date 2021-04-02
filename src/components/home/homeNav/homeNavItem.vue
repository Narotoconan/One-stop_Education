<template>
    <div class="homeNavItem">
        <div class="d-inline-block">
            <slot name="icon"></slot>
        </div>
        <div class="d-inline-block ml-3" style="text-align: left">
            <div>
                <h5>{{ homeNavData.name }}</h5>
                <span class="go ml-2">GO <span style="font-family: 宋体;font-weight: 700">></span></span>
            </div>
            <small>{{ homeNavData.description }}</small>
        </div>
    </div>
</template>

<script>
    export default {
        name: "homeNavItem",
        props:{
            homeNavData:Object
        },

    }
</script>

<style lang="less">

</style>