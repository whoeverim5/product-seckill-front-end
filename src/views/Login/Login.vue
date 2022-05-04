<template>
  <div class="login-container">
    <div class="login-box">
      <input type="text" required v-model="username">
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
import {msg} from '@/utils/message';

export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    async login() {
      if (this.username && this.password) {
        const {data: res} = await login(this.username, this.password);
        if (res.status === 200) {
          msg.success('登录成功');
        } else {
          msg.error('登录失败');
        }
      } else {
        msg.warning('用户名或密码不能为空');
        this.username = '';
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