<template>
    <div class="in_theaters">
        <ul class="ul1 clearfix">
            <li v-for="item in movieList" v-bind:key="item.id">
                <a><img :src="item.images.small"></a>
                <p>{{ item.title }}</p>
            </li>
        </ul>
        <div class="indicator_container">
            <ul class="pageIndicator">
                <li class="pre" @click="back()"><</li>
                <li class="num" v-for="item in pageIndicator" :class="{ indicatorActive: item=='1' }" v-bind:key="item" @click="changePage(item)">{{ item }}</li>
                <li class="next" @click="forward()">></li>
            </ul>
        </div>
    </div> 
</template>
<script>
    export default {
        name: 'in_theaters',
        data() {
            return {
                movieList:[],
                totalNum:null,
                pageTotal:null,
                pageNum:0,
                pageIndicator:[]
            }
        },
        methods: {
            back() {
                var firstNum = 0;
                this.pageNum = this.pageNum - 1;
                this.pageNum = this.pageNum <= firstNum ? firstNum : this.pageNum;
                this.sendAjax();
                this.indicatorActive();
            },
            forward(e) {
                var lastNum = this.pageTotal - 1;
                this.pageNum = this.pageNum + 1;
                this.pageNum = this.pageNum >= lastNum ? lastNum : this.pageNum;
                this.sendAjax();
                this.indicatorActive();
            },
            changePage(page){
                this.pageNum = page - 1;
                this.sendAjax();
                this.indicatorActive();
            },
            getData(pageNumer) {
                var _this = this;
                var pageIndicatorNum = document.querySelectorAll(".pageIndicator .num");
                this.$http.jsonp('https://api.douban.com/v2/movie/in_theaters?start='+this.pageNum*20, {method: 'GET'}).then(function (response) {
                    var arr = response.body.subjects;
                    arr.forEach(function(v) {
                        _this.movieList.push(v);
                    })
                    this.total = response.body.total;
                    this.pageTotal = Math.ceil(this.total / 20);
                    for(var i=1;i<this.pageTotal+1;i++) {
                        this.pageIndicator.push(i);
                    }
                });
            },
            indicatorActive() {
                var pageIndicatorNum = document.querySelectorAll(".pageIndicator .num");
                for(var i=0;i<pageIndicatorNum.length;i++) {
                    pageIndicatorNum[i].classList.remove("indicatorActive");
                }
                pageIndicatorNum[this.pageNum].classList.add("indicatorActive")
            },
            sendAjax() {
                this.$http.jsonp('https://api.douban.com/v2/movie/in_theaters?start='+this.pageNum*20, {
                    method: 'GET',
                    before(request) {
                        if (this.previousRequest) {
                            this.previousRequest.abort();
                        }
                        this.previousRequest = request;
                    }
                }).then(function (response) {
                    var arr = response.body.subjects;
                    this.movieList = arr;
                });
            }
        },
        created() {
            this.getData(0);
        }
    }
</script>
<style>

</style>