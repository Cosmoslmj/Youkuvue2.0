<template>
  <div class="hello">
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
                <div class="login" @click="login">
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
    <div class="open-window">
      <div class="container">
        <div class="row">
          <div class="col-xs-2">
            <div class="close"></div>
          </div>
          <div class="col-xs-8 right-content">
            <a href="">
              <img src="http://static.youku.com/h5/html/sb/images/logo.png">
              <span>打开优酷APP，提升3倍流畅度</span>
            </a>
          </div>
          <div class="col-xs-2 open-btn">
            <a href="">打开</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import content from './content'
import nav from './nav'
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
    },
    login () {
      this.$router.push({path: '/login'})
    }
  },
  mounted () {
    window.addEventListener('scroll', this.scrollTop)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
/*重置*/
 *{
    margin: 0;
    padding: 0;
  }

/*清除浮动*/
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
    height: 43px;
    cursor: pointer;
  }
  .search-content,.login-content {
  margin-left: -4px;
  position: absolute;
  }
  .searchbox {
    padding-top: 15px;
    padding-bottom: 15px;
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
    overflow-x: scroll;
  }
  .nav-list {  
    width:2000px;
  }
  .nav-list ul {
    list-style: none;
    border-bottom: 3px solid #eee;
  }
  .nav-list ul li {
    display: inline-block;
    font-size: 18px;
    white-space:nowrap;
  }
  .nav-list ul li a {
    display: inline-block;
    *display: inline;
    *zoom: 1;
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
 /* .video-large {
    height: 216px;
  }*/
  .video-large img {
    width: 100%;
  }
  .video-box {
    height: 140px;
   /* position: absolute;*/
  }
  .video-small .video-box{
    /*margin-top: 20px;*/
    /*margin-right: 5px;*/
    background-color: #aaa;
    margin-bottom: 20px;
  }
  .small-left {
    position: relative;
  }
  .video-dynamic {
    position: relative;
    width: 100%;
    height: 30px;
    top: -30px;
    background-color: rgba(0,0,0,.2);
  }
  .video-num {
    line-height: 30px;
    height: 30px;
    padding-left: 6px;
    color: #fff;
  }
  .detial {
    margin-top: -40px;
    width: 100%;
    height: 44px;
    background-color: #f2f2f2;
    margin-bottom: 20px;
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
  .small-icon {
    background: url(http://static.youku.com/index/img/mobile/yk.png) no-repeat -60px -60px;
    position: absolute;
    z-index: 333;
    width: 50px;
    height: 50px;
  }
  .title-video {
    margin-top: 30px;
  }
  .title-video a {
    color: #909090;
    font-size: 26px;
  }
  .sidebar ul {
    position: fixed;
    bottom: 55px;
    right: 10px;
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
/*内容结束*/

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

/*底部打开窗口*/
.open-window {
  height: 66px;
  background-color: #fff; 
  position: fixed;
  z-index: 1000;
  bottom: 0;
  left: 0;
  width: 100%;
}
.close {
  background-color: #fff;
  width: 30px;
  height: 30px;
  background:url(http://m.youku.com/video/images/close.png) no-repeat;
  background-size: 50%;
  margin-top: 20px;
  cursor: pointer;
  margin-left: -10px;
}
.right-content a {
  width: 100%;
  height: 66px;
  color:#001;
  font-size: 14px; 
}
.right-content a img{
  width: 40px;
  height: 40px;
  margin-top: 10px;
  margin-left: -30px;
}
.right-content span {
  left: 10px;
  top:5px;
  position: relative;
}
.open-btn a{
  display: block;
  width: 44px;
  background-color: #2692ff;
  height: 28px;
  text-align: center;
  line-height: 28px;
  border-radius: 4px;
  margin-left: -5px;
  margin-top: 15px;
  color: #fff;
}
.col-lg-1, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-md-1, .col-md-10, .col-md-11, .col-md-12, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-sm-1, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-xs-1, .col-xs-10, .col-xs-11, .col-xs-12, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9 {
    position: relative;
    min-height: 1px;
    padding-right: 10px;
    padding-left: 10px;
}
</style>
