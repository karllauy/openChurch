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

    <div class="flex rounded-md">
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
      churches: [
        {
          img_url:
            'https://resources.openchurch.com/openchurch-1012112-CC0-matt-mclean-253049-PREVIEW.jpg',
          basic_info: {
            name: 'ABC Church',
            lat: 22.48661464351065,
            long: 35.5,
            phone: '+123475629374',
            website: 'https://www.acbchurch.org',
            email: 'church@abcchurch.org',
            country: 'Hidden',
            province: 'Hidden',
            city: 'Kowloon Tong',
            postcode: 'Hidden',
            denomination: 'Evangelical',
            leader: 'B',
            address: 'somewhere in the world',
            whatsapp: '+123475629374',
            languages: ['English', 'Mandarin'],
          },
          services: [
            {
              languages: ['Eng', '普'],
              weekday: 'Sun',
              start_time: '10:00:00',
              end_time: '11:30:00',
              max_people: 100,
              mode: 'In Person',
            },
          ],
          activities: ['Child', 'Teens', 'Adult', 'Small group'],
          remarks: 'Please contact the church leaders for location',
        },

        {
          img_url:
            'https://resources.openchurch.com/openchurch-1012112-CC0-matt-mclean-253049-PREVIEW.jpg',
          basic_info: {
            name: 'CMA Living Stones Church',
            lat: 22.48661464351065,
            long: 114.14475246187553,
            phone: '+85226718532',
            website: 'https://cmals.org.hk/',
            email: 'office@cmals.org.hk',
            country: 'Hong Kong',
            province: 'Hong Kong',
            city: 'Fanling',
            postcode: '',
            denomination: 'Evangelical',
            leader: 'Leung Tsz Yung',
            address: '粉嶺一鳴路23號牽晴間6座',
            whatsapp: '+85255362902',
            languages: ['Cantonese'],
          },
          services: [
            {
              languages: ['粵'],
              weekday: 'Sun',
              start_time: '09:00:00',
              end_time: '10:30:00',
              max_people: 50,
              mode: 'In Person',
            },
            {
              languages: ['粵'],
              weekday: 'Sun',
              start_time: '11:00:00',
              end_time: '12:30:00',
              max_people: 50,
              mode: 'In Person',
            },
            {
              languages: ['粵'],
              weekday: 'Sat',
              start_time: '17:00:00',
              end_time: '18:30:00',
              max_people: 50,
              mode: 'In Person',
            },
            {
              languages: ['粵'],
              weekday: 'Sun',
              start_time: '09:00:00',
              end_time: '10:30:00',
              max_people: 50,
              mode: 'In Person',
            },
          ],
          activities: [
            'Child',
            'Adult',
            'Small group',
            'Prayer Meeting',
            'Summer camp',
            'Mission Trip',
          ],
          remarks: '',
        },

        {
          img_url:
            'https://www.tccc.ca/wordpress/wp-content/uploads/2020/01/45th-mural-scaled.jpg',
          basic_info: {
            name: 'Toronto Christian Community Church',
            lat: 43.821978571268694,
            long: -79.32863676931458,
            phone: '+19054777533',
            website: 'http://www.tccc.ca/',
            email: 'admin@tccc.ca',
            country: 'Canada',
            province: 'Ontario',
            city: 'Markham',
            postcode: 'L3R 5A2',
            denomination: 'Evangelical',
            leader: 'Rev. Jonathan Chan',
            address: '100 Acadia Avenue, Markham, ON L3R 5A2',
            whatsapp: '',
            languages: ['English', 'Cantonese', 'Mandarin'],
          },
          services: [
            {
              languages: ['Eng'],
              weekday: 'Sun',
              start_time: '10:30:00',
              end_time: '',
              max_people: '',
              mode: 'Online',
            },
            {
              languages: ['粵'],
              weekday: 'Sun',
              start_time: '08:15:00',
              end_time: '',
              max_people: '',
              mode: 'Online',
            },
            {
              languages: ['粵'],
              weekday: 'Sat',
              start_time: '11:15:00',
              end_time: '',
              max_people: '',
              mode: 'Online',
            },
            {
              languages: ['普'],
              weekday: 'Sun',
              start_time: '09:40:00',
              end_time: '',
              max_people: 50,
              mode: 'Online',
            },
          ],
          activities: [
            'Child',
            'Teens',
            'Adult',
            'Youth worship',
            'Small group',
            'Prayer Meeting',
            'Summer camp',
            'Mission Trip',
          ],
          remarks: '',
        },
        {
          img_url:
            'https://resources.openchurch.com/openchurch-1012112-CC0-matt-mclean-253049-PREVIEW.jpg',
          basic_info: {
            name: 'EFG Church',
            lat: 22.48661464351065,
            long: 35.5,
            phone: '+123475629374',
            website: 'https://www.acbchurch.org',
            email: 'church@abcchurch.org',
            country: 'Hidden',
            province: 'Hidden',
            city: 'Kowloon Tong',
            postcode: 'Hidden',
            denomination: 'Evangelical',
            leader: 'B',
            address: 'somewhere in the world',
            whatsapp: '+123475629374',
            languages: ['English', 'Mandarin'],
          },
          services: [
            {
              languages: ['Eng', '普'],
              weekday: 'Sun',
              start_time: '10:00:00',
              end_time: '11:30:00',
              max_people: 100,
              mode: 'In Person',
            },
          ],
          activities: ['Child', 'Teens', 'Adult', 'Small group'],
          remarks: 'Please contact the church leaders for location',
        },

        {
          img_url:
            'https://resources.openchurch.com/openchurch-1012112-CC0-matt-mclean-253049-PREVIEW.jpg',
          basic_info: {
            name: 'CWB Chinese Church',
            lat: 22.48661464351065,
            long: 114.14475246187553,
            phone: '+85226718532',
            website: 'https://cmals.org.hk/',
            email: 'office@cmals.org.hk',
            country: 'Hong Kong',
            province: 'Hong Kong',
            city: 'Fanling',
            postcode: '',
            denomination: 'Evangelical',
            leader: 'Leung Tsz Yung',
            address: '粉嶺一鳴路23號牽晴間6座',
            whatsapp: '+85255362902',
            languages: ['Cantonese'],
          },
          services: [
            {
              languages: ['粵'],
              weekday: 'Sun',
              start_time: '09:00:00',
              end_time: '10:30:00',
              max_people: 50,
              mode: 'In Person',
            },
            {
              languages: ['粵'],
              weekday: 'Sun',
              start_time: '11:00:00',
              end_time: '12:30:00',
              max_people: 50,
              mode: 'In Person',
            },
            {
              languages: ['粵'],
              weekday: 'Sat',
              start_time: '17:00:00',
              end_time: '18:30:00',
              max_people: 50,
              mode: 'In Person',
            },
            {
              languages: ['粵'],
              weekday: 'Sun',
              start_time: '09:00:00',
              end_time: '10:30:00',
              max_people: 50,
              mode: 'In Person',
            },
          ],
          activities: [
            'Child',
            'Adult',
            'Small group',
            'Prayer Meeting',
            'Summer camp',
            'Mission Trip',
          ],
          remarks: '',
        },

        {
          img_url:
            'https://www.tccc.ca/wordpress/wp-content/uploads/2020/01/45th-mural-scaled.jpg',
          basic_info: {
            name: 'Kowloon Community Church',
            lat: 43.821978571268694,
            long: -79.32863676931458,
            phone: '+19054777533',
            website: 'http://www.tccc.ca/',
            email: 'admin@tccc.ca',
            country: 'Canada',
            province: 'Ontario',
            city: 'Markham',
            postcode: 'L3R 5A2',
            denomination: 'Evangelical',
            leader: 'Rev. Jonathan Chan',
            address: '100 Acadia Avenue, Markham, ON L3R 5A2',
            whatsapp: '',
            languages: ['English', 'Cantonese', 'Mandarin'],
          },
          services: [
            {
              languages: ['Eng'],
              weekday: 'Sun',
              start_time: '10:30:00',
              end_time: '',
              max_people: '',
              mode: 'Online',
            },
            {
              languages: ['粵'],
              weekday: 'Sun',
              start_time: '08:15:00',
              end_time: '',
              max_people: '',
              mode: 'Online',
            },
            {
              languages: ['粵'],
              weekday: 'Sat',
              start_time: '11:15:00',
              end_time: '',
              max_people: '',
              mode: 'Online',
            },
            {
              languages: ['普'],
              weekday: 'Sun',
              start_time: '09:40:00',
              end_time: '',
              max_people: 50,
              mode: 'Online',
            },
          ],
          activities: [
            'Child',
            'Teens',
            'Adult',
            'Youth worship',
            'Small group',
            'Prayer Meeting',
            'Summer camp',
            'Mission Trip',
          ],
          remarks: '',
        },
      ],
    }
  },
  methods:{
    onClickListItem(church){
      console.log('onClickListItem',church);
      this.$router.push('/church');
      this.$store.commit('setChurch', church)
    }
  }
}
</script>
