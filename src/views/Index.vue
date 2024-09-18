<template>
  <div class="flex w-full gap-5 flex-col lg:flex-row">
    <div class="lg:w-1/2 flex flex-col gap-5">
      <div>
        <div v-if="leftActiveArray.length > 0" class="item-container w-1/2 min-h-[200px]">
          <div
              v-for="(item, index) in leftActiveArray" :key="item"
              class="item"
              @click="leftRemove(item, index)"
          >
            <p class="flex flex-col gap-1 items-start">NAME: <span>{{ item.name }}</span></p>
            <p>ID: {{ item.id }}</p>
          </div>
        </div>

        <div v-else class="item-container w-1/2 min-h-[200px] h-full flex items-center text-lg font-medium">Select items</div>
      </div>

      <div v-if="left" class="item-container">
        <div
            v-for="(item, index) in left" :key="item"
            class="item"
            @click="leftAdd(item, index)"
        >
         <p class="flex flex-col gap-1 items-start">NAME: <span>{{ item.name }}</span></p>
         <p>ID: {{ item.id }}</p>
        </div>
      </div>
    </div>

    <div class="lg:w-1/2 flex flex-col gap-5 items-end">
      <div class="item w-1/2 h-[200px] text-lg font-medium">
        <p v-if="rightActive !== null" class="flex flex-col gap-1 items-start">NAME: <span>{{ right[rightActive].name }}</span></p>
        <p v-if="rightActive !== null">ID: {{ right[rightActive].id }}</p>
        <div v-else>Select item</div>
      </div>

      <div v-if="right" class="item-container">
        <div
            v-for="(item, index) in right" :key="item"
            class="item" :class="{ 'bg-white/10': index === rightActive }"
            @click="rightActive = index"
        >
          <p class="flex flex-col gap-1 items-start">NAME: <span>{{ item.name }}</span></p>
          <p>ID: {{ item.id }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      left: null,
      right: null,

      rightActive: null,
      leftActiveArray: []
    }
  },
  mounted() {
    this.axios.get(this.$getDynamicPath('dataJSON/left.json')).then(res => {
      this.left = res.data;
      console.log(this.left)
    })

    this.axios.get(this.$getDynamicPath('dataJSON/right.json')).then(res => {
      this.right = res.data;
      console.log(this.right)
    })
  },
  methods: {
    leftAdd(item, index) {
      // let has = false
      // this.leftActiveArray.filter(item_ => {
      //   if (item_.id === item.id) has = true
      // })

      // if (!has) this.leftActiveArray.push(item)
      this.leftActiveArray.push(item)
      if (this.leftActiveArray.length > 6) {
        setTimeout(() => this.leftActiveArray.shift(), 0)
      }
      // if (this.leftActiveArray.length > 6) setTimeout(() => this.leftActiveArray.shift(), 0)
    },
    leftRemove(item, index) {
      this.leftActiveArray.splice(index, 1)
    }
  }
}
</script>

<style>
.item-container {
  @apply w-full border-2 border-white flex flex-wrap gap-3 px-3 py-3;
}
.item {
  @apply lg:w-[calc(100%/4-((4*3px)*3)/4)] cursor-pointer hover:bg-white/10 transition-all text-xs h-[100px] flex-col flex border-2 border-white items-start p-2 gap-3 justify-center;
}
</style>