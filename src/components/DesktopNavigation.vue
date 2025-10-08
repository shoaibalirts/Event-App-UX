<template>
  <header class="hidden md:block">
    <nav>
      <ul class="flex justify-between mx-10 lg:mx-20">
        <li>
          <ul class="flex gap-6">
            <li class="p-2 hover:text-blue-500 hover:underline hover:underline-offset-2 text-xl">
              Home
            </li>
            <li class="p-2 hover:text-blue-500 hover:underline hover:underline-offset-4 text-xl">
              My Events
            </li>
          </ul>
        </li>

        <li class="p-2 hover:text-blue-500 hover:underline hover:underline-offset-2">
          <button class="text-gray-400 hover:text-blue-500 text-xl" @click="openFormHandler">
            + add an event
          </button>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  methods: {
    openFormHandler() {
      this.$emit("custom-event-form");
    },
  },
};
</script>
