<template>
  <div :class="{'slide-left': animate}">
    <slot></slot>
  </div>
</template>


<script setup lang="ts">
const props = defineProps({
  animate: Boolean,
});
</script>


<style>
</style>