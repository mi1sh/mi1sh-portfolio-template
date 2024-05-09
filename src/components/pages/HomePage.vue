<script setup lang="ts">
import IntroCard from '@/components/IntroCard.vue'
import { inject, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { fetchGithubUser } from '@/services/githubFetchService';

defineProps<{
  isLargeScreen: boolean,
}>()

const route = useRoute()
const isLoaded = ref(false)
const isHomePage = ref(false)

let intro = ref("React, Next and Vue confident user")
let githubLink = ref("https://github.com/mi1sh")
let name = ref("mi1sh")
let msg = ref("Web developer")

onMounted(async() => {

  isHomePage.value = route.path === '/'
  const element = document.getElementById('home')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }

  try {
    const userData = await fetchGithubUser('mi1sh')
    console.log(userData)
    intro.value = userData.bio
    githubLink.value = userData.html_url
    name.value = userData.login
    msg.value = "Web developer"
  } catch (error) {
    console.error('Failed to load user data:', error)
  }

  setTimeout(() => {
    isLoaded.value = true
  }, 500)
})
</script>

<template>
  <section :key="$route.path" id="home" class="wrapper" :class="{'fade-in': !isLargeScreen, 'slide-left': isLargeScreen}">
    <img alt="mi1sh logo" class="logo" src="../../assets/logo.jpg" />
    <div>
      <IntroCard :intro="intro" :githubLink="githubLink" :name="name" :msg="msg" />
    </div>
  </section>
</template>

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