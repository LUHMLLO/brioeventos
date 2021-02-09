<template>
<div id="Plyr_Video_Player" class="w-100 h-100">
  <iframe
    :src="videoSRC"
    allowfullscreen
    allowtransparency
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    frameborder="0"
  ></iframe>
</div>
</template>
<script>
export default {
  props:{
    videoSRC:{
      type: String,
      default: "https://www.youtube-nocookie.com/embed/bTqVqk7FSmY?controls=0"
    }
  }
};
</script>
