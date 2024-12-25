<template>
  <div>
    <div class="example">
      <p class="example-title">basic usage</p>
      <div class="example-body">
        <el-input v-model="input1" style="width: 240px" placeholder="Please input" />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const input1 = ref('')

</script>
