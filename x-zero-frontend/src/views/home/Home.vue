<script lang="ts" setup>
import { RouterLink } from 'vue-router';

</script>
<template>
  <x-z-container>
    <x-z-header class="flex justify-center">
      <h1 class="text-4xl font-bold underline">X-ZERO</h1>
    </x-z-header>
    <x-z-container>
      <x-z-main>
        <div class="text-center">
          <div >
            <RouterLink to="/login">Sign in</RouterLink>
          </div>
          <div class="flex flex-col">
            <RouterLink to="/component-test">* component-test</RouterLink>
            <RouterLink to="/xz-ui-component-demo">* xz-ui-component-demo</RouterLink>
          </div>
        </div>
      </x-z-main>
    </x-z-container>
    <x-z-footer> </x-z-footer>
  </x-z-container>
</template>
<style lang="scss" scoped>
</style>
