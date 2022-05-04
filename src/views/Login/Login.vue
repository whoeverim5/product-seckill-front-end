<template>
  <div class="login-container">
    <var-snackbar
        :show.sync="show"
        :type="type"
        :duration="1000"
    > {{ message }}
    </var-snackbar>
    <h2>用户登录</h2>
    <div class="login-box">
      <input type="text" required v-model="account">
      <label>用户名</label>
    </div>
    <div class="login-box">
      <input type="password" required v-model="password">
      <label>密码</label>
    </div>
    <a href="#" @click.prevent="login">
      登录
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </a>
  </div>
</template>

<script>
import '@/assets/css/login.less';
import {login} from '@/api/loginAPI/login';

export default {
  name: 'Login',
  data() {
    return {
      account: '',
      password: '',
      show: false,
      message: '',
      type: 'success',
    };
  },
  create() {
  },
  methods: {
    async login() {
      if (this.account && this.password) {
        const {data: res} = await login(this.account, this.password);
        console.log(res);
        if (res.status === 200) {
          const token = 'Bearer ' + res.data;
          localStorage.setItem('token', token);
          this.$router.push('/home');
        } else {
          this.show = !this.show;
          this.message = '用户名或密码错误';
          this.type = 'error';
        }
      } else {
        this.show = !this.show;
        this.message = '请输入用户名或密码';
        this.type = 'warning';
        this.account = '';
        this.password = '';
      }
    },
  },
};
</script>

<style lang="less" scoped>
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  padding: 40px;
  background-color: rgba(0, 0, 0, 0.2);
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.4);
}
</style>