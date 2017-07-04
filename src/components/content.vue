<template>
  <div class="container clearfix content">
    <div class="row">
      <div class="col-xs-12 video-large">
        <iframe height="244" src="https://www.youtube.com/embed/F9Bo89m2f6g" frameborder="0" allowfullscreen></iframe>
      </div>
    </div>
    <div class="video-small">
      <div class="row">
        <div class="col-xs-6" v-for="item in content">
          <div class="small-left">
            <div class="video-box">
              <video width="100%" height="150px">
              <source :src="item.src" type="video/mp4">
              </video>
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
          src: 'http://v.youku.com/v_show/  id_XMjg2MDEzOTkzMg==.html?spm=a2h1n.8251846.0.0',
          dynamic: '更新至19集',
          dtitle: '<军师联盟>仲达恳求曹丕llddvffff',
          watch: '13.7亿',
          comment: '5.6亿'
        },
        {
          src: 'http://v.youku.com/v_show/  id_XMjg2MDEzOTkzMg==.html?spm=a2h1n.8251846.0.0',
          dynamic: '更新至19集',
          dtitle: '<军师联盟>仲达恳求曹丕llddvffff',
          watch: '13.7亿',
          comment: '5.6亿'
        },
        {
          src: 'http://v.youku.com/v_show/  id_XMjg2MDEzOTkzMg==.html?spm=a2h1n.8251846.0.0',
          dynamic: '更新至19集',
          dtitle: '<军师联盟>仲达恳求曹丕llddvffff',
          watch: '13.7亿',
          comment: '5.6亿'
        },
        {
          src: 'http://v.youku.com/v_show/  id_XMjg2MDEzOTkzMg==.html?spm=a2h1n.8251846.0.0',
          dynamic: '更新至19集',
          dtitle: '<军师联盟>仲达恳求曹丕llddvffff',
          watch: '13.7亿',
          comment: '5.6亿'
        },
        {
          src: 'http://v.youku.com/v_show/  id_XMjg2MDEzOTkzMg==.html?spm=a2h1n.8251846.0.0',
          dynamic: '更新至19集',
          dtitle: '<军师联盟>仲达恳求曹丕llddvffff',
          watch: '13.7亿',
          comment: '5.6亿'
        },
        {
          src: 'http://v.youku.com/v_show/  id_XMjg2MDEzOTkzMg==.html?spm=a2h1n.8251846.0.0',
          dynamic: '更新至19集',
          dtitle: '<军师联盟>仲达恳求曹丕llddvffff',
          watch: '13.7亿',
          comment: '5.6亿'
        },
        {
          src: 'http://v.youku.com/v_show/  id_XMjg2MDEzOTkzMg==.html?spm=a2h1n.8251846.0.0',
          dynamic: '更新至19集',
          dtitle: '<军师联盟>仲达恳求曹丕llddvffff',
          watch: '13.7亿',
          comment: '5.6亿'
        },
        {
          src: 'http://v.youku.com/v_show/  id_XMjg2MDEzOTkzMg==.html?spm=a2h1n.8251846.0.0',
          dynamic: '更新至19集',
          dtitle: '<军师联盟>仲达恳求曹丕llddvffff',
          watch: '13.7亿',
          comment: '5.6亿'
        },
        {
          src: 'http://v.youku.com/v_show/  id_XMjg2MDEzOTkzMg==.html?spm=a2h1n.8251846.0.0',
          dynamic: '更新至19集',
          dtitle: '<军师联盟>仲达恳求曹丕llddvffff',
          watch: '13.7亿',
          comment: '5.6亿'
        },
        {
          src: 'http://v.youku.com/v_show/  id_XMjg2MDEzOTkzMg==.html?spm=a2h1n.8251846.0.0',
          dynamic: '更新至19集',
          dtitle: '<军师联盟>仲达恳求曹丕llddvffff',
          watch: '13.7亿',
          comment: '5.6亿'
        }
      ]
    }
  }
}
</script>
