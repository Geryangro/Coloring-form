<template>
  <div id="home">
    <b-carousel v-if="$resize && $mq.above(992)" id="carousel1"
                style="text-shadow: 1px 1px 2px #333;"
                controls
                indicators
                background="#ababab"
                :interval="4000"
                img-width="1024"
                img-height="601"
                v-model="slide"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd">
        <b-carousel-slide class="img-fluid" :img-src="require('../assets/image/slider3.jpg')">
        </b-carousel-slide>
        <b-carousel-slide class="img-fluid" :img-src="require('../assets/image/slider1.jpg')">
        </b-carousel-slide>
        <b-carousel-slide class="img-fluid" :img-src="require('../assets/image/slider2.jpg')">
        </b-carousel-slide>
    </b-carousel>
    <b-carousel v-else id="carousel1"
                style="text-shadow: 1px 1px 2px #333;"
                controls
                indicators
                background="#ababab"
                :interval="4000"
                img-width="480"
                img-height="480"
                v-model="slide"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd">
        <b-carousel-slide class="img-fluid" :img-src="require('../assets/mobile/slider1.jpg')">
        </b-carousel-slide>
        <b-carousel-slide class="img-fluid" :img-src="require('../assets/mobile/slider2.jpg')">
        </b-carousel-slide>
        <b-carousel-slide class="img-fluid" :img-src="require('../assets/mobile/slider3.jpg')">
        </b-carousel-slide>
    </b-carousel>
    <b-col md="12" class="waktu"></b-col>
    <b-col md="12" class="hadiah"></b-col>
    <b-col md="12" class="pendaftaraan"></b-col>
    <b-col md="12" class="video">
        <div class="vid" v-if="$resize && $mq.above(992)">
            <youtube :video-id="videoId" player-width="800" player-height="400" :player-vars="{autoplay: 0}"></youtube>
        </div>
        <div class="vid-mob" v-else>
            <youtube :video-id="videoId" player-width="280" player-height="200" :player-vars="{autoplay: 0}"></youtube>
        </div>
        <a href="/register">
            <b-button class="dftr">
                DAFTAR SEKARANG
            </b-button>
        </a>
    </b-col>
    <footbar />
  </div>
</template>

<script>
import footbar from '@/components/footbar.vue'

export default {
  name: 'home',
  components: {
    footbar
  },
  data () {
      return {
            videoId: 'sYNbTMDl8Cg',
            slide: 0,
            sliding: null
      }
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  }
}
</script>

<style scoped>
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
    background-image: url('../assets/image/daftar.png');
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
.vid {
    margin-top: 210px;
}
.dftr {
    background-color: #F4AF15;
    color: #000;
    border: none;
    padding: 10px 20px;
    width: 700px;
    font-size: 30px;
    margin-top: 110px;
    border-radius: 15px;
    font-weight: 800;
}
@media screen and (max-width:760px) {
    .waktu {
        background-image: url('../assets/mobile/banner2.jpg');
        background-size: 100% 100%;
        height: 350px;
        padding: 20px;
    }
    .hadiah {
        background-image: url('../assets/mobile/banner3.png');
        background-size: 100% 100%;
        height: 450px;
        padding: 20px;
    }
    .pendaftaraan {
        background-image: url('../assets/mobile/banner44.png');
        background-size: 100% 100%;
        height: 500px;
        padding: 20px;
        margin-top: -20px;
    }
    .video {
        background-image: url('../assets/mobile/banner5.png');
        background-size: 100% 100%;
        height: 410px;
        padding: 20px;
        margin-top: -50px;
    }
    .vid-mob {
        margin-top: 100px;
    }
    .dftr {
        width: 100%;
        margin-top: 10px;
        font-size: 16px;
    }
}
</style>