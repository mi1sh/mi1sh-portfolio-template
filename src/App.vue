<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { useRouter } from 'vue-router';
import NavBar from './components/NavBar.vue'
import HomePage from '@/components/pages/HomePage.vue'
import AboutPage from '@/components/pages/AboutPage.vue'
import ProjectsPage from '@/components/pages/ProjectsPage.vue'
import LearningPage from '@/components/pages/LearningPage.vue'

const router = useRouter();

const isLoaded = ref(false)
const isLargeScreen = ref(false)
let unsubscribe: any;

const handleResize = () => {
  isLargeScreen.value = window.innerWidth > 768
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
  handleResize()

  unsubscribe = router.afterEach((to, from) => {
    if (to.name === 'Home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });

  setTimeout(() => {
    isLoaded.value = true
  }, 500)
})

onUnmounted(() => {
  if (unsubscribe) {
    unsubscribe();
  }
  window.removeEventListener('resize', handleResize)
})
</script>

<template>
  <header>
    <HomePage :isLargeScreen="isLargeScreen"/>
    <hr>
    <AboutPage />
    <hr>
    <ProjectsPage />
    <hr>
    <LearningPage />
  </header>

  <main>
    <div class="gradient-bar"></div>
    <div class="navbar-wrapper slide-right" v-show="isLoaded" :class="{ 'navbar-visible': isLargeScreen }">
      <NavBar v-show="isLargeScreen"/>
    </div>
  </main>
</template>

<style>
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

  .navbar-wrapper.navbar-visible{
    width: 10vw;
    height: 100vh;
    float: right;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
</style>
