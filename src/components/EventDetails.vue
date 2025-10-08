<template>
  <section
    class="mt-10 grid grid-flow-row justify-items-center lg:grid-rows-1 lg:grid-cols-2 gap-6 mx-10 lg:mx-20"
  >
    <img :src="event.image" :alt="event.imageAlt" class="rounded-lg" />
    <section class="flex flex-col gap-4">
      <h1 class="text-4xl text-center lg:text-left">{{ event.eventName }}</h1>
      <p class="text-center lg:text-left flex flex-col gap-2">
        <span>Date: {{ event.date }} {{ event.time }}</span
        ><span>Location: {{ event.location }}</span>
      </p>
      <p>{{ event.description }}</p>

      <button
        @click="handleToggleIsSignedUp"
        class="bg-blue-400 hover:cursor-pointer px-2 py-1 rounded-full"
      >
        {{ actionText }}
      </button>
    </section>
  </section>
</template>

<script>
export default {
  props: ["event"],
  data() {
    return {
      isSignedUp: false,
    };
  },
  methods: {
    handleToggleIsSignedUp() {
      this.isSignedUp = !this.isSignedUp;
    },
  },
  computed: {
    actionText() {
      return this.isSignedUp ? "Resign from this event" : "Sign up to the event";
    },
  },
};
</script>
