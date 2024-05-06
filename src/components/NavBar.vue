<template>
  <router-link to="/" :class="{ 'active-nav': activeSection === 'home' }">
    <NavBarItem >
      <template #icon>
        <HomeIcon />
      </template>
      <template #heading>Home</template>
    </NavBarItem>
  </router-link>

  <router-link to="/about" :class="{ 'active-nav': activeSection === 'about' }">
    <NavBarItem >
      <template #icon>
        <AboutIcon />
      </template>
      <template #heading>About</template>
    </NavBarItem>
  </router-link>

  <router-link to="/projects" :class="{ 'active-nav': activeSection === 'projects' }">
    <NavBarItem >
      <template #icon>
        <ProjectsIcon />
      </template>
      <template #heading>Projects</template>
    </NavBarItem>
  </router-link>

  <router-link to="/learning" :class="{ 'active-nav': activeSection === 'learning' }">
    <NavBarItem>
      <template #icon>
        <LearningIcon />
      </template>
      <template #heading>Learning</template>
    </NavBarItem>
  </router-link>
</template>

<script setup lang="ts">
import NavBarItem from '@/components/NavBarItem.vue'
import HomeIcon from './icons/IconHome.vue'
import AboutIcon from './icons/IconAbout.vue'
import LearningIcon from './icons/IconLearning.vue'
import ProjectsIcon from './icons/IconProjects.vue'

import { onUnmounted, ref } from 'vue';

const activeSection = ref('home');

const checkActiveSection = () => {
  const sections = ['home', 'about', 'projects', 'learning'];
  let currentSection = 'home';

  sections.forEach(section => {
    const element = document.getElementById(section);
    if (element) {
      const rect = element.getBoundingClientRect();
      if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
        currentSection = section;
      }
    }
  });

  activeSection.value = currentSection;
};

// Отслеживайте прокрутку страницы
window.addEventListener('scroll', checkActiveSection);
onUnmounted(() => {
  window.removeEventListener('scroll', checkActiveSection);
});
// Удаляйт
</script>

<style scoped>
</style>