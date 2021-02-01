<template>
  <div class="slider" @pointerdown="pointerDown" @pointermove="pointerMove" @pointerup="pointerUp">
    <!------------------->
      <slot/>
    <!------------------->
  </div>
</template>


<script>
export default {
  name: "Slider",
  data() {
    return {
      isPointer: false,
      startX: null,
      scrollLeft: null,
    };
  },

  methods: {

    pointerDown(e) {
      this.isPointer = true;
      e.target.setPointerCapture(e.pointerId);

      this.startX = e.clientX - e.target.getBoundingClientRect().left;
      this.scrollLeft = e.target.scrollLeft;
    },

    pointerUp(e) {
      this.isPointer = false;
      e.target.releasePointerCapture(e.pointerId);
      e.preventDefault();
      //console.log("pointer up");
    },

    pointerMove(e) {
      if (!this.isPointer) return;
      e.preventDefault();
      const x = e.pageX - e.target.getBoundingClientRect().left;
      const walk = (x - this.startX) * this.startX - this.scrollLeft;

      // Store the previous scroll position
      var prevScrollLeft = e.target.scrollLeft;

      if (e.currentTarget.scrollLeft == prevScrollLeft) {
        e.currentTarget.scrollLeft += prevScrollLeft - walk;
      } else {
        e.currentTarget.scrollLeft += this.scrollLeft - walk;
      }
    },



  },
};
</script>