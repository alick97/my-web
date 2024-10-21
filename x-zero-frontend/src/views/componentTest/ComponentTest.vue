<template>
  <div class="common-layout">
    <el-container>
      <el-header>Header</el-header>
      <el-container class="main">
        <el-aside width="200px">Aside</el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>
<style lang="scss">
.common-layout {
  text-align: center;
  height: 100vh;
}

.main {
  align-items: center;
  height: 90vh;
}
</style>