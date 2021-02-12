<template>
  <div class="overflow-hidden" style="padding: 56.25% 0 0 0; position: relative">
    <iframe :src="videoSRC" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen allowtransparency>
    </iframe>
  </div>
</template>
<script>
export default {
  name: "VideoPlayer",
  props: {
    videoSRC: {
      type: String,
      default: "https://player.vimeo.com/video/143418951?autoplay=1&loop=1&color=ffffff&title=1&byline=0&portrait=0"
    }
  },
  mounted() {
    let recaptchaScript = document.createElement("script");
    recaptchaScript.setAttribute("src", "https://player.vimeo.com/api/player.js");
    document.head.appendChild(recaptchaScript);
  }
};
</script>
