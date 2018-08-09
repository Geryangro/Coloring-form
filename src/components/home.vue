<template>
  <div id="home">
    <b-col md="12" class="home"></b-col>
    <b-col md="12" class="waktu"></b-col>
    <b-col md="12" class="hadiah"></b-col>
    <b-col md="12" class="pendaftaraan"></b-col>
    <b-col md="12" class="video">
        <div v-if="$resize && $mq.above(992)">
            <youtube :video-id="videoId" player-width="800" player-height="400" :player-vars="{autoplay: 0}"></youtube>
        </div>
        <div v-else>
            <youtube :video-id="videoId" player-width="300" player-height="200" :player-vars="{autoplay: 0}"></youtube>
        </div>
    </b-col>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
      return {
          videoId: 'nc-6T0nWrGc',
      }
  }
}
</script>

<style scoped>
.home {
    background-image: url('../assets/image/home.jpg');
    background-size: 100% 100%;
    height: 660px;
    padding: 20px;
}
.waktu {
    background-image: url('../assets/image/waktu.jpg');
    background-size: 100% 100%;
    height: 796px;
    padding: 20px;
}
.hadiah {
    background-image: url('../assets/image/hadiah.png');
    background-size: 100% 100%;
    height: 645px;
    padding: 20px;
}
.pendaftaraan {
    background-image: url('../assets/image/pendaftaraan.png');
    background-size: 100% 100%;
    height: 586px;
    padding: 20px;
    margin-top: -70px;
}
.video {
    background-image: url('../assets/image/video.png');
    background-size: 100% 100%;
    height: 846px;
    padding: 20px;
    margin-top: -50px;
}
</style>