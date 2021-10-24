<template>
    <div>
        <top-bar />
        <Search />
        <BottomNavi />
    </div>
</template>

<script>
import Welcome from '../components/search.vue'
import TopBar from '../components/TopBar.vue'
import BottomNavi from '../components/BottomNavi.vue'


export default {
  components: { TopBar, Welcome, BottomNavi },
    
}
</script>
<style>
</style>