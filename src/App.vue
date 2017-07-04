<template>
  <div id="app">
  <!-- 头部开始 -->
    <div class="header">
      <div class="header-container">
        <div class="container">
          <div class="header-logolist">
            <div class="row">
              <div class="col-xs-8">
                <div class="logo">
                  <a href="javascript:;">
                    <img src="http://static.youku.com/index/img/mheader/yklogo@2x.png" title="优酷视频">
                  </a>
                </div>
                <div class="channel">
                  <span class="glyphicon glyphicon-align-justify"></span><br>
                  <span class="channel-list">频道</span>
                </div>
              </div>
              <div class="col-xd-4">
                <div class="search" @click="search">
                  <span class="glyphicon glyphicon-search"></span><br>
                  <span class="search-content">搜索</span>
                </div>
                <div class="login">
                  <span class="glyphicon glyphicon-user"></span><br>
                  <span class="login-content">登录</span>
                </div>
              </div>
            </div>
          </div>
          <div class="searchbox">
            <div class="container">
              <div class="row">
                <div class="col-xs-10">
                  <div class="search-box-content">
                    <div class="form-group">             
                      <input type="text" class="form-control"   placeholder="香港回归20周年">
                    </div>
                  </div>
                </div>
                <div class="col-xs-2">
                  <div class="search-box-button">
                    <a class="btn btn-default" href="#" role="button"><span class="glyphicon glyphicon-search"></span>搜库</a>
                  </div>
                </div>
              </div>
            </div>           
          </div>
        </div>
      </div>
    </div>
  <!--     头部结束 -->
    <!-- 导航栏开始 -->
    <my-nav></my-nav>  
    <!-- 导航结束 -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <!-- 内容开始 -->
    <my-content></my-content>
    <!-- 内容结束 -->
    <div class="sidebar">
      <ul>
        <li @click="scrollTop"><span class="glyphicon glyphicon-arrow-up"></span></li>
        <li><span class="glyphicon glyphicon-user"></span></li>
        <li><span class="glyphicon glyphicon-list-alt"><br><span class="respond">反馈</span></span></li>
      </ul>
    </div>
    <!-- 尾部 -->
    <div class="footer">
      <div class="container">
        <div class="footer-content">
          <p>Copyright&copy;2017 优酷 youku.com 版权所有<a href="">反盗版盗链声明 京东ICP证060288号</a></p>
          <p></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import content from './components/content'
import nav from './components/nav'
export default {
  components: {
    MyContent: content,
    MyNav: nav
  },
  name: 'app',
  data () {
    return {
      scroll: ''
    }
  },
  methods: {
    search () {
      alert('搜啥')
    },
    scrollTop () {
      this.scroll = document.body.scrollTop
      console.log(this.scroll)
      this.scroll = 0
    }
  },
  mounted () {
    window.addEventListener('scroll', this.scrollTop)
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.clearfix:after{
  content:".";
  display:block;
  height:0;
  clear:both;
  visibility:hidden;
}
.clearfix{zoom:1;};
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
/*头部开始*/
.header {
  height: 90px;
}
.header-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
}
.header-container, .header-logolist {
  height: 40px;
  background-color: #f1f1f1;
}
.logo img {
  width: 140px;
  height: 35px;
  margin-top: 8px;
  float: left;
}
.channel {
  float: left;
  margin-left: 12px;
}
.channel .glyphicon {
  padding-left: 6px;
  top:4px;
}
.search .glyphicon, .login .glyphicon {
  top: 4px;
}
.search, .login {
  float: left;
  padding-right: 25px;
  margin-left: 10px;
}
.search-content,.login-content {
margin-left: -4px;
position: absolute;
}
.searchbox {
  padding: 15px;
}
.searchbox .col-xs-10 {
  padding-left: 6px;
}
.form-control {
  border-radius: 0;
  -webkit-border-radius: 0;
  -moz-border-radius: 0;
   border-right: none;
}
.search-box-button .btn {
  padding: 6px 15px;
  margin-left: -30px;
  border-radius: 0;
  -webkit-border-radius: 0;
  -moz-border-radius: 0;
  background-color: #5599FF; 
  color: #fff;
}
.search-box-button .glyphicon {
  right: 5px;
}
/*头部结束*/
/*导航栏开始*/
.nav {
  width: 100%;
  height: 50px;
  margin-top: 20px;
  overflow-y: hidden; 
}
.nav-list {
  overflow-x: scroll;
  width:2000px;
}
.nav-list ul {
  list-style: none;
  border-bottom: 3px solid #eee;
}
.nav-list ul li {
  font-size: 18px;
  white-space:nowrap;
}
.nav-list ul li a {
  display: inline-block;
  color: #888;
  padding-bottom: 4px;
  margin-right: 30px; 
}
.nav-list ul li a:hover {
  color: #5599FF;
  text-decoration: none;
  border-bottom: 3px solid #5599FF;
}
.nav::-webkit-scrollbar {
  display:none;
}
/*导航结束*/
/*内容开始*/
.content {
  margin-bottom: 50px;
}
.video-large iframe {
  width: 100%;
}
.video-box {
  height: 170px;
 /* position: absolute;*/
}
.video-small .video-box video {
  margin-top: 10px;
  margin-right: 5px;
  background-color: #aaa;
}
.video-dynamic {
  position: relative;
  top:-34px;
  width: 100%;
  height: 30px;
  background-color: rgba(0,0,0,.4);
}
.video-num {
  line-height: 30px;
  height: 30px;
  padding-left: 6px;
  color: #fff;
}
.detial {
  margin-top: -8px;
  width: 100%;
  height: 44px;
  background-color: #f2f2f2;
}
.detial p.detial-title {
  padding-top: 2px;
  text-overflow:ellipsis;
  overflow: hidden;
}
.detial-title a {
  padding: 4px 4px;
  white-space:nowrap;
  color: #555; 
}
.detial .watch {
  font-size: 12px;
  color: #909090;
  top: -10px;
  padding-left: 4px;
}
.detial .comment {
  font-size: 12px;
  color: #909090;
  top: -10px;
  padding-left: 8px;
}
.sidebar ul {
  position: fixed;
  bottom: 30px;
  right: 15px;
}
.sidebar ul li{
  width: 50px;
  height: 50px;
  background-color: rgba(0,0,0,0.5);
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
  line-height: 50px;
  color: #fff;
  font-size: 20px;
  margin-top: 5px;
  list-style: none;
}
.sidebar .glyphicon-list-alt {
  top:6px;
}
.sidebar ul li .respond {
  font-size: 14px;
}
/*尾部开始*/
.footer-content {
  padding: 10px; 
  height: 50px;
  width: 100%;
  border-top: 1px solid #ddd;
  margin: 0 auto;
}
.footer p {
  display: block;
  width: 240px;
  margin: 0 auto;
  text-align: center;
  font-size: 12px;
  color: #555;
}
.footer p a {
  text-decoration: underline;
  color: #909090;
  font-size: 12px;
}
/*尾部结束*/
</style>
