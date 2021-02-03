<template>
  <section :class="[ this.theaterMode ? '':'row row-adjust']">
    
    <div :class="[ this.theaterMode ? 'offset-right-25 offset-left-25 margin-bottom-15 ':'col-9 md:col-12' ]">
      <div class="bg-black height-500 video-wrapper w-100 h-100">
        <video src="@/assets/demoStream.webm" autoplay muted></video>
      </div>
      <div class="w-100 padding-x-20 padding-y-10 bg-grey-darken-4 color-baby-powder d-flex align-content-center">
        <div class="d-flex align-content-center padding-x-5 bg-white-fade-1-hover round-1 cursor-pointer" @click="toggleTheaterMode()">          
          <i class="uil uil-panorama-h margin-right-5"></i>
          <span class="font-size-8">theater mode</span>
        </div>
      </div>
      <div class="depth-1-grey-lighten-3" :class="[ this.theaterMode ? 'padding-x-25 padding-y-15':'padding-15']">        
        <h6 class="font-size-14 margin-bottom-10 padding-bottom-10 border-bottom-solid">5G connectivity revolution</h6>
        <p class="font-size-8 margin-bottom-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quia possimus natus reiciendis quidem saepe sequi dolor aspernatur omnis autem nulla rem sit, ratione nobis commodi quibusdam quos temporibus modi!
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam nihil esse enim assumenda provident fugiat autem, nisi quo. Animi officia nihil magni? Optio expedita excepturi cupiditate? Aperiam, consectetur? Reiciendis, debitis?
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi optio provident temporibus possimus a dolore est dicta magnam veniam, dolorem et necessitatibus sint quaerat quod in sed! Id, nostrum saepe!
        </p>
        <a class="font-size-9 font-bolder">Visit Stand</a>
      </div>
    </div>

    <div class="padding-0 md:padding-0" :class="[ this.theaterMode ? 'row row-adjust':'col-3 md:col-12 md:row']">
      <div v-for="(card, index) in actionCards" :key="index" :class="[ theaterMode ? 'col-3 md:col-6 xs:col-12':'col-12 md:col-6 xs:col-12']">
        <ActionCard :name="card.name" :featured="card.featured" :bg="card.bg" :icon="card.icon"/>
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
          icon: 'presentation-plus'
        },
        {
          name: "Sessions",
          bg: "https://images.unsplash.com/photo-1591616369924-833532b76ebc",
          icon: 'users-alt'
        },
        {
          name: "Messages",
          bg: "https://images.unsplash.com/photo-1611746869696-d09bce200020",
          icon:'comments-alt'
        },
      ],
    };
  },
};
</script>