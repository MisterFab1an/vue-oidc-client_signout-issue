<template>
  <div class="home">
    <img alt="Vue logo" src="@/assets/logo.png">
  </div>
  <div v-if="!authService.isAuthenticated">User is not authenticated</div>
  <div v-if="authService.isAuthenticated">
    User is authenticated
    <ul class="claims">
      <li v-for="c in claims" :key="c.key">
        <strong>{{ c.key }}</strong
        >: {{ c.value }}
      </li>
    </ul>
  </div>
</template>

<script lang='ts'>
import authService from '@/services/authService'
import { defineComponent } from 'vue';

export default defineComponent({
  data: () => ({
    authService: authService,
  }),
  computed: {
    user() {
      return { ...this.authService.userProfile, accessToken: this.authService.accessToken}
    },
    claims() {
      if (this.user) {
        return Object.keys(this.user).map(key => ({
          key,
          value: (this.user as any)[key]
        }))
      }
      return []
    }
  }
})
</script>

<style>
.claims {
  list-style: none;
  text-align: left;
}
</style>