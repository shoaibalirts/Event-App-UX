<template>
  <article>
    <img :src="eventData.image" :alt="eventData.imageAlt" class="max-h-52 w-auto rounded-lg" />
    <h2 class="text-2xl text-center">{{ eventData.eventName }}</h2>
  </article>
</template>

<script>
export default {
  props: ["eventData"],
};
</script>
