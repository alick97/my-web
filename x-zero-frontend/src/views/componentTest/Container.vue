<template>
  <div>
    <div class="example">
      <p class="example-title">common layout</p>
      <div class="example-body">
        <el-container class="container">
          <el-header>Header</el-header>
          <el-container>
            <el-container>
              <el-aside width="200px">Aside</el-aside>
              <el-main>Main</el-main>
            </el-container>
            <el-footer>Footer</el-footer>
          </el-container>
        </el-container>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
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
