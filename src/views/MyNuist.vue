<template>
  <div class="nuisthome">
    <video loop="loop" autoplay="autoplay">
      <source src="../assets/nuist.mp4" type="video/mp4" />
    </video>
  </div>
</template>

<script>
export default {
  name: 'MyNuist',
}
</script>

<style scoped>
.nuisthome {
  width: 100vw;
  height: 100vh;
}

video {
  width: 100%;
  height: 100%;
  object-fit: fill;
  z-index: -9999;
}
</style>
