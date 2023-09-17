<template>
  <div
    class="flex items-end justify-center w-screen h-screen from-blue-100 via-blue-50 to-yellow-50 bg-gradient-to-r font-display sm:items-center"
  >
    <div
      class="container items-center px-10 pt-16 pb-32 sm:pb-0 lg:px-0 sm:max-w-4xl"
    >
      <div class="p-4 rounded-md shadow-inner">
        <div class="grid grid-cols-4 p-10 text-indigo-900 rounded-md shadow-md">
          <div class="border border-gray-500 rounded-sm">1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
        </div>
      </div>
      <div>
        <h1
          class="pb-10 text-3xl antialiased tracking-widest text-center text-indigo-900"
        >
          The world's first independent developer and distributor of video
          console games &amp; one of the largest third party video game
          publishers in the world.
        </h1>
      </div>

      <div class="flex justify-center w-full">
        <button
          type="button"
          class="inline-flex items-center px-12 py-3 text-xl font-semibold text-gray-700 uppercase transition duration-150 ease-in-out bg-gray-200 border border-gray-300 rounded-md shadow-inner sm:text-lg focus:text-gray-800 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          @click="modalOpen = true"
        >
          Learn More
        </button>

        <promo-modal :show="modalOpen" @close="modalOpen = false" />
      </div>
    </div>
  </div>
</template>

<script></script>
