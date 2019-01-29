<template>
  <ul class="navigator">
    <li v-for="(list,index) in navigatorList" :key="index">
      <img :src="list.pic" alt=""/>
    </li>
  </ul>
</template>
<script>

export default {
  name: "Navigator",
  props: {
    navigatorList: Array
  }
}
</script>
<style lang="scss">
@import url("./index.scss");
</style>