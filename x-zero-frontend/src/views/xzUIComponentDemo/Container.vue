<template>
  <div>
    <div class="example">
      <p class="example-title">common layout</p>
      <div class="example-body">
        <x-z-container class="container">
        </x-z-container>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
</script>
<style lang="scss">
.container {
  background-color: var(--el-color-primary-light-7);
  .el-aside {
    background-color: var(--el-color-primary-light-8);
  }
  .el-main {
    background-color: var(--el-color-primary-light-9);
  }
}
</style>