<template>
  <div class="home">
    <el-scrollbar height="100vh">
      <div id="page1" class="scrollbar-demo-item">
        <video loop="loop" autoplay="autoplay" muted="muted">
          <source src="../assets/autumn.mp4" type="video/mp4">
          <!-- <source src="../assets/nuist.mp4" type="video/mp4"> -->
        </video>
        <img class="banner" src="../assets/index.png" />
      </div>

      <div id="page2" class="scrollbar-demo-item">
        <div class="intro">

        </div>
      </div>
    </el-scrollbar>
  </div>
</template>



<style scoped>
  .scrollbar-demo-item {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    text-align: center;
    color: var(--el-color-primary);
  }

  #page1{
    position: relative;
  }

  video {
    width: 100%;
    height: 100%;
    object-fit: fill;
    z-index: -9999;
  }

  .banner{
    position: absolute;
    height: 10vh;
    user-select: none;
  }
</style>

<script>
  // @ is an alias to /src


  export default {
    name: 'HomeView',
    components: {

    }
  }
</script>