<template>
  <PageWrapper :animate="animate">
    <section id="learning" class="wrapper">
      <h1 class="learning-title gold">My certificates:</h1>
      <div class="certificates-wrapper">
        <CertificateItem image="src/assets/fcc-responsive-web-design-cert.jpg" title="Responsive Web Design" organisation="freeCodeCamp" description="" pageLink="https://www.freecodecamp.org/certification/mishshim/responsive-web-design"/>
        <CertificateItem image="src/assets/udemy-js-react-cert.jpg" title="Full Javascript + React course" organisation="Udemy" description="" pageLink="https://ude.my/UC-ca0e2190-f5b7-40bc-a7fd-0af7196c6951"/>
        <CertificateItem image="src/assets/webdev-cert.jpg" title="WEB-developer" organisation="Udemy" description="" pageLink="https://ude.my/UC-f44fbaee-3deb-4761-a98b-eae3f425704c"/>
        <CertificateItem image="src/assets/ts-cert.jpg" title="Typescript for modern development" organisation="Udemy" description="" pageLink="https://ude.my/UC-937e5838-a508-4fa3-b486-65263d57f180"/>
        <CertificateItem image="src/assets/stepik-wp-cert.png" title="Wordpress, site layout and transfer to CMS" organisation="Stepik" description="" pageLink="https://ude.my/UC-937e5838-a508-4fa3-b486-65263d57f180"/>
      </div>
    </section>
  </PageWrapper>
</template>

<script setup lang="ts">
import CertificateItem from '@/components/CertificateItem.vue'
import PageWrapper from '@/components/PageWrapper.vue'
import { inject } from 'vue'

const activeSection = inject('activeSection')
const animate = inject('animate')
</script>


<style scoped>
.wrapper {
  height: auto;
}

  .certificates-wrapper {
    display: flex;
    justify-content: center;
    place-items: center;
    flex-direction: column;
    gap: 2vh;
    padding-bottom: 2em;
  }

  .learning-title {
    text-align: center;
    width: 100%;
    margin: 2.5em 0em 1.5em 0em;
  }
</style>