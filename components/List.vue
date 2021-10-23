<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="bg-white shadow overflow-hidden sm:rounded-md">
    <ul role="list" class="divide-y divide-gray-200">
      <li v-for="church in churches" :key="church.name">
        <a href="" class="block hover:bg-gray-50">
          <div class="flex items-center px-4 py-4 sm:px-6">
            <div class="min-w-0 flex-1 flex items-center">
              <div class="flex-shrink-0">
                <img
                  class="h-12 w-12 rounded-full"
                  :src="church.imageUrl"
                  alt=""
                />
              </div>

              <div class="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                <div>
                  <!-- Church Name -->
                  <p class="text-sm font-medium text-indigo-600 truncate">
                    {{ church.name }}
                  </p>

                  <!-- Location / Language -->
                  <p
                    class="
                      flex
                      items-center
                      text-sm text-gray-500
                      justify-between
                    "
                  >
                    <span class="truncate">{{ church.city }}</span>
                    <span
                      >{{ church.languages[0] }} /
                      {{ church.languages[1] }}</span
                    >
                  </p>

                  <!-- Distance -->
                  <p class="flex items-center text-sm text-gray-500">
                    <span class="truncate"> 6.5km </span>
                  </p>

                  <!-- Service Time -->
                  <p class="flex items-center text-sm text-gray-500">
                    <span class="truncate"> 6.5km </span>
                  </p>
                </div>

                <!-- Tags -->
                <div class=""></div>
              </div>
            </div>
            <div>
              <!-- <ChevronRightIcon
                class="h-5 w-5 text-gray-400"
                aria-hidden="true"
              /> -->
            </div>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import {
  CheckCircleIcon,
  ChevronRightIcon,
  MailIcon,
} from '@heroicons/vue/solid'

export default {
  components: {
    // CheckCircleIcon,
    // ChevronRightIcon,
    // MailIcon,
  },
  data() {
    return {
      churches: [
        {
          name: 'ABC Church',
          email: 'abc.church@example.com',
          imageUrl:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          city: 'Hong Kong',
          languages: ['Cantonese', 'English'],
          services: [
            {
              weekday: 'Sunday',
              time: '10:00',
              languages: ['Cantonese'],
            },
          ],
        },
      ],
    }
  },
}
</script>
