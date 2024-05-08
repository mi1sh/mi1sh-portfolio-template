<script setup lang="ts">

import ProjectCard from '@/components/ProjectCard.vue'
import TypescriptIcon from '@/components/icons/TypescriptIcon.vue'
import JavascriptIcon from '@/components/icons/JavascriptIcon.vue'
import ReactIcon from '@/components/icons/ReactIcon.vue'
import NextIcon from '@/components/icons/NextIcon.vue'
import PageWrapper from '@/components/PageWrapper.vue'
import { inject, onMounted, ref } from 'vue'

const activeSection = inject('activeSection')
const animate = inject('animate')

const project = ref({
  pageLink: "",
})
</script>

<template>
  <PageWrapper :animate="animate">
    <section id="projects" class="wrapper">
      <div class="projects-wrapper">
        <ProjectCard title="Typespeed - test" image="src/assets/typespeed-test-cover.png" githubLink="https://github.com/mi1sh/typespeed-test" pageLink="https://typespeed-test.vercel.app/" description="My simple application for practice in typing text" :icons="[JavascriptIcon, ReactIcon]"/>
        <ProjectCard title="Add - some - text" image="src/assets/add-some-text-cover.png" githubLink="https://github.com/mi1sh/add-some-text" pageLink="https://add-some-text.vercel.app/" description="A simple photo editor (or meme creator), made using next.js " :icons="[TypescriptIcon, NextIcon]"/>
        <ProjectCard title="Boykisser clicker" image="src/assets/boykisser-clicker-cover.png" githubLink="https://github.com/mi1sh/boykisser-clicker" pageLink="https://boykisser-clicker.vercel.app" description="Clicker game with upgrades and leaderboard " :icons="[TypescriptIcon, ReactIcon]"/>
        <ProjectCard title="Usual-UI" image="src/assets/usual-ui-cover.png" githubLink="https://github.com/mi1sh/usual-ui" description="My first UI-library with tailwindcss connect" :icons="[TypescriptIcon, ReactIcon]"/>
      </div>
    </section>
  </PageWrapper>
</template>

<style scoped>
.projects-wrapper {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
}

.wrapper {
  display: flex;
  place-items: center;
  align-items: center;
  justify-content: center;
}

@media (min-width: 740px) {
  .projects-wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
}
</style>