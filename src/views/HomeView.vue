<template>
  <div class="home">
    <el-scrollbar height="100vh">
      <div id="page1" class="scrollbar-demo-item">
        <video loop="loop" autoplay="autoplay" muted="muted">
          <source src="../assets/autumn.mp4" type="video/mp4" />
          <!-- <source src="../assets/nuist.mp4" type="video/mp4"> -->
        </video>
        <router-link to="/weather">
          <img class="icon" src="../assets/home_icon.png" />
        </router-link>
        <img class="banner" src="../assets/index.png" />
      </div>

      <div id="page2" class="scrollbar-demo-item">
        <div class="intro">
          <div class="link">
            <router-link to="/mynuist" style="text-decoration: none">
              Click 解锁四季南信
            </router-link>
          </div>
          <div class="poem">
            <p v-for="item in poem" :key="item">{{ item }}</p>
          </div>
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
}

#page1 {
  position: relative;
}

video {
  width: 100%;
  height: 100%;
  object-fit: fill;
  z-index: -9999;
}

.icon {
  position: absolute;
  right: 5vw;
  top: 4vh;
}

.banner {
  position: absolute;
  height: 10vh;
  user-select: none;
}

.intro {
  position: relative;
  height: 100%;
  width: 100%;
  object-fit: fill;
  background: url(../assets/bg.png);
  background-size: cover;
}

.poem {
  position: absolute;
  font-size: 25px;
  color: aliceblue;
  right: 10vw;
  top: 10vh;
}

.link {
  margin-top: 5vh;
  font-size: 30px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.link > a {
  color: #42b983;
}
</style>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {},
  data() {
    return {
      poem: [
        '春雨惊春清谷天，',
        '夏满芒夏暑相连。',
        '秋处露秋寒霜降，',
        '冬雪雪冬小大寒。',
      ],
    }
  },
}
</script>
