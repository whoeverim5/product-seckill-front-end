<template>
  <div class="login-container">
    <h2>用户登录</h2>
    <div class="login-box">
      <input type="text" required v-model="username">
      <label>用户名</label>
    </div>
    <div class="login-box">
      <input type="password" required v-model="password">
      <label>密码</label>
    </div>
    <a href="javascript:void(0)" @click.prevent="login">
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

export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    login() {
      console.log('login...');
    }
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