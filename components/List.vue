<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="bg-white overflow-hidden sm:rounded-md mt-10 mb-14">

    <div class="mx-2 mt-4 shadow flex rounded-md">
      <input class="w-full rounded p-2" type="text" placeholder="Search...">
      <button class="bg-white w-auto flex justify-end items-center text-amber-500 p-2 hover:text-amber-400">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </button>
    </div>

    <div class="flex">
      <button class="bg-white w-auto flex justify-end items-center text-amber-500 p-2 hover:text-amber-400">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      </button>
    </div>

    <ul role="list" class="divide-y divide-gray-200">
      <li
        class="m-2 rounded-sm shadow-md border-2 border-gray-100"
        v-for="church in churches"
        :key="church.basic_info.name"
        @click="onClickListItem(church)"
      >
        <!-- Church location tag-->
        <div class="flex mx-3 my-5px flex-wrap p-1">
          <div class="m-1 px-2 bg-pink-100 text-pink-500 font-thin py-1 text-sm rounded-lg">
            {{church.basic_info.country}}
          </div>
          <div class="m-1 px-2 bg-blue-100 text-blue-500 font-thin py-1 text-sm rounded-lg">
            {{church.basic_info.province}}
          </div>
        </div>
        
        <div class="flex items-center px-4 pt-2 pb-2 sm:px-6">
          <!-- Basic Info -->
          <div class="min-w-0 flex md:grid md:grid-cols-2 md:gap-4">
            <!-- Church Image -->
            <div class="flex flex-shrink-0 justify-center items-center">
              <img
                class="h-14 w-14 rounded-full"
                :src="church.img_url"
                alt=""
              />
            </div>
            
            <div class="mx-3">
              <!-- Church Name -->
              <p class="text-sm font-medium text-indigo-600 truncate">
                {{ church.basic_info.name }}
              </p>

              <!-- Location / Language -->
              <p class="flex items-center text-sm text-gray-500">
                <span>{{ church.basic_info.city }}</span>
                <span class="mx-2">|</span>
                <span>{{ church.basic_info.languages[0] }}</span>
              </p>

              <!-- Distance -->
              <p class="flex items-center text-sm text-gray-500">
                <span> 6.5km </span>
              </p>

              <!-- Service Time -->
              <p class="flex items-center text-sm text-gray-500">
                <span class="mr-2">崇拜時間:</span>
                <span class="truncate">
                  {{ church.services[0].weekday }}
                  {{ church.services[0].start_time }} ({{
                    church.services[0].languages[0]
                  }})
                </span>
              </p>
            </div>

            <hr />
          </div>

          <!-- Bookmark button -->
          <!-- <div class="">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
            </svg>
          </div> -->
        </div>

        <!-- Tags -->
        <hr class="mx-4"></hr>
        <div class="flex mx-2 my-1 flex-wrap p-1">
          <div class="m-1 px-2 bg-gray-100 text-gray-500 font-thin py-1 text-sm rounded-lg" 
            v-for="activity in church.activities"
            >
            {{activity}}
          </div>
        </div>
        <!-- </div> -->
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      
    }
  },
  methods:{
    onClickListItem(church){
      console.log('onClickListItem',church);
      this.$router.push('/church');
      this.$store.commit('setChurch', church)
    }
  },
  computed: {
    churches() {
      return this.$store.state.churches;
    }
  }
}
</script>
