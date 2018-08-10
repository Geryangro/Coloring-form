<template>
  <div id="app">
    <b-container class="nopadding" fluid>
      <router-view/>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'hamrimau', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
@font-face {
  font-family: 'hamrimau';
  src: url('assets/font/Harimau.otf');
  font-weight: normal;
  font-style: normal;
}
.green {
  color: #63C4B6;
}
.blue {
  color: #D23D70;
}
.nopadding {
  padding: 0px !important;
}
</style>
