<template>
  <header :class="ns.b()" :style="style">
    <slot />
  </header>
</template>
<script lang="ts" setup>
import { useNamespace } from '@xz-ui/hooks';
import { computed, CSSProperties } from 'vue';

defineOptions({
  name: 'XZHeader',
})

const props = defineProps({
  /**
   * @description height of header
   */
   height: {
    type: String,
    default: null,
   }
})


const ns = useNamespace('header');
const style = computed(() => {
  return props.height
    ? (ns.cssVarBlock({height: props.height}) as CSSProperties)
    : {}
})

</script>
