<template>
  <div>
    <div class="example">
      <p class="example-title">common layout</p>
      <div class="example-body">
        <el-container class="container">
          <el-header>Header</el-header>
          <el-container>
            <el-aside width="200px">Aside</el-aside>
            <el-container>
              <el-main>Main</el-main>
              <el-footer>Footer</el-footer>
            </el-container>
          </el-container>
        </el-container>
      </div>
    </div>
  </div>
</template>
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