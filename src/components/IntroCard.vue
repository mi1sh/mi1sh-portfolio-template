<script setup lang="ts">
import IconGithub from '@/components/icons/IconGithub.vue'
import IconTelegram from '@/components/icons/IconTelegram.vue'
import IconInstagram from '@/components/icons/IconInstagram.vue'
import logo from '../assets/logo.jpg'
import { onMounted, ref } from 'vue'

const props = defineProps<{
  msg: string,
  name: string,
  intro: string,
  githubLink: string,
}>()

const isLoaded = ref(false)

onMounted(() => {
  const image = new Image()
  image.src = logo
  if (props.msg && props.name && props.intro && props.githubLink) {
    image.onload = () => {
      return isLoaded.value = true
    }
  } else {
    console.error("Data is not loaded")
  }
})
</script>

<template>
  <div class="greetings">
      <span v-if="!isLoaded" class="loader"></span>
    <div v-else class="intro-wrapper">
      <img alt="mi1sh logo" class="logo" :src="logo" />
      <div class="info-wrapper">
        <h2>{{ props.msg }}</h2>
        <h1 class="typing-text gold"><span style="font-size: 0.6em">{{ `<` }}</span>{{ props.name }}<span style="font-size: 0.6em; padding-right: 0.1em">{{ `/>` }}</span></h1>
        <div class="contacts">
          <a class="contacts-item" :href="githubLink" target="_blank"><IconGithub/></a>
          <a class="contacts-item" href="https://t.me/m1ish" target="_blank"><IconTelegram/></a>
          <a class="contacts-item" href="https://www.instagram.com/droch1la_/" target="_blank"><IconInstagram/></a>
        </div>
        <h3>{{ props.intro }}</h3>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contacts {
  justify-content: center;
  display: flex;
  flex-direction: row;
  gap: 1em;
  transform: scale(0.8);
}

.logo {
  width: 15em;
  border-radius: 100%;
  display: block;
  margin: 3em auto;
}

h2 {
  font-size: 1rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 0.8rem;
  position: relative;
}

.greetings {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.greetings h1,
.greetings h2,
.greetings h3 {
  text-align: center;
}

.loader {
  display: flex;
  justify-content: center;
  margin: 0 auto;
  width: 105px;
  height: 60px;
  --g1:conic-gradient(from  90deg at left   3px top   3px,#0000 90deg,#f4cd7c 0);
  --g2:conic-gradient(from -90deg at bottom 3px right 3px,#0000 90deg,#af9259 0);
  background:var(--g1),var(--g1),var(--g1), var(--g2),var(--g2),var(--g2);
  background-position: left,center,right;
  background-repeat: no-repeat;
  animation: loading 0.7s infinite;
}

@keyframes loading {
  0%   {background-size:25px 50% ,25px 50% ,25px 50%}
  25%  {background-size:25px 100%,25px 50% ,25px 50%}
  50%  {background-size:25px 50% ,25px 100%,25px 50%}
  75%  {background-size:25px 50% ,25px 50% ,25px 100%}
  100% {background-size:25px 50% ,25px 50% ,25px 50%}
}

@media (min-width: 740px) {
  .contacts {
    float: left;
    justify-content: left;
    gap: 0.8em;
    transform: scale(0.9);
  }

  h1 {
    font-size: 5em;
    font-weight: bolder;
  }

  h2 {
    left: -18px;
    font-size: 1.8rem;
  }

  h3 {
    font-size: 1em;
    margin-top: 1.3em;
    left: -15px;
  }

  .greetings h1,
  .greetings h2,
  .greetings h3 {
    text-align: left;
    padding: 0px;
  }

  .logo {
    width: 23em;
    border-radius: 100%;
    display: block;
    margin: 0 2rem 0 0;
  }

  .intro-wrapper {
    display: flex;
    flex-direction: row;
  }

  .info-wrapper {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  .greetings {
    justify-content: center;
  }
}
</style>
