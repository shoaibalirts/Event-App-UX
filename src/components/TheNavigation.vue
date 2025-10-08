<template>
  <header>
    <nav>
      <section class="block md:hidden">
        <menu-icon v-if="isOpenedMenu" @click="openMenuClickHandler" />

        <cross-icon v-if="isOpenedCross" @click="closeMenuClickHandler" />
        <ul v-if="isOpenedCross">
          <li class="p-2 hover:text-blue-500 hover:underline hover:underline-offset-2">Home</li>
          <li class="p-2 hover:text-blue-500 hover:underline hover:underline-offset-4">
            My Events
          </li>
          <li class="p-2 hover:text-blue-500 hover:underline hover:underline-offset-2">
            <button class="text-gray-400 hover:text-blue-500" @click="openFormHandler">
              + add an event
            </button>
          </li>
        </ul>
      </section>

      <section class="hidden md:block">
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
      </section>
    </nav>
  </header>
</template>

<script>
import CrossIcon from "@/UI/CrossIcon.vue";
import MenuIcon from "@/UI/MenuIcon.vue";
export default {
  name: "TheNavigation",
  components: {
    MenuIcon,
    CrossIcon,
  },
  data() {
    return {
      isOpenedMenu: true,
      isOpenedCross: false,
    };
  },
  methods: {
    openMenuClickHandler() {
      this.$emit("custom-event-open-menu", this.isOpenedMenu);
      this.isOpenedMenu = false;
      this.isOpenedCross = true;
    },
    closeMenuClickHandler() {
      this.$emit("custom-event-cross-menu", this.isOpenedCross);
      this.isOpenedMenu = true;
      this.isOpenedCross = false;
    },
    openFormHandler() {
      console.log("clicked in navigation");
      if (this.isOpenedMenu) {
        console.log("Menu is opened");
      } else {
        console.log("Menu is closed");
      }

      this.$emit("custom-event-form");
      this.isOpenedMenu = true;
      this.isOpenedCross = false;
      // this.$emit("custom-event-cross-menu", true);
    },
  },
};
</script>
