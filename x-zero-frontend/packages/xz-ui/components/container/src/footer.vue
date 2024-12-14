<template>
  <footer :class="ns.b()" :style="style">
     <slot />
  </footer>
</template>
<script lang="ts" setup>
import { useNamespace } from '@xz-ui/hooks';
import { CSSProperties, computed } from 'vue';


defineOptions({
  name: 'XZFooter',
})
const props = defineProps({
  /**
   * @description height of the footer
   */
   height: {
    type: String,
    default: null,
   }
})

const ns = useNamespace('footer')
const style = computed(
  () => (
    props.height
      ? ns.cssVarBlock({height: props.height})
      : {}
  ) as CSSProperties
)
</script>
