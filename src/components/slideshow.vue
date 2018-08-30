<template>
  <div id="slideshowpage">
    <b-col class="nopadding" md="12">
      <b-col class="col-slide">
        <div class="colmun-photo">
          <b-col class="colmun-photo-col">
            <div class="colunm-side-photo">
              <b-carousel id="carousel1"
                style="text-shadow: 1px 1px 2px #333;"
                background="#ffffff"
                :interval="3000"
                img-width="600"
                img-height="500"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
                >
                <b-carousel-slide v-for="(item, index) in slide" :key="index">
                    <img slot="img" class="d-block w-100 slot-image" width="600" height="500" :src="item.display_url" alt="image slot">
                    <p class="caption">{{item.caption}}</p>
                </b-carousel-slide>
              </b-carousel>
            </div>
            
          </b-col>
        </div>
      </b-col>
      <div class="">
        <p></p>
      </div>
    </b-col>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'slideshowpage',
  data () {
    return {
      sliding: 0,
      slide: [],   
    }
  },
  created: function() {
    this.dataLoadInstagram();
  },
  methods: {
    dataLoadInstagram: function() {
      var self = this;
      var slide = this.slide;
      axios.get('https://endpoint.hashtag-scraper.afrakids.com/scraper/?hashtag=beyondgreatfulafrakids&type=recent')
      .then(function (response){
        console.log(response);
        self.slide = response.data.result;
      })
      .catch(function (error){
        
      })
    },
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
#slideshowpage {
    height: 662px;
}
.colmun-photo {
  width: 100%;
  border-radius: 30px;
  background-color: #ffffff;
  padding: 0px 0px 20px;
  height: 592px;
}
.col-slide {
  padding: 35px 30px;
  background-color: #62C5B5;
}
.bottom-background {
  background-image: url('../assets/image/space.png');
  background-size: 100% 100%;
  height: 300px;
  padding: 20px;
  width: 100%;
  position: absolute;
  bottom: -2px;
}
#carousel1 {
  z-index: 1;
}
.colmun-photo-col {
  width: 100%;
  padding: 30px 60px;
}
.colunm-side-photo {
  width: 100%;
}
.slot-image {
  border-radius: 20px;
}
.img-slide {
  max-height: 600px !important;
}
.caption {
  color: #000;
}
</style>