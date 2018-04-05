<template>
    <div class="in_theaters">
        <v-mask :popShow="myPopShow"></v-mask>
        <ul class="ul1 clearfix">
            <li v-for="item in movieList" v-bind:key="item.id">
                <a><img :src="item.images.small"></a>
                <p>{{ item.title }}</p>
            </li>
        </ul>
        <v-indicator @initIndicator="initIndicator" :requestLocation="requestLocation" @popShow="popShow"></v-indicator>
    </div> 
</template>
<script>
    import indicator from '../common/indicator';
    import mask from '../common/mask';
    export default {
        name: 'coming_soon',
        data() {
            return {
                movieList:[],
                myPopShow: false,
                requestLocation: "https://api.douban.com/v2/movie/coming_soon"
            }
        },
        components: {
            "v-indicator": indicator,
            "v-mask": mask
        },
        methods: {
            initIndicator(data) {
                console.log(data);
                this.movieList = data;
            },
            popShow(data) {
                console.log(data);
                this.myPopShow = data;
            }
        }
    }
</script>
<style>
    .in_theaters {
        position: relative;
    }
</style>