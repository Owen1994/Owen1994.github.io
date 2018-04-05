<template>
    <div class="mask" v-show="myPopShow"></div>
</template>
<script>
    export default {
        name: 'mask',
        data() {
            return {
                
            }
        },
        props: ["popShow"],
        computed: {
            myPopShow() {
                return this.popShow;
            }
        },
        components: {
            
        },
        methods: {
            
        },
        created() {
            console.log(this.popShow)
        },
        updated() {
            console.log(this.popShow)
        }
    }
</script>
<style>
    .mask {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 100;
        background: rgba(0,0,0,.2);
    }
    .mask::after {
        width: 16px;
        height: 16px;
        content: url("../../images/loading.gif");
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        margin: auto;
    }
</style>