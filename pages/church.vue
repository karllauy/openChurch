<template>
  <div>
    <!-- Nav Bar -->
    <div class="flex bg-gray-50 h-12 border-2 border-gray-50 shadow-md">
      <div
        class="flex justify-center items-center text-gray-800"
        @click="onClickBackButton"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
      </div>

      <!-- Share button -->
      <div
        class="flex justify-center items-center text-gray-800"
        @click="onClickShareButton"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-8 w-8"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"
          />
        </svg>
      </div>

      <!-- Bookmark button -->
      <div
        class="flex justify-center items-center text-gray-800"
        @click="onClickBookmarkButton"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
          />
        </svg>
      </div>
    </div>

    <!-- Main -->
    <div>
      <div class="flex flex-shrink-0 justify-center items-center">
        <!-- <img class="h-14 w-14 rounded-full" :src="church.img_url" alt="" /> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      //   church,
    }
  },
  methods: {
    onClickBackButton() {
      this.$router.push('/')
    },
    onClickShareButton() {},
    onClickBookmarkButton() {},
  },
  mounted() {
    // console.log(this.$route.params.church)
  },
}
</script>

<style></style>
