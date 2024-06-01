<template>
  <div class="book-item">
    <IconBook style="min-width: 30px"/>
    <span>"{{ title }}" <span style="font-size: 70%">( {{ author }} )</span></span></div>
</template>

<script setup lang="ts">
import IconBook from '@/components/icons/IconBook.vue'

defineProps({
  title: String,
  author: String
})
</script>


<style scoped>
.book-item {
  max-width: 85vw;
  margin: 0.5em auto;
  align-items: center;
  display: flex;
  gap: 0.2em;
}

@media (min-width: 740px) {
  .book-item {
    font-size: 1.2em;
    max-width: 50vw;
    margin: 0.5em auto;
    align-items: center;
    display: flex;
    gap: 0.2em;
  }
}
</style>