<script setup lang="ts">
</script>

<template>
  <div class="item">
    <i>
      <slot name="icon"></slot>
    </i>
    <div class="details">
      <h3>
        <slot name="heading"></slot>
      </h3>
    </div>
  </div>
</template>

<style scoped>
.item {
  display: flex;
  position: relative;
}:hover {
  i {
    color: #f4cd7c;
    transition: ease-in-out 0.4s;
  }
 }

i {
  display: flex;
  color: #af9259;
  place-items: center;
  place-content: center;
}:hover {
  .details {
    color: #f4cd7c;
  }
 }

h3 {
  font-size: 1rem;
  font-weight: 500;
  margin: 2vh 0vh 2vh 0vh;
}

.details{
  color: rgba(235, 235, 235, 0.64);
  transition: ease-in-out 0.4s;
}

@media (min-width: 1024px) {
  .item {
    padding: 1rem 0 1rem calc(var(--section-gap) / 2.5);
  }

  i {
    top: calc(50% - 25px);
    left: -25px;
    position: absolute;
    width: 50px;
    height: 50px;
    transform: scale(1.1);
  }

  .item:before {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    bottom: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:after {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    top: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:first-of-type:before {
    display: none;
  }

  .item:last-of-type:after {
    display: none;
  }
}
</style>
