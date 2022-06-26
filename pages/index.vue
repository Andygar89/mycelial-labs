<template>
  <div
    class="flex items-end justify-center w-screen h-screen  font-display sm:items-center hero"
  >
    <div
      class="container items-center px-10 pt-16 pb-32  sm:pb-0 lg:px-0 sm:max-w-4xl"
    >
      <h1
        class="pb-10 text-3xl antialiased tracking-widest text-center text-white "
      >
        The world's first independent developer and distributor of video console
        games &amp; one of the largest third party video game publishers in the
        world.
      </h1>

      <div class="flex justify-center w-full">
        <button
          type="button"
          class="inline-flex items-center px-12 py-3 text-xl font-semibold text-gray-700 uppercase transition duration-150 ease-in-out bg-gray-200 border border-gray-300 shadow-inner  sm:text-lg focus:text-gray-800 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          @click="modalOpen = true"
        >
          Learn More
        </button>

        <promo-modal :show="modalOpen" @close="modalOpen = false" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      modalOpen: false,
    }
  },
}
</script>

<style scoped>
.hero {
  background-image: url('assets/images/hero_desktop.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: cover;
}

@media (max-width: 640px) {
  .hero {
    background: url('assets/images/hero_mobile.jpg');
    background-position: center;
    background-size: cover;
    height: cover;
  }
}
</style>
