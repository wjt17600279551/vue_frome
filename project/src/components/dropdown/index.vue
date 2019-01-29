<template>
  <div>
    <div class="dropdown-list">
      <ul class="dropdown-header clearfix">
        <li class="col-xs-4" v-for="( title,index ) in dropdownTitle" @click="changeTab(index,$event)">{{title}}</li>
      </ul>
      <DropDown>
        <div>
          <div class="bg-white" v-for="(list,index ) in dropdownList">
            <template v-if="index===list.index && list.flag">
              <ul class="bdb1">
                <li v-for="item in list.children">
                  <span>{{item.name}}</span>
                </li>
              </ul>
            </template>
          </div>
        </div>
      </DropDown>
    </div>
  </div>
</template>
<script>
import dropdown from "./dropdown.js"

export default {
  name: "Dropdown",
  props: {
    dropdownTitle: Array,
    dropdownList: Array
  },
  methods: {
    changeTab($index, event) {

      this.dropdownList.forEach((item, index) => {
        if ($index === index) {
          item.flag = !item.flag
        } else {
          item.flag = false;
        }

      })
    }
  },
  components: {
    DropDown: dropdown
  }
}

</script>
<style>
.dropdown-list {}

.dropdown-header {
  padding-top: 15px;
  padding-bottom: 15px;
  background-color: #fff;
  border-bottom: 1px solid #ccc;
}

</style>
