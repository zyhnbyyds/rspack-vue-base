<script setup lang="ts">
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'

const dd = ref(111)
</script>

<template>
  <div class="fixed top-16 w-56 text-right">
    <Menu as="div" class="relative inline-block text-left">
      <div>
        <MenuButton
          class="inline-flex w-full justify-center rounded-md bg-black/20 px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
        >
          Options
        </MenuButton>
      </div>

      <transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <MenuItems
          class="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none"
        >
          <div class="px-1 py-1">
            <MenuItem v-slot="{ active }">
              <button
                class="group flex w-full items-center rounded-md px-2 py-2 text-sm" :class="[
                  active ? 'bg-violet-500 text-white' : 'text-gray-900',
                ]"
              >
                Edit
              </button>
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <button
                class="group flex w-full items-center rounded-md px-2 py-2 text-sm" :class="[
                  active ? 'bg-violet-500 text-white' : 'text-gray-900',
                ]"
              >
                Duplicate
              </button>
            </MenuItem>
          </div>
          <div class="px-1 py-1">
            <MenuItem v-slot="{ active }">
              <button
                class="group flex w-full items-center rounded-md px-2 py-2 text-sm" :class="[
                  active ? 'bg-violet-500 text-white' : 'text-gray-900',
                ]"
              >
                Archive
              </button>
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <button
                class="group flex w-full items-center rounded-md px-2 py-2 text-sm" :class="[
                  active ? 'bg-violet-500 text-white' : 'text-gray-900',
                ]"
              >
                Move
              </button>
            </MenuItem>
          </div>

          <div class="px-1 py-1">
            <MenuItem v-slot="{ active }">
              <button
                class="group flex w-full items-center rounded-md px-2 py-2 text-sm" :class="[
                  active ? 'bg-violet-500 text-white' : 'text-gray-900',
                ]"
              >
                Delete
              </button>
            </MenuItem>
          </div>
        </MenuItems>
      </transition>

      {{ dd }}
    </Menu>
  </div>
</template>
