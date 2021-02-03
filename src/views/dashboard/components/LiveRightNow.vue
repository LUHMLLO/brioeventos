<template>
  <section :class="[ this.theaterMode ? '':'row row-adjust']">
    
    <div :class="[ this.theaterMode ? 'offset-right-25 offset-left-25 margin-bottom-15 ':'col-9 md:col-12' ]">
      <div class="bg-black height-500 video-wrapper w-100 h-100">
        <video src="@/assets/demoStream.webm" autoplay muted v-if="false"></video>
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/LRG7kYufLTc?controls=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div class="w-100 padding-x-20 padding-y-10 bg-grey-darken-4 color-baby-powder d-flex align-content-center">
        <div class="d-flex align-content-center padding-x-5 bg-white-fade-1-hover round-1 cursor-pointer" @click="toggleTheaterMode()">          
          <i class="uil uil-panorama-h margin-right-5"></i>
          <span class="font-size-8">modo cinema</span>
        </div>
      </div>
      <div class="depth-1-grey-lighten-3" :class="[ this.theaterMode ? 'padding-x-25 padding-y-15':'padding-15']">        
        <h6 class="font-size-14 margin-bottom-10 padding-bottom-10 border-bottom-solid">5G, la REVOLUCIÓN es real</h6>
        <p class="font-size-8 margin-bottom-5">
          Se lleva años hablando del 5G. En 2019 comienza su despliegue y vamos a ver gracias a Ericsson una serie de ejemplos y un producto que promete hacer que el 5G llegue a cualquier rincón.
        </p>
        <a class="font-size-9 font-bolder">Visitar Stand</a>
      </div>
    </div>

    <div class="padding-0 md:padding-0" :class="[ this.theaterMode ? 'row row-adjust':'col-3 md:col-12 md:row']">
      <div v-for="(card, index) in actionCards" :key="index" :class="[ theaterMode ? 'col-3 md:col-6 xs:col-12':'col-12 md:col-6 xs:col-12']">
        <a :href="card.route">
          <ActionCard :name="card.name" :featured="card.featured" :bg="card.bg" :icon="card.icon"/>
        </a>
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
          featured: true,
          name: "Printo",
          bg: require("@/assets/printo.png"),
          route: 'https://exhibicion-expocibao.webflow.io/3g-stand-s/brio-eventos',
        },
        {
          name: "Sala de exhibicion",
          bg: "https://images.unsplash.com/photo-1518998053901-5348d3961a04",
          icon: 'presentation-plus',
          route: 'https://exhibicion-expocibao.webflow.io/exhibicion-1'
        },
        {
          name: "Sesiones",
          bg: "https://images.unsplash.com/photo-1591616369924-833532b76ebc",
          icon: 'users-alt'
        },
        {
          name: "Mensajes",
          bg: "https://images.unsplash.com/photo-1611746869696-d09bce200020",
          icon:'comments-alt'
        },
      ],
    };
  },
};
</script>