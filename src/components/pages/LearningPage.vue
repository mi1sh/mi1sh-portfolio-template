<template>
  <section :key="$route.path" id="learning" class="wrapper slide-left">
    <div class="books-wrapper">
      <BookItem title="Clean code. Creating and refactoring with Agile" author="Robert M."/>
      <BookItem title="Grokking Algorithms: An Illustrated Guide for Programmers and Other Curious People" author="Aditya Y."/>
    </div>
    <h1 class="learning-title gold">Certificates</h1>
    <div class="certificates-wrapper">
      <CertificateItem :image="responsiveWebDesignCert" title="Responsive Web Design"
                       organisation="freeCodeCamp" description=""
                       pageLink="https://www.freecodecamp.org/certification/mi1sh/responsive-web-design" />
      <CertificateItem :image="jsAlgorithmsCert" title="JavaScript Algorithms and Data Structures"
                       organisation="freeCodeCamp" description=""
                       pageLink="https://www.freecodecamp.org/certification/mi1sh/javascript-algorithms-and-data-structures-v8" />
      <CertificateItem :image="fullJsReactCourseCert" title="Full Javascript + React course"
                       organisation="Udemy" description=""
                       pageLink="https://ude.my/UC-ca0e2190-f5b7-40bc-a7fd-0af7196c6951" />
      <CertificateItem :image="webDeveloperCert" title="WEB-developer" organisation="Udemy" description=""
                       pageLink="https://ude.my/UC-f44fbaee-3deb-4761-a98b-eae3f425704c" />
      <CertificateItem :image="typescriptCert" title="Typescript for modern development" organisation="Udemy"
                       description="" pageLink="https://ude.my/UC-937e5838-a508-4fa3-b486-65263d57f180" />
      <CertificateItem :image="wordpressCert" title="Wordpress, site layout and transfer to CMS"
                       organisation="Stepik" description="" pageLink="https://stepik.org/cert/2224679" />
    </div>
  </section>
</template>

<script setup lang="ts">
import CertificateItem from '@/components/CertificateItem.vue'
import { useRoute } from 'vue-router'
import { onMounted, ref } from 'vue'

import responsiveWebDesignCert from '../../assets/fcc-responsive-web-design-cert.jpg'
import jsAlgorithmsCert from '../../assets/fcc-js-cert.jpg'
import fullJsReactCourseCert from '../../assets/udemy-js-react-cert.jpg'
import webDeveloperCert from '../../assets/webdev-cert.jpg'
import typescriptCert from '../../assets/ts-cert.jpg'
import wordpressCert from '../../assets/stepik-wp-cert.png'
import BookItem from '@/components/BookItem.vue'

const route = useRoute()
const isLearningPage = ref(false)

onMounted(() => {
  isLearningPage.value = route.path === '/learning'
  const element = document.getElementById('learning')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
});
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
}

.learning-title {
  text-align: center;
  width: 100%;
  margin: 2.5em 0em 1.5em 0em;
}

.books-wrapper {
  width: 100%;
  margin-top: 3em;
}

@media (min-width: 740px) {
  .learning-title {
    display: none;
  }

  .certificates-wrapper {
    margin-top: 10vh;
    padding-bottom: 2em;
  }

  .books-wrapper {
    width: 100%;
    margin-top: 2em;
  }
}
</style>
