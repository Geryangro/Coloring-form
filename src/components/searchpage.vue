<template>
  <div id="searchpage">
    <b-img :src="require('../assets/image/beyond.png')"/>
    <b-col md="6" offset-md="3">
        <b-form-input class="input-search" v-model="text1"
                  type="text"
                  placeholder="#Beyondgreatful"></b-form-input>
        <b-button class="btn-search float-right">
            <b-img class="img-search" :src="require('../assets/image/magnifier.png')"/>
        </b-button>
    </b-col>   
    
  </div>
</template>

<script>
export default {
  name: 'searchpage',
  data () {
    return {
      text1: ''
    }
  }
}
</script>

<style scoped>
.black {
    color: #000;
}
#searchpage {
    background-image: url('../assets/image/pagesearch.jpg');
    background-size: 100% 100%;
    height: 665px;
    padding: 20px;
}
#searchpage p {
    margin: 0px;
}
.input-search {
    margin-top: 80px;
    border: 3px solid #E5165A;
    border-radius: 50px 50px 50px 50px;
    font-size: 25px;
    padding: 20px;
}
.input-search:focus {
    outline: none !important;
    border: 3px solid #E5165A;
    box-shadow: 0 0 10px rgb(247, 67, 127);
}
.btn-search {
    margin-top: -45px;
    padding: 8px 30px;
    background-color: #E5165A;
    border: none;
    border-radius: 0px 50px 50px 0px;
}
.btn-search:focus {
    outline: none !important;
    border: none;
    box-shadow: 0 0 10px rgb(247, 67, 127);
}
.btn-search:active {
    outline: none !important;
    border: none;
    box-shadow: 0 0 10px rgb(247, 67, 127);
}
.btn-search:hover {
    outline: none !important;
    border: none;
    box-shadow: 0 0 10px rgb(247, 67, 127);
}
.img-search {
    width: 25px;
}
</style>