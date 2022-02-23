<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/secure">Secure</router-link>
    <span> | </span>
    <a href="#" @click.prevent="authService.signIn()" v-if="!authService.isAuthenticated">Login</a>
    <a href="#" @click.prevent="authService.signOut()" v-else>Logout</a>
  </div>
  <router-view/>
</template>

<script lang='ts'>
import authService from '@/services/authService'
import { defineComponent } from 'vue';

export default defineComponent({
  data: () => ({
    authService: authService
  })
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>