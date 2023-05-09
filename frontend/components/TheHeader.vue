<template>
    <nav id="navbar" class="relative z-10 w-full text-neutral-800">
      <div class="flex flex-col max-w-screen-xl px-8 mx-auto lg:items-center lg:justify-between lg:flex-row py-4">
        <div class="flex flex-col lg:flex-row items-center space-x-4 xl:space-x-8">
          <div class="w-full flex flex-row items-center justify-between py-6">
            <div>
              <NuxtLink to="/">Stories</NuxtLink>
              <!-- <img :src="require('~/assets/img/anis.jpg')" class="w-24 xl:w-28" alt="Anis Logo" /> -->
               <img src ="~/assets/img/anis.jpg" class="w-24 xl:w-28" alt="Anis Logo" />
            </div>
            <button class="rounded-lg lg:hidden focus:outline-none focus:shadow-outline" @click="open = !open">
              <SegmentIcon v-if="!open" :size="24" />
              <CloseIcon v-else :size="24" />
            </button>
          </div>
          <ul
            :class="[open ? 'flex' : 'hidden lg:flex']"
            class="w-full h-auto flex flex-col flex-grow lg:items-center pb-4 lg:pb-0 lg:justify-end lg:flex-row origin-top duration-300 xl:space-x-2 space-y-3 lg:space-y-0"
          >
            <NavLink name="Stories" url="#" />          
            <NavLink name="Image" url="#" />
            <NavLink name="About" url="#" />
          </ul>
        </div>
        <div :class="[open ? 'flex' : 'hidden lg:flex']" class="space-x-3">
          <NuxtLink to="/login"><Button class="px-8 xl:px-10 py-3 mt-2 bg-inherit text-gradient border border-[#0c66ee]">
            Login
          </Button></NuxtLink>
          <NuxtLink to="/register"><Button class="px-8 xl:px-10 py-3 mt-2 bg-gradient-to-r from-[#468ef9] to-[#0c66ee] text-white">
            Sign Up
          </Button></NuxtLink>
        </div>
      </div>
    </nav>
  </template>
<script lang="ts">
  export default {
    name: 'BaseNavbar',
    data() {
      return {
        open: false,
        dropdownNavbar: false,
      }
    },
    methods: {
      dropdownToggler () {
        this.dropdownNavbar = !this.dropdownNavbar
      }
    }
  }
  
</script>
<style scoped>
.router-link-active {
  @apply font-bold;
}
</style>