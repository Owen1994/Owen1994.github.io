<template>
	<div class="wrap-header">
		<div class="top">
			<div id="search" class="fr">
				<div class="button-search"></div>
				<input class="keyword" @input="sub()" type="text" value="Search..." onfocus="if (this.value == 'Search...') {this.value = '';}" @blur="myblur()">
                <ul class="result">
                    <li v-for="item in movieList">
                        {{item.title}}
                    </li>
                </ul>
			</div>
		</div>
		
		<div id="logo">
			<h1>Owen Cinema</h1>
		</div>

		<nav>
			<div class="wrap-nav">
				<div class="menu">
					<ul class="clearfix">
						<li><router-link to="/in_theaters">正在热映123</router-link></li>
						<li><router-link to="/coming_soon">即将上映</router-link></li>
						<li><router-link to="/top250">TOP250</router-link></li>
						<li><router-link to="/aboutUs">About</router-link></li>
						<li><router-link to="/contactUs">Contact</router-link></li>
					</ul>
				</div>
			</div>
		</nav>
		
	</div>
</header>
    
</template>

<script>
export default {
    name: 'header',
    data () {
        return {
            movieList:[]
        }
    },
    methods: {
        myblur() {
            if (this.value == '') {
                this.value = 'Search...';
            }
            this.movieList = [];
        },
        sub() {
            var val = document.querySelector(".keyword").value;
            var _this = this;
            if(val != "Search..." && val != "") {
                this.$http.jsonp("https://api.douban.com/v2/movie/search?q="+ val,{method:"GET"}).then(function(response) {
                    var arr = response.body.subjects;
                    var newArr = [];
                    arr.forEach(function(v,i) {
                        if(i <= 3) {
                            newArr.push(v);
                        }
                    })
                    this.movieList = newArr;
                })
            }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#search {
  width: 50%;
  position: relative;
}
#search input {
    background: #FFF;
    padding: 1px 50px;
    width: 100%;
    height: 40px;
    border: 1px solid #EEEEEE;
    position:relative;
}
.sub {
    width:40px;
    height:40px;
    position:absolute;
    right:0;
    top:0;
    text-align:center;
    border-left:1px solid #ccc;
    padding-top:10px;
    cursor:pointer;
}
.result {
    position: absolute;
    top: 40px;
    left: 0;
    width: 100%;
    background-color: #fff;
}
.result li {
    padding: 10px;
    border-bottom: 1px solid #ccc;
}
.wrap-header .top {
  padding: 10px;
  height:60px;
}
.button-search {
    position: absolute;
    left: 0px;
    background: url(../images/button-search.png) center center no-repeat;
    width: 40px;
    height: 40px;
    border-right: 1px solid #EEEEEE;
    cursor: pointer;
    z-index:2;
}
.wrap-header #logo {
    background: #76D2C5;
    width: 100%;
    text-align: center;
    padding: 40px 0px;
    color: #ffffff;
}
.wrap-header #logo h1 {
    font-size: 60px;
    line-height: 80px;
    color: #ffffff;
}
nav .wrap-nav {
    display: inline-block;
    background: #91DBD1;
    width: 100%;
}
.menu ul {
    cursor: pointer;
    font-size:14px;
}
.menu ul li {
    width: 20%;
    float: left;
    text-align: center;  
    height: 50px;
    line-height:25px;
}
.menu ul li:hover {
  background-color: #76F2C5;
}
.menu ul li:hover a {
  color: #000;
}
.menu ul li a {
    display: block;
    width: 100%;
    height: 100%;
    padding: 15px 0;
    color:#fff;
}
@media screen and (min-width:320px) {
    .menu ul li {
        font-size:14px;
    }
    .wrap-header #logo h1 {
        font-size:30px;
    }
}
@media screen and (min-width:780px) {
    .menu ul li {
        font-size:16px;
    }
    .wrap-header #logo h1 {
        font-size:60px;
    }
}
</style>
