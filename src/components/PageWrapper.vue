<template>
  <div :class="{'slide-left': animate && isMobile}">
    <slot></slot>
  </div>
</template>


<script setup lang="ts">
const props = defineProps({
  animate: Boolean,
});

const isMobile = window.matchMedia('(min-width: 768px)').matches
</script>


<style>
</style>