<template>
  <div>
    <div class="country-title">
      <span>国家地区</span>
    </div>
    <div class="normol-use">
      <ul>
        <li>常用</li>
        <li>中国大陆<span class="fr">+86</span></li>
        <li>中国台湾<span class="fr">+886</span></li>
        <li>中国香港<span class="fr">+852</span></li>
        <li>美国<span class="fr">+1</span></li>
        <li>日本<span class="fr">+81</span></li>
      </ul>
      <ul>
        <li>A</li>
        <li>澳大利亚<span class="fr">+61</span></li>
        <li>阿联酋<span class="fr">+971</span></li>
      </ul>
      <ul>
        <li>B</li>
        <li>巴基斯坦<span class="fr">+92</span></li>
      </ul>
      <ul>
        <li>D</li>
        <li>德国<span class="fr">+49</span></li>
      </ul>
      <ul>
        <li>F</li>
        <li>菲律宾<span class="fr">+63</span></li>
        <li>法国<span class="fr">+33</span></li>
      </ul>
      <ul>
        <li>H</li>
        <li>韩国<span class="fr">+82</span></li>
      </ul>
      <ul>
        <li>J</li>
        <li>加拿大<span class="fr">+1</span></li>
      </ul>
      <ul>
        <li>M</li>
        <li>美国<span class="fr">+1</span></li>
        <li>马来西亚<span class="fr">+60</span></li>
      </ul>
      <ul>
        <li>R</li>
        <li>日本<span class="fr">+81</span></li>
      </ul>
      <ul>
        <li>X</li>
        <li>新加坡<span class="fr">+65</span></li>
        <li>新西兰<span class="fr">+64</span></li>
      </ul>
      <ul>
        <li>Y</li>
        <li>英国<span class="fr">+44</span></li>
        <li>意大利<span class="fr">+39</span></li>
        <li>越南<span class="fr">+84</span></li>
      </ul>
      <ul class="last">
        <li>Z</li>
        <li>中国大陆<span class="fr">+86</span></li>
        <li>中国香港<span class="fr">+852</span></li>
        <li>中国澳门<span class="fr">+853</span></li>
        <li>中国台湾<span class="fr">+886</span></li>
      </ul>
    </div>
    <div class="cancel-box" @on-close="closeDialog('isShowCountryDialog')"><span>取消</span></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isShowCountryDialog: true
    }
  },
  methods: {
    closeDialog (attr) {
      this[attr] = false
    }
  }
}
</script>

<style scoped>
  .country-title {
    position: fixed;
    height: 48px;
    width: 100%;
    line-height: 48px;
    text-align: center;
    font-size: 18px;
    overflow-y: hidden;
    background-color: #fff;
    z-index: 100;
  }
  .country-title::-webkit-scrollbar {
    display:none;
  }
  .normol-use ul{
    top: 48px;
    position: relative;
    padding-bottom: 0;
    padding-top: 0;
    padding: 0;
  }
  .normol-use ul li {
    height: 34px;
    line-height: 34px;
    border-bottom: 1px solid #f1f1f1;
    color: #000;
    position: relative;
    padding-left: 0;
    padding: 2px 5%;
  }
  ul li:first-child {
    background: #f0f0f0;
    height: 20px;
    color: #9a9a9a;
    border-bottom: 0;
    line-height: 20px;
    width: 100%;
  }
  ul li:last-child {
    border-bottom: none;
  }
  .cancel-box {
    height: 48px;
    background-color: #fff;
    width: 100%;
    text-align: center;
    bottom: 0;
    line-height: 48px;
    color: #000;
    font-size: 18px;
    border-top: 1px solid #f1f1f1;
    position: fixed;
  }
  .last {
    margin-bottom: 48px;
  }
  .fr {
    right: 5%;
    top:-2px;
    color: #666;
    position: absolute;
  }
</style>
