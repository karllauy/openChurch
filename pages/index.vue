<template>
  <div>
    <TopBar />
    <List />
    <BottomNavi />
  </div>
</template>

<script>
import List from '../components/List.vue'
import TopBar from '../components/TopBar'
import BottomNavi from '../components/BottomNavi'

export default {
  components: {
    List,
    TopBar,
    BottomNavi
  },
}
</script>

<style></style>
