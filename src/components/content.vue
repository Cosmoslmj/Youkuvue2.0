<template>
  <div class="container clearfix content">
    <div class="row">
      <div class="col-xs-12 video-large" @click="gotopage">
        <img src="http://r1.ykimg.com/05100000596449CDADC0B0ADA702BB7A">
        <div class="video-dynamic">
          <span class="video-num">更新完成</span>                
        </div>
      </div>
    </div>
    <div class="video-small">
      <div class="row">
        <div class="col-xs-6" v-for="item in content">
          <div class="small-left" @click="gotopage">
            <div class="video-box">
              <div class="small-icon">
                <!-- <img src="http://static.youku.com/index/img/mobile/yk.png"> -->
              </div>
              <img :src="item.src" width="100%" height="120px">
              <div class="video-dynamic">
              <span class="video-num">{{ item.dynamic }}</span>                
              </div>             
            </div>
            <div class="detial">
              <p class="detial-title"><a href="" title="<军师联盟>仲达恳求曹丕llddvffff">{{ item.dtitle }}</a></p>
              <span class="glyphicon glyphicon-expand watch">{{ item.watch }}</span>
              <span class="glyphicon glyphicon-comment comment">{{ item.comment }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <p class="title-video">
      <a href="">电视剧</a>
    </p>
    <div class="video-small">
      <div class="row">
        <div class="col-xs-6" v-for="item in content">
          <div class="small-left">
            <div class="video-box">
              <div class="small-icon">
                <!-- <img src="http://static.youku.com/index/img/mobile/yk.png"> -->
              </div>
              <img :src="item.src" width="100%" height="120px">
              <div class="video-dynamic">
              <span class="video-num">{{ item.dynamic }}</span>                
              </div>             
            </div>
            <div class="detial">
              <p class="detial-title"><a href="" title="<军师联盟>仲达恳求曹丕llddvffff">{{ item.dtitle }}</a></p>
              <span class="glyphicon glyphicon-expand watch">{{ item.watch }}</span>
              <span class="glyphicon glyphicon-comment comment">{{ item.comment }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <p class="title-video">
      <a href="">放剧场</a>
    </p>
    <div class="video-small">
      <div class="row">
        <div class="col-xs-6" v-for="item in content">
          <div class="small-left">
            <div class="video-box">
              <div class="small-icon">
                <!-- <img src="http://static.youku.com/index/img/mobile/yk.png"> -->
              </div>
              <img :src="item.src" width="100%" height="120px">
              <div class="video-dynamic">
              <span class="video-num">{{ item.dynamic }}</span>                
              </div>             
            </div>
            <div class="detial">
              <p class="detial-title"><a href="" title="<军师联盟>仲达恳求曹丕llddvffff">{{ item.dtitle }}</a></p>
              <span class="glyphicon glyphicon-expand watch">{{ item.watch }}</span>
              <span class="glyphicon glyphicon-comment comment">{{ item.comment }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      content: [
        {
          src: 'http://r1.ykimg.com/05100000596399B78B3D05031704A99D',
          dynamic: '更新至19集',
          dtitle: '<军师联盟>仲达恳求曹丕llddvffff',
          watch: '13.7亿',
          comment: '5.6亿'
        },
        {
          src: 'http://r1.ykimg.com/0510000059643C8DAD9E0744310D310C',
          dynamic: '更新至19集',
          dtitle: '<军师联盟>仲达恳求曹丕llddvffff',
          watch: '13.7亿',
          comment: '5.6亿'
        },
        {
          src: 'http://r1.ykimg.com/0510000059647877ADC0AE13F802D0A6',
          dynamic: '更新至19集',
          dtitle: '<军师联盟>仲达恳求曹丕llddvffff',
          watch: '13.7亿',
          comment: '5.6亿'
        },
        {
          src: 'http://r1.ykimg.com/0515000059640909AD9E07442A0EDA02',
          dynamic: '更新至19集',
          dtitle: '<军师联盟>仲达恳求曹丕llddvffff',
          watch: '13.7亿',
          comment: '5.6亿'
        },
        {
          src: 'http://r1.ykimg.com/05150000596408CEADC0B0B2D101BAFF',
          dynamic: '更新至19集',
          dtitle: '<军师联盟>仲达恳求曹丕llddvffff',
          watch: '13.7亿',
          comment: '5.6亿'
        },
        {
          src: 'http://r1.ykimg.com/0515000059644D89ADC0AE0E7901F021',
          dynamic: '更新至19集',
          dtitle: '<军师联盟>仲达恳求曹丕llddvffff',
          watch: '13.7亿',
          comment: '5.6亿'
        },
        {
          src: 'http://r1.ykimg.com/0515000059644C7DAD9E07DB2B073D99',
          dynamic: '更新至19集',
          dtitle: '<军师联盟>仲达恳求曹丕llddvffff',
          watch: '13.7亿',
          comment: '5.6亿'
        },
        {
          src: 'http://r1.ykimg.com/0510000058F4747CAD9E0748760C211C?2017711162',
          dynamic: '更新至19集',
          dtitle: '<军师联盟>仲达恳求曹丕llddvffff',
          watch: '13.7亿',
          comment: '5.6亿'
        },
        {
          src: 'http://r1.ykimg.com/051500005962F5AEADC0AE13F80AEF9F',
          dynamic: '更新至19集',
          dtitle: '<军师联盟>仲达恳求曹丕llddvffff',
          watch: '13.7亿',
          comment: '5.6亿'
        },
        {
          src: 'http://r1.ykimg.com/0510000059640964AD9E07E91C0505DA',
          dynamic: '更新至19集',
          dtitle: '<军师联盟>仲达恳求曹丕llddvffff',
          watch: '13.7亿',
          comment: '5.6亿'
        },
        {
          src: 'http://r1.ykimg.com/05150000596408CEADC0B0B2D101BAFF',
          dynamic: '更新至19集',
          dtitle: '<军师联盟>仲达恳求曹丕llddvffff',
          watch: '13.7亿',
          comment: '5.6亿'
        },
        {
          src: 'http://r1.ykimg.com/0515000059644D89ADC0AE0E7901F021',
          dynamic: '更新至19集',
          dtitle: '<军师联盟>仲达恳求曹丕llddvffff',
          watch: '13.7亿',
          comment: '5.6亿'
        },
        {
          src: 'http://r1.ykimg.com/0515000059644C7DAD9E07DB2B073D99',
          dynamic: '更新至19集',
          dtitle: '<军师联盟>仲达恳求曹丕llddvffff',
          watch: '13.7亿',
          comment: '5.6亿'
        },
        {
          src: 'http://r1.ykimg.com/0510000058F4747CAD9E0748760C211C?2017711162',
          dynamic: '更新至19集',
          dtitle: '<军师联盟>仲达恳求曹丕llddvffff',
          watch: '13.7亿',
          comment: '5.6亿'
        },
        {
          src: 'http://r1.ykimg.com/051500005962F5AEADC0AE13F80AEF9F',
          dynamic: '更新至19集',
          dtitle: '<军师联盟>仲达恳求曹丕llddvffff',
          watch: '13.7亿',
          comment: '5.6亿'
        },
        {
          src: 'http://r1.ykimg.com/0510000059640964AD9E07E91C0505DA',
          dynamic: '更新至19集',
          dtitle: '<军师联盟>仲达恳求曹丕llddvffff',
          watch: '13.7亿',
          comment: '5.6亿'
        },
        {
          src: 'http://r1.ykimg.com/0510000059647877ADC0AE13F802D0A6',
          dynamic: '更新至19集',
          dtitle: '<军师联盟>仲达恳求曹丕llddvffff',
          watch: '13.7亿',
          comment: '5.6亿'
        },
        {
          src: 'http://r1.ykimg.com/0515000059640909AD9E07442A0EDA02',
          dynamic: '更新至19集',
          dtitle: '<军师联盟>仲达恳求曹丕llddvffff',
          watch: '13.7亿',
          comment: '5.6亿'
        },
        {
          src: 'http://r1.ykimg.com/05150000596408CEADC0B0B2D101BAFF',
          dynamic: '更新至19集',
          dtitle: '<军师联盟>仲达恳求曹丕llddvffff',
          watch: '13.7亿',
          comment: '5.6亿'
        },
        {
          src: 'http://r1.ykimg.com/0515000059644D89ADC0AE0E7901F021',
          dynamic: '更新至19集',
          dtitle: '<军师联盟>仲达恳求曹丕llddvffff',
          watch: '13.7亿',
          comment: '5.6亿'
        },
        {
          src: 'http://r1.ykimg.com/0515000059644C7DAD9E07DB2B073D99',
          dynamic: '更新至19集',
          dtitle: '<军师联盟>仲达恳求曹丕llddvffff',
          watch: '13.7亿',
          comment: '5.6亿'
        },
        {
          src: 'http://r1.ykimg.com/05150000596408CEADC0B0B2D101BAFF',
          dynamic: '更新至19集',
          dtitle: '<军师联盟>仲达恳求曹丕llddvffff',
          watch: '13.7亿',
          comment: '5.6亿'
        }
      ]
    }
  },
  methods: {
    gotopage () {
      this.$router.push({path: '/content-detail'})
      console.log('4')
    }
  }
}
</script>
