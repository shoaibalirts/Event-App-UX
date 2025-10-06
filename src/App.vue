<script>
export default {
  data() {
    return {
      events: [
        {
          id: 1,
          eventName: "Welcome new students party",
          location: "Building D, Zealand Erhvervsakademi, Roskilde",
          date: "11-10-2025",
          time: "18:00",
          image:
            "https://plus.unsplash.com/premium_photo-1664474653221-8412b8dfca3e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZXZlbnR8ZW58MHx8MHx8fDA%3D",
          imageAlt: "A photograph of a party with people, confetti and champagne glasses visible.",
          description:
            "Join us for a fun and friendly evening to celebrate the start of your journey at Zealand Erhvervsakademi! Meet your fellow students, enjoy good music, snacks, and great vibes as we kick off the new semester together. Don’t miss this chance to make new friends and start your Zealand experience with a party to remember!",
        },
        {
          id: 2,
          eventName: "Book club, Halloween edition: reading 'Dracula'",
          location: "Building D (common area), Zealand Erhvervsakademi, Roskilde",
          date: "31-10-2025",
          time: "17:00",
          image:
            "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          imageAlt: "A hand is reaching out to a pile of books, picking up one.",
          description:
            "Join us for a special Halloween edition of the student book club as we explore Bram Stoker’s classic Dracula. Together, we’ll discuss the novel’s dark themes, gothic atmosphere, and timeless characters. All students are welcome, and costumes are encouraged for those who want to embrace the Halloween spirit. Come and share your thoughts, ideas, and a love of literature in a relaxed and engaging setting.",
        },
        {
          id: 3,
          eventName: "First chess club meeting this semester!",
          location: "Building D (common area), Zealand Erhvervsakademi, Roskilde",
          date: "22-10-2025",
          time: "16:30",
          image:
            "https://images.unsplash.com/photo-1523875194681-bedd468c58bf?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          imageAlt: "A chessboard and a hand picking up one of the figures.",
          description:
            "The Chess Club is back for a new semester, and all students are invited to join our first meeting. Whether you’re a beginner eager to learn or an experienced player ready for a challenge, this is a great opportunity to meet other chess enthusiasts, play a few friendly matches, and discuss plans for upcoming events and tournaments. Come and be part of a community that enjoys strategy, fun, and friendly competition.",
        },
      ],
    };
  },
  provide() {
    return { events: this.events };
  },
};
</script>

<template>
  <h1 class="text-4xl">All events</h1>
  <section class="grid grid-cols-1 md:grid-cols-3"></section>
</template>

<style scoped></style>
