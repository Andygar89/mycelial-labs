<template>
  <div
    class="fixed inset-0 z-10 overflow-y-auto"
    :style="isTransitioning ? 'z-index: 10' : 'z-index: -1'"
  >
    <div class="flex items-center justify-center min-h-screen">
      <transition
        enter-active-class="duration-300 ease-out"
        enter-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="duration-200 ease-in"
        leave-class="opacity-100"
        leave-to-class="opacity-0"
        @before-enter="isTransitioning = true"
        @after-leave="isTransitioning = false"
      >
        <div
          v-show="show"
          class="fixed inset-0 transition-opacity"
          aria-hidden="true"
          @click="close"
        >
          <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
          <div class="absolute top-0 right-0 flex justify-end">
            <button
              aria-label="Close panel"
              class="mt-2 text-gray-800 transition duration-150 ease-in-out sm:mr-2 lg:mr-4 lg:mt-4 text-cool-gray-300 hover:text-gray-900"
              @click="close"
            >
              <svg
                class="w-12 h-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </transition>

      <!-- This element is to trick the browser into centering the modal contents. -->
      <span
        class="hidden sm:inline-block sm:align-middle sm:h-screen"
        :aria-hidden="show"
        >&#8203;</span
      >
      <transition
        enter-active-class="duration-300 ease-out"
        enter-class="translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95"
        enter-to-class="translate-y-0 opacity-100 sm:scale-100"
        leave-active-class="duration-200 ease-in"
        leave-class="translate-y-0 opacity-100 sm:scale-100"
        leave-to-class="translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95"
      >
        <div
          v-show="show"
          key="modal"
          class="inset-0 items-center justify-center mx-2 sm:mx-4 w-full h-80 overflow-hidden align-middle transition-all transform rounded-md shadow-xl md:w-200 md:h-112.5 sm:my-8"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
          @click.stop
        >
          <iframe
            v-if="show"
            class="w-full h-full"
            src="https://www.youtube.com/embed/zlnvEKOzDZM"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      isTransitioning: false,
    }
  },

  beforeMount() {
    const escpaeHandler = (e) => {
      if (e.key === 'Escape' && this.show) {
        this.close()
      }
    }

    document.addEventListener('keydown', escpaeHandler)

    this.$once('hook:destroyed', () => {
      document.removeEventListener('keydown', escpaeHandler)
    })
  },

  methods: {
    close() {
      this.$emit('close')
    },
  },
}
</script>
