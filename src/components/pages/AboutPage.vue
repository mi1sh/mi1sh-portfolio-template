<template>
    <section :key="$route.path" id="about" class="wrapper slide-left">
      <div class="about-wrapper">
        <div class="about-text">
          <h1 class="about-intro">My name is <span class="gold">Mikhail</span>, I am a self-taught developer from <span class="gold">Kazakhstan</span>.</h1>
          <h3>I started doing web development in <span class="dark-gold">2022</span>, considering it a <span class="dark-gold">hobby</span> and a <span class="dark-gold">good starting point</span> for me. I've been using <span class="dark-gold">React</span> most of the time, and I can call it my favorite tool.</h3>
          <h3>Sometimes I use <span class="dark-gold">AI</span> to help me develop new ideas for personal projects. I'm not going to stop, <span class="dark-gold">I like learning</span> something new and <span class="dark-gold">getting better</span> at what I already know.</h3>
        </div>
        <div class="tech-stack">
          <h1 class="gold">Main Tech stack:</h1>
          <h3 class="stack dark-gold"><a href="https://www.typescriptlang.org/" class="typescript-color" target="_blank">Typescript</a> | <a href="https://www.javascript.com/" class="javascript-color" target="_blank">Javascript</a> | <a class="react-color" href="https://react.dev/" target="_blank">React</a> | <a class="next-color" href="https://nextjs.org/" target="_blank">Next</a> | <a class="vue-color" href="https://vuejs.org/" target="_blank">Vue</a></h3>
        </div>
      </div>
    </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isLoaded = ref(false)
const isAboutPage = ref(false)

onMounted(() => {
  isAboutPage.value = route.path === '/about'
  const element = document.getElementById('about')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
  setTimeout(() => {
    isLoaded.value = true
  }, 500)
});
</script>


<style scoped>
.wrapper {
  place-items: center;
  flex-direction: column;
}

.about-wrapper {
  height: 100vh;
  justify-content: center;
  transition: transform 0.5s ease;
  max-width: 75%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3em;
}

.about-text {
  display: flex;
  flex-direction: column;
  gap: 0.5em;
}

.about-intro {
  margin-bottom: 0.5em;
}

.tech-stack {
  display: flex;
  flex-direction: column;
  gap: 0.5vw;
}

a {
  text-decoration: none;
  transition: all 0.2s ease-in-out;
}

.typescript-color {
  font-weight: bolder;
  color: #007acd;
  vertical-align: middle;
  &:hover {
    color: #005a96;
  }
}

.javascript-color {
  font-weight: bolder;
  color: #f7e018;
  vertical-align: middle;
  &:hover {
    color: #b0a010;
  }
}

.react-color {
  font-weight: bolder;
  color: #60d9fa;
  vertical-align: middle;
  &:hover {
    color: #469db6;
  }
}

.next-color {
  font-weight: bolder;
  color: #282a49;
  vertical-align: middle;
  &:hover {
    color: #1e1f41;
  }
}

.vue-color {
  font-weight: bolder;
  color: #3fb984;
  vertical-align: middle;
  &:hover {
    color: #2b815c;
  }
}

@media (min-width: 740px) {
  .about-wrapper {
    margin-left: 6em;
  }

  .tech-stack {
    display: flex;
    flex-direction: row;
    gap: 0.5vw;
  }
}
</style>