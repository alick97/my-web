<template>
  <div class="common-layout">
    <el-container>
      <el-header>element-plus component test</el-header>
      <el-container class="main">
        <el-aside width="200px">
          <el-scrollbar height="400px">
            <p v-for="item in componentExampleList"
             :key="item.key" :class="{ 'scrollbar-item': true, 'active': activeComponentKey === item.key}"
             @click="handleSelectComponentList(item)">
              {{ item.label }}
            </p>
          </el-scrollbar>
        </el-aside>
        <el-main>
          <div>
            <div v-if="currentComponentPage === null">Main</div>
            <div v-else><component :is="currentComponentPage"></component></div>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { ref, defineComponent, markRaw } from 'vue';
import LayoutExample from './Layout.vue';
import ContainerExample from './Container.vue';

interface ComponentPageOption {
  key: number,
  label: string,
  component: null | ReturnType<typeof defineComponent>
}

const componentExampleList: ComponentPageOption[] = [
  {key: 0, label: "Main", component: null},
  {key: 1, label: "Layout布局", component: markRaw(LayoutExample)},
  {key: 2, label: "Container布局容器", component: markRaw(ContainerExample)}
]
const activeComponentKey = ref(0)
const currentComponentPage = ref<null|ReturnType<typeof defineComponent>>(null)
const handleSelectComponentList = (item: ComponentPageOption) => {
  activeComponentKey.value = item.key
  currentComponentPage.value = item.component
  console.debug("set current component page to ", item.component)
}
</script>

<style lang="scss">
.common-layout {
  text-align: center;
  height: 100vh;
}

.main {
  align-items: center;
  height: 90vh;
}
  
.scrollbar-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin: 10px;
  text-align: center;
  &:hover, &.active {
    background: var(--el-color-primary-light-9);
    color: var(--el-color-primary);
  }
}
              
.example-body {
  border: 1px solid var(--el-border-color);
  border-radius: var(--el-border-radius-base);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  margin: 0.5rem;
}
.example-title {
  text-align: left;
  font-weight: 600;
  padding: 1.5rem 0;
  margin: 0.5rem;
}
</style>