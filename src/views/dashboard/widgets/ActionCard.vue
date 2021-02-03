<template>
  <div class="padding-25 round-2 overflow-hidden h-100 cursor-pointer">
    <div class="image-wrapper image-background image-blur-2">
      <img :src="bg"/>
      <div class="w-100 h-100 backdrop-blur-12 bg-black-fade-5 p-absolute top left padding-100"></div>
    </div>
    <div class="padding-x-10 padding-y-5 bg-white round-2 d-inline-flex">
      <span class="font-size-8 font-bolder" v-if="this.featured">Partner Spotlight</span>
      <i class="font-size-10 uil uil-comments-alt" v-if="!this.featured"></i>
    </div>
    <h6 class="margin-y-15 color-baby-powder">{{name}}</h6>
    <div class="padding-x-10 padding-y-0 bg-white round-2 d-inline-flex">
      <i class="font-size-10 uil uil-arrow-right margin-0"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ActionCard',
  props:{
    name:{
      type: String
    },
    bg:{
      type: String
    },
    featured:{
      type: Boolean
    },
  }
}
</script>