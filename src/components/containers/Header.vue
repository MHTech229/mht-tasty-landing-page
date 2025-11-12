<template>
  <section class="w-[90vw] h-[120vh] md:h-[85vh] grid items-center text-white relative">
    <Swiper
      :modules="[Autoplay, Pagination]"
      :autoplay="{ delay: 4000, disableOnInteraction: false }"
      :pagination="{
        clickable: true
      }"
      :loop="true"
      class="w-full relative custom-bullet-swiper"
    >
      <SwiperSlide
        v-for="(slide, i) in HighlightedFoods"
        :key="i"
        class="flex items-center justify-center"
      >
        <div class="w-full grid grid-cols-1 md:grid-cols-2 items-center gap-4">
          <div class="flex w-full justify-center items-center overflow-hidden">
            <img :src="slide.image" alt="Food Img" class="md:w-4/5" />
          </div>
          <div class="flex flex-col justify-start items-start text-start gap-6">
            <span class="text-lg uppercase text-primary"># {{ i + 1 }} of the week</span>
            <h2 class="text-3xl font-bold w-1/11">{{ slide.msgTitle }}</h2>
            <p class="text-md">{{ slide.msgDesc }}</p>
            <a class="bg-primary text-white rounded-md cursor-pointer px-8 py-4" href="#menu">
              View more
            </a>
          </div>
        </div>
      </SwiperSlide>
      

      <!-- ⚡ Ajoute uniquement ce conteneur -->
      <template>
        <div class="swiper-pagination mt-12"></div>
      </template>
    </Swiper>
  </section>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

import Food1 from '@/assets/imgs/header-4.webp'
import Food2 from '@/assets/imgs/header-2.webp'
import Food3 from '@/assets/imgs/header-5.webp'

const HighlightedFoods = [
  {
    msgTitle: 'EAT HEALTHY, BE HEALTHY',
    msgDesc:
      'Fresh ingredients, vibrant flavors, and a burst of nutrition in every bite. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum laudantium voluptates ullam omnis, debitis atque, maxime, sequi aspernatur iste maiores veritatis saepe impedit? Sint, quisquam? Consectetur optio eos quisquam quaerat. ',
    image: Food1
  },
  {
    msgTitle: 'SAVOR THE FLAVOR',
    msgDesc:
      'Indulge in the perfect pairing of a mouthwatering burger and golden fries. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum laudantium voluptates ullam omnis, debitis atque, maxime, sequi aspernatur iste maiores veritatis saepe impedit? Sint, quisquam? Consectetur optio eos quisquam quaerat.',
    image: Food2
  },
  {
    msgTitle: 'FRESH & FLAVORFUL',
    msgDesc:
      'Experience the vibrant taste of garden-fresh vegetables tossed with al dente pasta. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum laudantium voluptates ullam omnis, debitis atque, maxime, sequi aspernatur iste maiores veritatis saepe impedit? Sint, quisquam? Consectetur optio eos quisquam quaerat.',
    image: Food3
  }
]
</script>

<style scoped>
/* 🔹 Styles des bullets avec ::v-deep */
::v-deep(.custom-bullet-swiper .swiper-pagination-bullet) {
  width: 10px;
  height: 10px;
  border-radius: 50%; /* ✅ Rondes pour les inactives */
  background: rgba(255, 255, 255, 0.4);
  opacity: 1;
  margin: 0 6px !important;
  transition: all 0.3s ease;
}

/* 🔸 Bullet active → devient une barre allongée */
::v-deep(.custom-bullet-swiper .swiper-pagination-bullet-active) {
  width: 40px;
  height: 6px;
  border-radius: 4px;
  background: #FFF;
}

::v-deep(.custom-bullet-swiper .swiper-pagination) {
  position: relative !important;
  bottom: 0 !important;
  margin-top: 20px;
}

</style>