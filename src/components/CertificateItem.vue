<template>
  <div class="certificate-item">
    <a :href="pageLink" target="_blank">
      <img class="certificate-img" :src="image" :alt="title">
    </a>
    <div class="certificate-content">
      <div style="line-height: 1.2em; width: 100%; text-align: center">
        <h3 class="dark-gold">{{ title }}</h3><span style="font-size: 70%"> (from {{organisation}})</span>
      </div>
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  image: String,
  title: String,
  organisation: String,
  description: String,
  pageLink: String
})

</script>

<style scoped>
.certificate-item {
  place-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
}

.certificate-content {
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2em;
}

a {
  width: 80%;
  box-shadow: 0 0 15px 5px #101010;
  transition: all 0.2s ease-in-out;
}

a:hover {
  transform: scale(1.03);
  box-shadow: 0 0 10px 1px #836d42;
  border: 4px double #f4cd7c;
}

.certificate-img {
  width: 100%;
}

@media (min-width: 740px) {
  .certificate-item {
    justify-content: center;
    display: flex;
    flex-direction: row;
  }

  .certificate-content {
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2em;
  }

  a {
    width: 30%;
    box-shadow: 0 0 10px 2px #101010;
    transition: all 0.2s ease-in-out;
  }
}
</style>