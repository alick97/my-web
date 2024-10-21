<script lang="ts" setup>
import { RouterLink } from 'vue-router';

</script>
<template>
  <div class="router-content">
    <h1 class="text-4xl font-bold underline">X-ZERO</h1>
    <div >
      <RouterLink to="/login">Sign in</RouterLink>
    </div>
    <div>
      <RouterLink to="/component-test">/component-test</RouterLink>
    </div>
  </div>
</template>
<style lang="scss">
.router-content {
  text-align: center
}
</style>