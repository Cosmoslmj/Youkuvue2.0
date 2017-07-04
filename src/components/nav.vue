<template>
    <div class="container">
      <div class="nav">
        <div class="nav-list clearfix">
          <ul>
            <li>
              <router-link v-for="item in navlist" :key="item.path" :to="{ path: item.path }">{{ item.nav }}          
              </router-link>
            </li>  
          </ul>
        </div>
      </div> 
    </div>
</template>

<script>
export default {
  data () {
    return {
      navlist: [
        {
          nav: '首页',
          path: '/content'
        },
        {
          nav: '会员',
          path: '/member'
        },
        {
          nav: '直播',
          path: '/'
        },
        {
          nav: '剧情',
          path: '/'
        },
        {
          nav: '电影',
          path: '/'
        },
        {
          nav: '综艺',
          path: '/'
        },
        {
          nav: '音乐',
          path: '/'
        },
        {
          nav: '动漫',
          path: '/'
        },
        {
          nav: '少儿',
          path: '/'
        },
        {
          nav: '资讯',
          path: '/'
        },
        {
          nav: '娱乐',
          path: '/'
        },
        {
          nav: '文化',
          path: '/'
        },
        {
          nav: '纪实',
          path: '/'
        },
        {
          nav: '财经',
          path: '/'
        },
        {
          nav: '体育',
          path: '/'
        },
        {
          nav: '汽车',
          path: '/'
        },
        {
          nav: '科技',
          path: '/'
        },
        {
          nav: '游戏',
          path: '/'
        },
        {
          nav: '搞笑',
          path: '/'
        },
        {
          nav: '旅游',
          path: '/'
        },
        {
          nav: '时尚',
          path: '/'
        },
        {
          nav: '亲子',
          path: '/'
        },
        {
          nav: '教育',
          path: '/'
        },
        {
          nav: '财经',
          path: '/'
        }
      ]
    }
  }
}
</script>

<style scoped>
</style>
