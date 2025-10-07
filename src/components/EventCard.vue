<template>
  <article>
    <img :src="eventData.image" :alt="eventData.imageAlt" class="h-auto rounded-lg" />
    <button class="text-2xl text-center cursor-pointer" @click="openDetailsHandler">
      {{ eventData.eventName }}
    </button>
  </article>
</template>

<script>
export default {
  props: ["eventData"],
  methods: {
    openDetailsHandler() {
      this.$emit("custom-event-open-details", this.eventData.id);
    },
  },
};
</script>
