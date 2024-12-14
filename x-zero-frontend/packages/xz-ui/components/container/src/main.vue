<template>
  <main :class="ns.b()">
    <slot />
  </main>
</template>
<script lang="ts" setup>
import { useNamespace } from '@xz-ui/hooks';

defineOptions({
  name: 'XZMain',
})

const ns = useNamespace('main')
</script>
