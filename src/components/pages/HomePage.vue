<template>
  <section :key="$route.path" id="home" class="wrapper" :class="{'fade-in': isMobile, 'slide-left': !isMobile}">
    <img alt="mi1sh logo" class="logo" src="../../assets/logo.jpg" />
    <div>
      <IntroCard intro="React, Next and Vue confident user" name="mi1sh" msg="Web developer" />
    </div>
  </section>
</template>

<script setup lang="ts">
import IntroCard from '@/components/IntroCard.vue'
import { onMounted, ref, watchEffect } from 'vue'
import { inject } from 'vue'
import { useRoute } from 'vue-router'
import PageWrapper from '@/components/PageWrapper.vue'

const activeSection = inject('activeSection')
const animate = inject('animate')

const route = useRoute()
const isLoaded = ref(false)

defineProps<{
  isLargeScreen: boolean,
}>()
const isHomePage = ref(false)

onMounted(() => {
  isHomePage.value = route.path === '/'
  const element = document.getElementById('home')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
  setTimeout(() => {
    isLoaded.value = true
  }, 500)
})

const shouldAnimate = ref(false)
watchEffect(() => {
  if (isHomePage.value && !shouldAnimate.value) {
    shouldAnimate.value = true
  }
})
</script>

<style scoped>
.logo {
  width: 15em;
  border-radius: 100%;
  display: block;
  margin: 3em auto;
}

.wrapper {
  padding-top: 10vh;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
}

@media (min-width: 740px) {
  .wrapper {
    padding-left: 10em;
    padding-top: 0;
    padding-bottom: 0;
    flex-direction: row;
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