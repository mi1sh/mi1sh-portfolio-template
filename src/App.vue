<template>
    <header>
      <HomePage :isLargeScreen="isLargeScreen" />
      <hr />
      <AboutPage />
      <hr />
      <ProjectsPage />
      <hr />
      <LearningPage />
    </header>

    <main>
      <div class="gradient-bar"></div>
      <h4 class="powered-by" style="color: #af9259">powered by <IconVue /></h4>
      <div class="navbar-wrapper slide-right" :class="{ 'navbar-visible': isLargeScreen }">
        <NavBar v-show="isLargeScreen" />
      </div>
    </main>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import NavBar from './components/NavBar.vue'
import HomePage from '@/components/pages/HomePage.vue'
import AboutPage from '@/components/pages/AboutPage.vue'
import ProjectsPage from '@/components/pages/ProjectsPage.vue'
import LearningPage from '@/components/pages/LearningPage.vue'
import IconVue from '@/components/icons/IconVue.vue'
import router from '@/router'

const isLargeScreen = ref(false)

const handleResize = () => {
  isLargeScreen.value = window.innerWidth > 768
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
  handleResize()

  window.onload = () => {
    setTimeout(() => {
      if (router.currentRoute.value.name === 'Home') {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }, 100)
  }
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<style scoped>
.powered-by {
  margin-bottom: 4vh;
  text-align: center;
}

.navbar-wrapper {
  display: none;
}

.gradient-bar {
  position: fixed;
  top: 0;
  height: 5px;
  width: 100%;
  left: 0;
  background-image: linear-gradient(to right, #af9358, #e5c783, #91794a, #af9358, #e5c783, #91794a, #af9358, #e5c783, #91794a, #af9358, #e5c783, #91794a);
  background-size: 300% 300%;
  animation: GradientAnimation 20s linear infinite;
}

@media (min-width: 740px) {
  main {
    float: right;
    position: fixed;
    right: 0;
  }

  .powered-by {
    margin: 1em;
    position: absolute;
  }

  .navbar-wrapper.navbar-visible {
    width: 10vw;
    height: 100vh;
    float: right;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
</style>
