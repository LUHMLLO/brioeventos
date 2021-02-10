import Vue from "vue";

Vue.mixin({
  data() {
    return {
      theme: {
        primary_color: "color-graphite",
        primary_background: "bg-baby-powder",

        secondary_color: "color-baby-powder",
        secondary_background: "bg-grey-lighten-3",

        accent_background: "bg-blue-darken-4",

        radius: "round-1",
        chip: "bg-grey-lighten-2 font-xs p-5 d-inline-block"
      }
    };
  }
});
//0px 8px 20px rgb(0 0 0 / 6%) dribble box shadow
