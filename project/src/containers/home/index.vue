<template>
  <div>
    <cube-slide class="carousel" ref="slide" :data="carouselList">
      <cube-slide-item v-for="(item, index) in carouselList" @click.native="clickHandler(item, index)" :key="index">
        <a :href="item.url"><img :src="item.image" class="img-resposive"></a>
      </cube-slide-item>
    </cube-slide>
    <Navigator :navigatorList="navigatorList"></Navigator>
    <DropDown :dropdownList="dropdownList" :dropdownTitle="dropdownTitle"></DropDown>
  </div>
</template>
<script>
import Navigator from "comp/navigator"
import DropDown from "comp/dropdown"

import { getNavigatorList, getCarouselList, getDropDownList } from "api/home";

export default {
  name: "Home",
  data() {
    return {
      navigatorList: [],
      carouselList: [],
      dropdownTitle: [],
      dropdownList: []
    }
  },
  created() {
    this._getNavigatorList()
    this._getCarouselList()
    this._getDropDownList()
  },
  methods: {
    init(dropdownData) {
      dropdownData.length > 0 && dropdownData.forEach((item, index) => {
        this.dropdownTitle.push(item.name)
        this.dropdownList.push({
          flag: false,
          index: index,
          children: item.children
        })
      })
    },
    _getNavigatorList() {
      getNavigatorList().then(res => {
        this.navigatorList = res;
      })
    },
    _getCarouselList() {
      getCarouselList().then(res => {
        this.carouselList = res;
      })
    },
    _getDropDownList() {
      getDropDownList().then(res => {
        this.init(res)
      })
    }
  },
  components: {
    Navigator,
    DropDown
  }
}

</script>
<style>
.carousel {
  height: 112px;
}

</style>
