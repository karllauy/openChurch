<template>
  <div
    class="
      bg-yellow-50 bg-opacity-20 bg-auto
      overflow-hidden
      sm:rounded-md
      mt-10
      mb-14
      divide-solid
    "
  >
    <div id="top_button" class="flex bg-white round-md mx-4 my-4 p-3">
      <button
        class="
          h-40
          px-5
          m-3
          text-black
          duration-150
          bg-gray-100 bg-opacity-40
          rounded-lg
          shadow-lg
          w-1/2
          hover:bg-gray-100
        "
      >
        <span class="mr-2">最近我既教會</span>
      </button>
      <button
        class="
          h-40
          px-5
          m-3
          text-black
          duration-150
          bg-gray-100 bg-opacity-40
          rounded-lg
          shadow-lg
          w-1/2
          hover:bg-gray-100
        "
      >
        <span class="mr-2">我想搵人傾下偈</span>
      </button>
    </div>
    <div class="flex flex-col mx-4 my-4 p-3">
      <div class="text-xl">按國家找教會</div>
      <div class="">
        <ul role="button" class="flex overflow-scroll">
          <button
            class="
              h-48
              w-48
              m-1
              rounded-xl
              shadow-md
              border-2 border-gray-100
              flex-shrink-0
            "
            v-for="country in uniqueCountries"
            :key="country"
            @click="onClickListItem()"
          >
            <span class="mr-2">
              {{ country }}
            </span>
          </button>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onClickListItem() {
      this.$router.push('/')
    },
  },
  computed: {
    churches() {
      return this.$store.state.churches
    },
    uniqueCountries() {
      let countries = this.$store.state.churches.map((church) => {
        return church.basic_info.country
      })
      //console.log('country list ', countries);
      let uniqueCountries = countries.filter((value, index, self) => {
        return self.indexOf(value) === index
      })
      //console.log(uniqueCountries)
      return uniqueCountries
    },
  },
}
</script>
