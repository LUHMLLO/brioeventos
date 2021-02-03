<template>
  <section class="section">
    <div
      class="bg-black height-500 video-wrapper w-100 h-100 round-2 margin-bottom-10"
    >
      <video src="@/assets/demoStream.webm" autoplay muted></video>
    </div>

    <div class="row row-adjust">
      <div
        class="col-3 md:col-6 xs:col-12"
        v-for="(card, index) in actionCards"
        :key="index"
      >
        <ActionCard :name="card.name" :featured="card.featured" :bg="card.bg" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "LiveRightNow",
  components: {
    ActionCard: () => import("../widgets/ActionCard"),
  },
  data() {
    return {
      actionCards: [
        {
          name: "Brio Eventos",
          bg: "https://images.unsplash.com/photo-1560523159-6b681a1e1852",
          featured: true,
        },
        {
          name: "Exhibition Room",
          bg: "https://images.unsplash.com/photo-1518998053901-5348d3961a04",
        },
        {
          name: "Sessions",
          bg: "https://images.unsplash.com/photo-1591616369924-833532b76ebc",
        },
        {
          name: "Messages",
          bg: "https://images.unsplash.com/photo-1611746869696-d09bce200020",
        },
      ],
    };
  },
};
</script>