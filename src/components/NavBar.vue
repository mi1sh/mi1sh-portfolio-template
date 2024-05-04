<script setup lang="ts">
import NavBarItem from '@/components/NavBarItem.vue'
import HomeIcon from './icons/IconHome.vue'
import AboutIcon from './icons/IconAbout.vue'
import LearningIcon from './icons/IconLearning.vue'
import ProjectsIcon from './icons/IconProjects.vue'
</script>

<template>
  <router-link to="/">
    <NavBarItem>
      <template #icon>
        <HomeIcon />
      </template>
      <template #heading>Home</template>
    </NavBarItem>
  </router-link>

  <router-link to="/about" >
    <NavBarItem>
      <template #icon>
        <AboutIcon />
      </template>
      <template #heading>About</template>
    </NavBarItem>
  </router-link>

  <router-link to="/projects">
    <NavBarItem>
      <template #icon>
        <ProjectsIcon />
      </template>
      <template #heading>Projects</template>
    </NavBarItem>
  </router-link>

  <router-link to="/learning">
    <NavBarItem>
      <template #icon>
        <LearningIcon />
      </template>
      <template #heading>Learning</template>
    </NavBarItem>
  </router-link>
</template>

<style scoped>
</style>