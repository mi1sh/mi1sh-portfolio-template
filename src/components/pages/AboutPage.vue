<template>
  <PageWrapper :animate="animate">
    <section :key="$route.path" id="about" class="wrapper">
      <div class="about-wrapper">
        <h1>My name is <span class="gold">Mikhail</span>, I am a self-taught developer from <span class="gold">Kazakhstan</span>.</h1>
        <h3>I started doing web development in <span class="dark-gold">2022</span>, considering it a <span class="dark-gold">hobby</span> and a <span class="dark-gold">good starting point</span> for me. I've been using <span class="dark-gold">React</span> most of the time, and I can call it my favorite tool.</h3>
        <h3>Sometimes I use neural networks to help me develop new ideas for personal projects. I'm not going to stop, <span class="dark-gold">I like learning</span> something new and <span class="dark-gold">getting better</span> at what I already know.</h3>
      </div>
    </section>
  </PageWrapper>
</template>

<script setup lang="ts">
import { inject } from 'vue';
import PageWrapper from '@/components/pages/PageWrapper.vue'

const activeSection = inject('activeSection');
const animate = inject('animate');
</script>


<style scoped>
.wrapper {
  place-items: center
}

.about-wrapper {
  transition: transform 0.5s ease;
  max-width: 75%;
  margin-left: 6em;
  display: flex;
  flex-direction: column;
  gap: 0.7em;
}

h1 {
  margin-bottom: 0.5em;
}
</style>