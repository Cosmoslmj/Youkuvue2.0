<template>
  <div class="container">
    <div class="nav">
      <div class="nav-list clearfix">
        <ul>
          <li v-for="(item, index) in navlist" :key="item" @click="current(index)"class="{current:index === currentselect}">
            <router-link :to="{ path: item.path }"> {{ item.nav }}          
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
          path: '/member'
        },
        {
          nav: '会员',
          path: '/member'
        },
        {
          nav: '直播',
          path: '/member'
        },
        {
          nav: '剧情',
          path: '/member'
        },
        {
          nav: '电影',
          path: '/menber'
        },
        {
          nav: '综艺',
          path: '/menber'
        },
        {
          nav: '音乐',
          path: '/menber'
        },
        {
          nav: '动漫',
          path: '/menber'
        },
        {
          nav: '少儿',
          path: '/menber'
        },
        {
          nav: '资讯',
          path: '/menber'
        },
        {
          nav: '娱乐',
          path: '/menber'
        },
        {
          nav: '文化',
          path: '/menber'
        },
        {
          nav: '纪实',
          path: '/menber'
        },
        {
          nav: '财经',
          path: '/menber'
        },
        {
          nav: '体育',
          path: '/menber'
        },
        {
          nav: '汽车',
          path: '/menber'
        },
        {
          nav: '科技',
          path: '/menber'
        },
        {
          nav: '游戏',
          path: '/menber'
        },
        {
          nav: '搞笑',
          path: '/menber'
        },
        {
          nav: '旅游',
          path: '/menber'
        },
        {
          nav: '时尚',
          path: '/menber'
        },
        {
          nav: '亲子',
          path: '/menber'
        },
        {
          nav: '教育',
          path: '/menber'
        },
        {
          nav: '财经',
          path: '/menber'
        }
      ],
      currentselect: 0
    }
  },
  methods: {
    current (index) {
      this.currentselect = index
    }
  }
}
</script>

<style scoped>
  .isCurrent {
    color: #5599FF;
    text-decoration: none;
    border-bottom: 3px solid #5599FF;
  }
</style>
