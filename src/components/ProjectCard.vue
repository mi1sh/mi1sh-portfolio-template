<template>
  <div class="project-card">
    <img :src="image" :alt="title" class="project-image" />
    <div class="project-content">
      <div class="project-content-header">
        <h3 class="project-title dark-gold">{{ title }}</h3>
        <h6 class="project-description">{{ description }}</h6>
      </div>
      <div class="project-content-footer">
        <div class="project-buttons">
          <a v-if="pageLink" :href="pageLink" target="_blank">
            Try it
          </a>
          <a v-if="githubLink" :href="githubLink" target="_blank">
            Github
          </a>
        </div>
        <div class="project-icons">
          <component v-for="(icon, index) in icons" :key="index" :is="icon" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  image: String,
  title: String,
  description: String,
  pageLink: String,
  githubLink: String,
  icons: Array
})
</script>

<style scoped>
a:hover {
  border-bottom: 2px solid #af9259;
  border-radius: 3px;
}

.project-card {
  background-color: #222222;
  border-radius: 10px;
  margin: 20px;
  transition: all 0.2s ease-in-out;
  display: flex;
  flex-direction: column;
  max-width: 25em;
  align-items: center;
  box-shadow: 0 0 10px 2px #101010;
}

.project-card:hover {
  transform: scale(1.01);
  box-shadow: 0 0 15px 4px #101010;
  background-color: #262626;
}

.project-image {
  max-height: 13em;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
}

.project-buttons {
  display: flex;
  gap: 12px;
}

.project-content {
  max-height: 20em;
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: auto;
  padding: 1em 0em 1em 0em;
}

.project-icons {
  display: flex;
  gap: 2px;
}

.project-content-header {
  line-height: 1.3em;
}

.project-content-footer {
  display: flex;
  width: 100%;
  justify-content: space-between;
}

a {
  color: #f4cd7c;
}

@media (min-width: 740px) {

}
</style>