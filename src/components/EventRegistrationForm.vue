<template>
  <section>
    <h1>ADD AN EVENT</h1>
    <form class="flex flex-col" @submit.prevent="formSubmitHandler">
      <p class="flex flex-col justify-center">
        <label>Event name</label>
        <input
          v-model="formData.eventName"
          class=""
          type="text"
          placeholder="name of the event please"
        />
      </p>
      <p class="flex flex-col justify-center">
        <label>Event description</label>
        <textarea
          v-model="formData.description"
          minlength="5"
          placeholder="description of the event please"
        />
      </p>
      <p class="flex flex-col justify-center">
        <label>Event image</label>
        <input
          type="file"
          @change="imageUploadHandler"
          name="image"
          accept="image/png, image/jpeg"
        />
      </p>
      <button type="submit" class="bg-blue-400 hover:cursor-pointer hover:text-red-400 p-2">
        Save
      </button>
    </form>
  </section>
</template>
<script>
export default {
  name: "EventRegistrationForm",
  data() {
    return {
      formData: {
        eventName: "",
        description: "",
        image: null,
      },
    };
  },
  methods: {
    formSubmitHandler() {
      // if (!this.formData.eventName || !this.formData.description) {
      //   alert("Required either name or description of the event");
      //   return;
      // }

      const createdEvent = {
        id: Math.floor(Math.random()),
        ...this.formData,
      };
      console.log(createdEvent);

      this.$emit("custom-event-form-saved", createdEvent);
      this.formData.eventName = "";
      this.formData.description = "";
      this.formData.image = "";
    },
    imageUploadHandler(event) {
      const file = event.target.files[0];
      if (!file) {
        return;
      }
      console.log("File selected:", file.name);
      const imageUrl = URL.createObjectURL(file);
      this.formData.image = imageUrl;

      // this.formData.eventImage = file;
    },
  },
};
</script>
