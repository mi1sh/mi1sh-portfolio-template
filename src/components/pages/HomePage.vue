<script setup lang="ts">
import IntroCard from '@/components/IntroCard.vue'
import { onMounted, ref } from 'vue'
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
    <div>
      <IntroCard v-cloak :intro="intro" :githubLink="githubLink" :name="name" :msg="msg" />
    </div>
  </section>
</template>

<style scoped>

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
}
</style>