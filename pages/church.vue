<template>
  <div>
    <!-- Nav Bar -->
    <div
      class="
        flex
        justify-between
        bg-gray-50
        h-12
        border-2 border-gray-50
        shadow-md
        fixed
        top-0
        w-full
      "
    >
      <!-- Justify left -->
      <div
        class="ml-3 flex justify-center items-center text-gray-800"
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

      <!-- Justify right -->
      <div class="flex justify-center items-center text-gray-800">
        <!-- Bookmark button -->
        <div
          class="mr-3 flex justify-center items-center text-gray-800"
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

        <!-- Share button -->
        <div
          class="mr-3 flex justify-center items-center text-gray-800"
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
      </div>
    </div>

    <!-- Main -->
    <div class="bg-white overflow-hidden sm:rounded-md mt-14 mb-14">
      <!-- Church -->
      <div class="m-3 flex justify-center items-start w-full">
        <!-- Church image -->
        <div class="w-1/3 flex flex-shrink-0 justify-center items-center">
          <img class="h-24 w-24 rounded-full" :src="church.img_url" alt="" />
        </div>

        <div class="ml-2 w-2/3 flex flex-col">
          <!-- Church location tag-->
          <div class="flex flex-wrap">
            <div
              class="
                m-1
                px-2
                bg-pink-100
                text-pink-500
                font-thin
                py-1
                text-sm
                rounded-lg
              "
            >
              {{ church.basic_info.country }}
            </div>
            <div
              class="
                m-1
                px-2
                bg-blue-100
                text-blue-500
                font-thin
                py-1
                text-sm
                rounded-lg
              "
            >
              {{ church.basic_info.province }}
            </div>
          </div>

          <!-- Church name-->
          <p class="mt-2 ml-2 text-xl font-medium text-indigo-600 truncate">
            {{ church.basic_info.name }}
          </p>
        </div>
      </div>

      <!-- <div class="m-4 flex justify-center items-center"> -->
      <!-- Church Image -->
      <!-- <div class="w-1/3 flex flex-shrink-0 justify-center items-center mr-2">
        <img class="h-24 w-24 rounded-full" :src="church.img_url" alt="" />
      </div>

      <div class="w-2/3 flex flex-col">
        <p class="text-xl font-medium text-indigo-600">
          {{ church.basic_info.name }}
        </p>
        <p class=""></p>
      </div> -->

      <!-- Contact -->
      <div class="w-full justify-center items-center flex">
        <!-- WhatsApp -->
        <div class="w-1/5 justify-center items-center flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8"
            viewBox="0 0 24 24"
          >
            <path
              d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"
            />
          </svg>
        </div>

        <!-- Phone -->
        <div class="w-1/5 justify-center items-center flex">
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
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
        </div>

        <!-- Website -->
        <div class="w-1/5 justify-center items-center flex">
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
              d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
            />
          </svg>
        </div>

        <!-- Facebook -->
        <div class="w-1/5 justify-center items-center flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8"
            viewBox="0 0 24 24"
          >
            <path
              d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"
            />
          </svg>
        </div>

        <!-- Instagram -->
        <div class="w-1/5 justify-center items-center flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
            />
          </svg>
        </div>
      </div>

      <!-- Basic Info Details -->
      <div class="my-2 mx-3 flex flex-col shadow-md">
        <!-- Address -->
        <div class="flex justify-between items-center w-full p-2">
          <div class="flex flex-col items-center mx-5 p-1 text-lg">
            <div class="mt-1">{{ church.basic_info.address }}</div>
            <a
              target="_blank"
              :href="
                'https://maps.google.com/?q=' +
                church.basic_info.lat +
                ',' +
                church.basic_info.long
              "
              class="text-gray-600 italic text-sm underline self-start"
              >Get Direction Now</a
            >
          </div>
          <a
            target="_blank"
            :href="
              'https://maps.google.com/?q=' +
              church.basic_info.lat +
              ',' +
              church.basic_info.long
            "
            class="w-16 h-16 bg-gray-100 flex justify-center items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-7 w-7 text-amber-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>

      <!-- Photos -->
      <div class="my-2 mx-3 flex flex-col shadow-md">
        <span class="mx-4 text-lg mt-2">Photos</span>
        <div class="flex flex-wrap mx-4 mt-2 mb-5">
          <img
            class="mx-1 rounded-lg w-24 h-24"
            v-for="img in sampleImages"
            :src="img.url"
            alt="sample image"
          />
        </div>
        <span class="text-amber-500 m-4 font-bold">View all photos</span>
      </div>
    </div>

    <BottomNavi />
  </div>
</template>

<script>
import BottomNavi from '../components/BottomNavi'

export default {
  components: { BottomNavi },
  data() {
    return {
      sampleImages: [
        { id: 1, url: this.$store.state.church.img_url },
        { id: 2, url: this.$store.state.church.img_url },
        { id: 3, url: this.$store.state.church.img_url },
      ],
    }
  },
  methods: {
    onClickBackButton() {
      this.$router.push('/')
    },
    onClickShareButton() {},
    onClickBookmarkButton() {},
  },
  computed: {
    church() {
      return this.$store.state.church
    },
  },
  mounted() {},
}
</script>

<style></style>
