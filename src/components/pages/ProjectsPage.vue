<template>
  <PageWrapper :animate="animate">
    <section id="projects" class="wrapper">
      <div class="projects-wrapper">
        <div class="projects-cards">
          <ProjectCard title="Typespeed - test" image="src/assets/typespeed-test-cover.png" githubLink="https://github.com/mi1sh/typespeed-test" pageLink="https://typespeed-test.vercel.app/" description="My simple application for practice in typing text" :icons="[JavascriptIcon, ReactIcon]"/>
          <ProjectCard title="Add - some - text" image="src/assets/add-some-text-cover.png" githubLink="https://github.com/mi1sh/add-some-text" pageLink="https://add-some-text.vercel.app/" description="A simple photo editor (or meme creator), made using next.js" :icons="[TypescriptIcon, NextIcon]"/>
          <ProjectCard title="Boykisser clicker" image="src/assets/boykisser-clicker-cover.png" githubLink="https://github.com/mi1sh/boykisser-clicker" pageLink="https://boykisser-clicker.vercel.app" description="Clicker game with upgrades and leaderboard" :icons="[TypescriptIcon, ReactIcon]"/>
          <ProjectCard title="Usual-UI" image="src/assets/usual-ui-cover.png" githubLink="https://github.com/mi1sh/usual-ui" description="My first UI-library with tailwindcss connect" :icons="[TypescriptIcon, ReactIcon]"/>
        </div>
      </div>
    </section>
  </PageWrapper>
</template>

<script setup lang="ts">

import 'swiper/swiper-bundle.css';
import ProjectCard from '@/components/ProjectCard.vue'
import TypescriptIcon from '@/components/icons/TypescriptIcon.vue'
import JavascriptIcon from '@/components/icons/JavascriptIcon.vue'
import ReactIcon from '@/components/icons/ReactIcon.vue'
import NextIcon from '@/components/icons/NextIcon.vue'
import PageWrapper from '@/components/PageWrapper.vue'

import { inject, onMounted, onUnmounted, ref, watch } from 'vue'
const animate = inject('animate');

const isLargeScreen = ref(window.innerWidth > 740);

const checkScreenSize = () => {
  isLargeScreen.value = window.innerWidth > 740;
};

watch(() => window.innerWidth, checkScreenSize);

import { nextTick } from 'vue';

onMounted(async () => {
  await nextTick();
  checkScreenSize();
  window.addEventListener('resize', checkScreenSize);
});

onUnmounted(() => {
  // Удалите обработчик события при размонтировании компонента
  window.removeEventListener('resize', checkScreenSize);
});

const cards = ref([
  {
    title: "Typespeed - test",
    image: "src/assets/typespeed-test-cover.png",
    githubLink: "https://github.com/mi1sh/typespeed-test",
    pageLink: "https://typespeed-test.vercel.app/",
    description: "My simple application for practice in typing text",
    icons: [JavascriptIcon, ReactIcon],
  },
  {
    title: "Add - some - text",
    image: "src/assets/add-some-text-cover.png",
    githubLink: "https://github.com/mi1sh/add-some-text",
    pageLink: "https://add-some-text.vercel.app/",
    description: "A simple photo editor (or meme creator), made using next.js",
    icons: [TypescriptIcon, NextIcon],
  },
  {
    title: "Boykisser clicker",
    image: "src/assets/boykisser-clicker-cover.png",
    githubLink: "https://github.com/mi1sh/boykisser-clicker",
    pageLink: "https://boykisser-clicker.vercel.app/",
    description: "Clicker game with upgrades and leaderboard",
    icons: [TypescriptIcon, ReactIcon],
  },
  {
    title: "Usual-UI",
    image: "src/assets/usual-ui-cover.png",
    githubLink: "https://github.com/mi1sh/usual-ui",
    description: "My first UI-library with tailwindcss connect",
    icons: [TypescriptIcon, ReactIcon],
  }
  ]);
</script>

<style scoped>
.projects-cards {
  display: flex;
  flex-direction: column;
  max-height: 100vh;
  width: 90vw;
  overflow: scroll;
}

.wrapper {
  display: flex;
  place-items: center;
  align-items: center;
  justify-content: center;
}

@media (min-width: 740px) {
  .projects-cards {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
}
</style>