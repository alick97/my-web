<template>
  <div>
    <div class="example">
      <p class="example-title">common layout</p>
      <div class="example-body">
        <x-z-container class="container">
          <x-z-container>
            <x-z-main>Main</x-z-main>
          </x-z-container>
        </x-z-container>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
</script>
<style lang="scss" scoped>
.container {
  background-color: var(--xz-color-primary-light-7);
  .xz-aside {
    background-color: var(--xz-color-primary-light-8);
  }
  .xz-main {
    background-color: var(--xz-color-primary-light-9);
  }
}
</style>