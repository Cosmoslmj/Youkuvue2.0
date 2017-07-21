<template>
  <div>
    <div class="dialog-wrap">
      <div class="dialog-cover" v-if="isShow" @click="closeMyself"></div>      
      <transition name="drop">
        <div class="dialog-content" v-if="isShow">
          <slot>empty</slot>
        </div>
      </transition>       
    </div>    
  </div>
</template>

<script>
export default {
  props: {
    isShow: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      isShowCountryDialog: true
    }
  },
  methods: {
    closeMyself () {
      alert('还是取消不了呀、。。。')
    }
  }
}

</script>

<style scoped>
.drop-enter-active {
  transition: all .5s ease;
}
.drop-leave-active {
  transition: all .3s ease;
}
.drop-enter {
  transform: translateY(-500px);
}
.drop-leave-active {
  transform: translateY(-500px);
}

.dialog-wrap {
/*  position: fixed;*/
  width: 100%;
  height: 100%;
}
.dialog-cover {
  background: #000;
  opacity: .3;
  position: fixed;
  z-index: 5;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.dialog-content {
  position: fixed;
  overflow: auto;
  background: #fff;
  z-index: 10;
  bottom: 0;
  width: 100%;
  height: 330px;
}
</style>
