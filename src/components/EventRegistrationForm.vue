<template>
  <section>
    <h1>ADD AN EVENT</h1>
    <form action="">
      <label>Event name</label>
      <input type="text" />
      <label>Event description</label>
      <textarea required minlength="500" />
      <label>Event image</label>
      <input type="file" name="eventImage" accept="image/png, image/jpeg" />
      <button type="submit">Save</button>
    </form>
  </section>
</template>
<script>
export default {
  name: "EventRegistrationForm",
  data() {
    return {};
  },
};
</script>
