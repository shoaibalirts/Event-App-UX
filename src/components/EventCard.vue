<template>
  <article>
    <img :src="eventData.image" :alt="eventData.imageAlt" class="max-w-96 h-auto rounded-lg" />
    <h2 class="text-2xl max-w-96 text-center">{{ eventData.eventName }}</h2>
  </article>
</template>

<script>
export default {
  props: ["eventData"],
};
</script>
