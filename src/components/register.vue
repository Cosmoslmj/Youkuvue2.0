<template>
    <div>
        <header>
          <span class="glyphicon glyphicon-chevron-left" @click="gotopage"></span>
          <span>注册</span>
        </header>
        <div class="container">
            <form class="login-form">
                  <ul>
                      <li class="country-choose-box">
                        <div class="input-box">
                          <label>
                            <span class="country-name">中国大陆</span>
                            <span class="fr" @click="showCountry">+86</span>
                          </label>
                        </div>
                      </li>
                      <li class="tel-num-box">
                        <div class="input-box">
                          <label>
                            <input type="tel" name="" placeholder="手机号码" maxlength="11">
                          </label>
                        </div>
                      </li>
                      <li class="password-box">
                        <div class="input-box">
                          <label>
                            <input type="" name="" placeholder="验证码">
                            <span class="password">获取动态密码</span>
                          </label>
                        </div>
                      </li>
                      <li class="password-box">
                        <div class="input-box">
                          <label>
                            <input type="" name="" placeholder="密码(6-16位字母、数字和符号)">
                          </label>
                        </div>
                      </li>
                      <li class="login-box">
                        <div class="login-input-box">
                          <a href=""><span class="login-btn">完成注册</span></a>
                        </div>
                      </li>
                  </ul>
            </form>
            <div class="remind-new">
                <span class="no-count">已有账号？
                    <span @click="gotologin">
                      <a href="">立即登录</a>
                    </span>
                </span>
            </div>          
        </div>
        <footer class="reg-footer">
            <div class="container remind-new">
                <span>注册即同意《用户协议》和《版权声明》</span>
            </div>
        </footer>
        <my-dialog :is-show="isShowCountryDialog">
          <country-tel></country-tel>
        </my-dialog>
    </div>
</template>

<script>
import Dialog from './dialog'
import CountryTel from './country'
export default {
  components: {
    MyDialog: Dialog,
    CountryTel
  },
  data () {
    return {
      isShowCountryDialog: false
    }
  },
  methods: {
    gotopage () {
      this.$router.push({path: '/login'})
    },
    gotologin () {
      this.$router.push({path: '/login'})
    },
    showCountry () {
      this.isShowCountryDialog = true
    }
  }
}
</script>

<style>
    .reg-footer {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 50px;
      color: #666;
    }
</style>
