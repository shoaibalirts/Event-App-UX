<template>
  <article>
    <img :src="eventData.image" :alt="eventData.imageAlt" />
    <h2>{{ eventData.eventName }}</h2>
  </article>
</template>

<script>
export default {
  props: ["eventData"],
};
</script>
