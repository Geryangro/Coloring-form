<template>
  <div id="footbar">
    <p v-if="$resize && $mq.above(992)">© 2014 - 2018 PT. Afra Insan Amanah. All Right Reserved.</p>
    <p v-else>© 2018 PT. Afra Insan Amanah. All Right Reserved.</p>
  </div>
</template>

<script>
export default {
  name: 'footbar'
}
</script>

<style scoped>
#footbar {
    padding: 10px;
    background-color: #2F3035;
}
#footbar p {
    color: #ffffff;
    margin: 0px;
}
</style>