<template>
  <header class="h-24 min-h-0 md:min-h-full">
    <nav>
      <menu-icon v-if="isOpenedMenu" @click="openMenuClickHandler" />

      <cross-icon v-if="isOpenedCross" @click="closeMenuClickHandler" />
      <ul v-if="isOpenedCross">
        <li>Home</li>
        <li>My Events</li>
        <button @click="openFormHandler">add an event</button>
      </ul>
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
      isListing: false,
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
      this.isOpenedMenu = true;
      this.isOpenedCross = false;
    },
  },
};
</script>
