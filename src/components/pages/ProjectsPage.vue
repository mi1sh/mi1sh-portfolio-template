<template>
  <section :key="$route.path" id="projects" class="wrapper slide-left">
    <div class="projects-wrapper">
      <h1 class="gold projects-title">Projects</h1>
      <div class="projects-cards">
        <ProjectCard title="Typespeed - test" :image="typeSpeedTestCover"
                     githubLink="https://github.com/mi1sh/typespeed-test" pageLink="https://typespeed-test.vercel.app/"
                     description="My simple application for practice in typing text"
                     :icons="[JavascriptIcon, ReactIcon]" />
        <ProjectCard title="Add - some - text" :image="addSomeTextCover"
                     githubLink="https://github.com/mi1sh/add-some-text" pageLink="https://add-some-text.vercel.app/"
                     description="A simple photo editor (or meme creator), made using next.js"
                     :icons="[TypescriptIcon, NextIcon]" />
        <ProjectCard title="Boykisser clicker" :image="boykisserClickerCover"
                     githubLink="https://github.com/mi1sh/boykisser-clicker"
                     pageLink="https://boykisser-clicker.vercel.app"
                     description="Clicker game with upgrades and leaderboard" :icons="[TypescriptIcon, ReactIcon]" />
        <ProjectCard title="Usual-UI" :image="usualUiCover"
                     githubLink="https://github.com/mi1sh/usual-ui"
                     description="My first UI-library with tailwindcss connect" :icons="[TypescriptIcon, ReactIcon]" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { nextTick } from 'vue'
import { useRoute } from 'vue-router'
import { onMounted, onUnmounted, ref, watch } from 'vue'

import typeSpeedTestCover from '../../assets/typespeed-test-cover.png'
import addSomeTextCover from '../../assets/add-some-text-cover.png'
import boykisserClickerCover from '../../assets/boykisser-clicker-cover.png'
import usualUiCover from '../../assets/usual-ui-cover.png'

import ProjectCard from '@/components/ProjectCard.vue'
import TypescriptIcon from '@/components/icons/TypescriptIcon.vue'
import JavascriptIcon from '@/components/icons/JavascriptIcon.vue'
import ReactIcon from '@/components/icons/ReactIcon.vue'
import NextIcon from '@/components/icons/NextIcon.vue'

const isLargeScreen = ref(window.innerWidth > 740)
const checkScreenSize = () => {
  isLargeScreen.value = window.innerWidth > 740
}
watch(() => window.innerWidth, checkScreenSize)
const route = useRoute()
const isLoaded = ref(false)
const isProjectPage = ref(false)

onMounted(() => {
  isProjectPage.value = route.path === '/projects'
  const element = document.getElementById('projects')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
  setTimeout(() => {
    isLoaded.value = true
  }, 500)
});

onMounted(async () => {
  await nextTick()
  checkScreenSize()
  window.addEventListener('resize', checkScreenSize)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkScreenSize)
})
</script>

<style scoped>
.projects-cards {
  display: flex;
  flex-direction: column;
  max-height: none;
}

.projects-wrapper {
  align-items: center;
  display: flex;
  flex-direction: column;
}

.wrapper {
  height: auto;
  place-items: center;
  align-items: center;
  justify-content: center;
}

.projects-title {
  text-align: center;
  margin: 2em 0em 0.5em 0em;
}

@media (min-width: 740px) {
  .wrapper {
    height: 100vh;
  }

  .projects-title {
    display: none;
    visibility: hidden;
  }

  .projects-cards {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
}
</style>