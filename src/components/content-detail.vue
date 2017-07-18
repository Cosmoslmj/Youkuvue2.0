<template>
  <div class="detail">
    <div class="detail-header">
      <div class="container">
        <div class="header-menu-icon">
        </div>
        <div class="header-logo-icon">          
        </div>
        <div class="header-box-right">
            <span class="header-search-icon">搜索</span>
            <span class="header-user-icon">个人</span>
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
    <!-- <div class="carousel clearfix">
      <div class="container">
        <div class="close">
          <img src="http://m.youku.com/video/images/close.png"> 
        </div>       
      </div>
    </div> -->
    <div class="detail-video">
      <div class="container">
        <div class="btn-full-version">
          <a href="">看完整版</a>
        </div>
        <div class="error-tip">
          <span>视频播放失败，请重试</span>
        </div>
        <div class="video-play-icon"></div>
      </div>
    </div>
    <div class="open-videoapp">
      <div class="container">
        <a href="">
          <div class="open-box">
            <span>打开优酷APP，提升3倍流畅度</span> 
          </div>  
        </a>
      </div>
    </div>
    <div class="introduce-video">
      <div class="container">
        <div class="row">
          <div class="col-xs-10">
            <span class="video-title">楚乔传 TV版</span>
          </div>
          <div class="col-xs-2">
            <span class="glyphicon glyphicon-chevron-down"></span>
          </div>  
        </div>
        <div class="playback">
          <span class="num">9</span><span class="num-last">.6</span><span class="fen">分</span><span class="play-num">40.7亿次播放</span>
        </div>
        <div class="like-new-icon">
            <div class="left">
              <a href=""><span class="like-icon"><span class="like-num">94.6万</span></span></a>
            </div>
            <div class="right">
              <a href=""><span class="arrow"></span></a> 
              <a href=""><span class="star"></span></a>
              <a href=""><span class="type">高清</span> </a>
              <a href=""><span class="forwarding"></span></a> 
            </div>      
        </div>
      </div>
    </div>
    <div class="choose-part">
      <div class="container">
        <div>
          <h4 class="part-title left"> 选集</h4>
          <span class="part-num right">更新至44集</span>
        </div>
        <div class="slide-list clearfix">
          <div class="list-box">
            <ul>
              <li v-for ="n in 45 | reverse"><a href="" class="heighlight">{{ n }}</a><span class="book"></span></li>
            </ul>    
          </div> 
        </div>
      </div>
    </div>
    <div class="actor">
      <div class="container">
        <h4 class="part-title">明星</h4>
        <div class="slide-list2 clearfix">
          <div class="list-box">
            <ul>
              <li v-for="act in actor">
                <a href="">
                  <img :src="act.img">
                  <p>{{ act.name }}</p>
                </a>
              </li>
            </ul>    
          </div> 
        </div>
      </div> 
    </div>
    <div class="people-like">
      <h4 class="part-title container">大家都在看</h4>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
Vue.filter('reverse', function (value) {
  return value.split('').reverse().join('')
})
export default {
  data () {
    return {
      actor: [
        {
          name: '赵丽颖',
          img: 'http://r1.ykimg.com/051300005885C10967BC3C1EE30BE373'
        },
        {
          name: '林更新',
          img: 'http://r1.ykimg.com/05130000588874D567BC3C390B04B8E2'
        },
        {
          name: '窦骁',
          img: 'http://r1.ykimg.com/0513000058A50FEDADBAC3034104B604'
        },
        {
          name: '李沁',
          img: 'http://r1.ykimg.com/051300005887134067BC3C434802D3F5'
        },
        {
          name: '王彦霖',
          img: 'http://r1.ykimg.com/051300005886FD9A67BC3C202D039D01'
        }
      ]
    }
  }
}
</script>

<style scoped>
/*头部开始*/
  .detail-header {
    height: 44px;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9999;
    border-bottom: 1px solid #e6e6e6;
    background-color: #fff;
  }
  .header-menu-icon {
    float: left;
    background: url(http://m.youku.com/video/images/youkunav.png?ver=1499329066389) no-repeat 0px -20px;
    width: 40px;
    height: 30px;
    background-size: 375px 200px; 
  }
  .header-logo-icon {
    position: relative;
    width: 40%;
    top: -5px;
    margin-left: 30%;
    height: 44px;
    float: left;
    background-color: red;
   /* margin-left: 110px;*/
    background: url(http://m.youku.com/video/images/youkunav.png?ver=1499329066389) no-repeat 0px 20px; 
    background-size: 375px 200px;  
  }
  .header-box-right {
    float: right;
  }
  .header-box-right {
    left: -30px;
  }
  .header-box-right span {
  /*  display: block;*/
  }
  .header-search-icon {
    width: 44px;
    height: 44px;
    background: url(http://m.youku.com/video/images/youkunav.png?ver=1499329066389) no-repeat 0px 60px;
  }
 /* .header-user-icon {
    width: 44px;
    height: 44px;
    background: url(http://m.youku.com/video/images/youkunav.png?ver=1499329066389) no-repeat 0px 60px;
  }*/
/*头部结束*/

/*轮播图*/
  .open-window {
  height: 66px;
  background-color: #fff; 
  width: 100%;
  top: 45px;
  position: relative;
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
/*轮播图结束*/

/*播放*/
  .detail-video {
    position: relative;
    width: 100%;
    height: 250px;
    background-color: rgba(0,0,0,.8);
    top: 30px;
  }
  .open-videoapp {
    position: relative;
    height: 100px;
    border-bottom: 1px solid #e6e6e6;
  }
  .open-box {
    margin-top: 45px;
    border: 1px solid #2692ff;
    height: 45px;
    line-height: 45px;
    border-radius: 30px;
    text-align: center;
    font-size: 16px;
    color: #2692ff;
  }
  .open-videoapp a {
    text-decoration: none;
  }
  .btn-full-version a {
    display: block;
    position: absolute;
    top: 30px;
    right: 10px;
    font-size: 12px;
    color: #fff;
    background: #509dea;
    padding: 5px 10px;
    border-radius: 15px;
    z-index: 2;
  }
  .error-tip {
    position: relative;
    display: block;
    color: #a8a8a8;
    margin: 0 auto;
    top:100px;
    text-align: center;
    line-height: 34px;
    font-size: 14px;
    z-index: 3;
  }
  .video-play-icon {
    background: url(http://static.youku.com/h5/player/res/img/new_player_icons.png) no-repeat -200px 0px;
    z-index: 1;
    height: 70px;
    width: 75px;
    margin:  0 auto;
    padding-left: 10px;
    top: 50px;  
    position: relative;  
    background-size: 375px 100px;
   /* filter: grayscale(100%); *//*滤镜*/
    /*-webkit-filter: grayscale(100%);*/
  }
/*播放结束*/

/*视频介绍*/
  .introduce-video {
    height: 150px;
  /*    background-color: red;*/
    width: 100%;
    position: relative;
    border-bottom: 8px solid #e6e6e6;
  }
  .video-title{
    font-size: 18px;
    color: #333;
    top: 20px;
    position: absolute;
  }
  .glyphicon-chevron-down {
    margin-left: 20px;
    color: #999;
    font-size: 14px;
    top: 20px;
    position: absolute;
  }
  .playback {
    top: 50px;
    position: absolute;
  }
  .num {
    color:#fa533d;
    font-size: 18px; 
  }
  .num-last {
    color:#fa533d;
    font-size: 12px; 
  }
  .fen {
    color:#fa533d;
    font-size: 14px;
  }
  .play-num {
    margin-left: 10px;
    font-size: 14px;
    color: #999;
  }
  .left {
    float: left;
  }
  .like-new-icon {
    width: 95%;
    top: 80px;
    position: absolute;
    padding: 10px 5px 5px;
  }
  .like-icon {
    display: block;
    width: 80px;
    height: 40px;
    background: url(http://m.youku.com/video/images/gather.png?ver=1499329066389) no-repeat 0 -20px;
    background-size: 54px 1400px;
  }
  .like-num {
    margin-left: 25px;
    position: relative;
    top: 20px;
    font-size: 12px;
  }
  a span.like-num, a span.type {
    color: #555;
  }
  .right {
    float: right;
  }
  .arrow {
    display: inline-block;
    width: 45px;
    height: 40px;
    margin-right: 10px;
    background: url(http://m.youku.com/video/images/gather.png?ver=1499329066389) no-repeat 0 -1270px;
    background-size: 54px 1400px;
  }
  .star {
    display: inline-block;
    width: 40px;
    height: 40px;
    margin-right: 10px;
    background: url(http://m.youku.com/video/images/gather.png?ver=1499329066389) no-repeat 0 -55px;
    background-size: 54px 1400px;
  }
  .type {
    border: 1px solid #555;
    border-radius: 5px;
    text-align: center;
    padding: 4px;
    font-size: 12px;
    position: relative;
    margin-right: 10px;
    top: -10px;
    left: -10px;
  }
  .forwarding {
    display: inline-block;
    width: 40px;
    height: 40px;
    background: url(http://m.youku.com/video/images/gather.png?ver=1499329066389) no-repeat 0 -1310px;
    background-size: 54px 1400px;
  }
/*视频介绍结束*/

/*选集*/
  .choose-part {
    border-bottom: 8px solid #e6e6e6;
  }
  .part-title {
    position: relative;
    top:10px;
  }
  .part-num {
    position: relative;
    top:15px;
    color: #b5b7b9;
  }
  .clearfix {
    clear: both;
    zoom: 1;
  }
  .list-box {
   top:10px;
   position: relative; 
   width: 100%;
   white-space:nowrap;
   overflow-y: hidden; 
   overflow-x: scroll;
   margin-bottom: 6px;
  }
  .list-box::-webkit-scrollbar {
    display:none;
  }
  .book {
    background: url(http://m.youku.com/video/images/gather.png?ver=1499329066389) no-repeat 0px -990px;
    background-size: 54px 1400px;
    position: absolute;
    top: -6px;
    right: -10px;
    width: 25px;
    height: 25px;
    border-radius: 50%;
  }
  .slide-list ul {   
    width: 2888px;
    height: 65px;
    line-height: 65px;    
  }
  .slide-list ul li a {
     color: #333; 
  }
  .slide-list ul li {
    list-style: none;
    display: inline-block;
    width: 54px;
    height: 54px;
    border-radius: 50%;
    border: 1px solid #ebebeb;
    line-height: 52px;
    text-align: center;
    margin-right: 8px;
    font-size: 14px;
    position: relative;
  }
/*选集结束*/

/*明星列表*/
  .slide-list2 ul li {
    display: inline-block;
    overflow: hidden;
    width: 82px;
    height: 94px;
    text-align: center;
  }
  .slide-list2 ul li a {
    display: inline-block;
    height: 94px;
    width: 54px;
    color: #333;
    text-decoration: none;
  }
  .slide-list2 ul li img {
    width: 54px;
    height: 54px;
   /* border: 1px solid #ebebeb;*/
    border-radius: 50%;
    overflow: hidden;
  }
  .slide-list2 ul li p{
    padding-top: 10px;
  }
  .actor {
    border-bottom: 8px solid #e6e6e6;
  }
/*明星列表结束*/

   ul li a.heighlight {
    color: #2692ff;
  }

/*视频列表*/
.video-lists img {
    height: 206px;
    margin-top: 20px;
}
.imgs {
    padding-left: 10px;
    padding-right: 0;
    width: 100%;
}

</style>
