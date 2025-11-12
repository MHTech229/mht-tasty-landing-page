<template>
  <div class="w-screen h-auto flex flex-col justify-start items-start text-start relative">
    <!-- 🔹 Loader -->
    <transition name="fade">
      <div
        v-if="isLoading"
        class="fixed inset-0 flex flex-col justify-center items-center bg-black text-white z-50"
      >
        <div class="w-14 h-14 border-4 border-t-transparent border-primary rounded-full animate-spin mb-4"></div>
        <p class="text-lg font-medium">Loading...</p>
      </div>
    </transition>

    <!-- 🔹 Content -->
    <div v-show="!isLoading" class="w-full">
      <NavBar />
      <main
        class="mx-auto p-4 flex flex-col justify-start items-center text-center w-full my-12"
      >
        <Header />
        <Services />
        <About />
        <PremiumMenu />
        <Discount />
        <NewArrivals />
        <Newsletter />
      </main>
      <Footer />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";

const isLoading = ref(true);

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 2000);
});
</script>

<style scoped>
/* 🔸 Animation d'apparition/disparition du loader */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
