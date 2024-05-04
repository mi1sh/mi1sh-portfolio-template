<script  setup lang="ts">
import IconGithub from '@/components/icons/IconGithub.vue'
import IconTelegram from '@/components/icons/IconTelegram.vue'
import IconInstagram from '@/components/icons/IconInstagram.vue'

defineProps<{
  msg: string,
  name: string,
  intro: string,
}>()
</script>

<template>
  <div class="greetings">
    <h2>{{ msg }}</h2>
    <div>
      <h1 class="gold"><span style="font-size: 0.6em">{{ `<` }}</span>{{ name }}<span style="font-size: 0.6em">{{ `/>` }}</span></h1>
      <div class="contacts">
        <a class="contacts-item" href="https://github.com/mi1sh" target="_blank"><IconGithub/></a>
        <a class="contacts-item" href="https://t.me/m1ish" target="_blank"><IconTelegram/></a>
        <a class="contacts-item" href="https://www.instagram.com/droch1la_/" target="_blank"><IconInstagram/></a>
      </div>
    </div>
    <h3>{{ intro }}</h3>
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

h1 {
  font-weight: bold;
  font-size: 3em;
  position: relative;
  background: linear-gradient(#f4cd7c, #73603d);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: "BigBlueTermPlus Nerd Font Mono", sans-serif;
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
}

.greetings h1,
.greetings h2,
.greetings h3 {
  text-align: center;
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
}
</style>
