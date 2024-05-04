<script setup lang="ts">
import IntroCard from '@/components/IntroCard.vue'
import { onMounted, ref } from 'vue'

defineProps<{
  isLargeScreen: boolean,
}>()

const isLoaded = ref(false)

onMounted(() => {
  const element = document.getElementById('home');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
  setTimeout(() => {
    isLoaded.value = true
  }, 500)
})
</script>

<template>
  <section class="wrapper">
    <img alt="mi1sh logo" v-show="isLoaded" :class="{'logo fade-in': !isLargeScreen, 'logo slide-left': isLargeScreen}" src="../../assets/logo.jpg" />
    <div :class="{'fade-in': !isLargeScreen, 'slide-left': isLargeScreen}" v-show="isLoaded">
      <IntroCard intro="React, Next and Vue confident user" name="mi1sh" msg="Web developer" />
    </div>
  </section>
</template>

<style scoped>
.logo {
  width: 15em;
  border-radius: 100%;
  display: block;
  margin: 3em auto;
}

.wrapper {
  padding-bottom: 5em;
}

@media (min-width: 740px) {
  .wrapper {
    padding-left: 10em;
    padding-bottom: 0;
  }

  .logo {
    width: 23em;
    border-radius: 100%;
    display: block;
    margin: 0;
  }

  .logo {
    margin: 0 2rem 0 0;
  }
}
</style>