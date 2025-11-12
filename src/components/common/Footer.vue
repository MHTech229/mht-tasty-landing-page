<template>
  <footer class="w-full bg-transparent py-16 text-white flex flex-col items-center">
    <div
      class="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-8 lg:ustify-items-center justify-items-start"
    >
      <!-- Logo et description -->
      <div class="flex flex-col items-start text-left w-fit">
        <div class="flex items-center gap-3 mb-5">
          <img src="@/assets/svgs/logo.svg" alt="Logo Image" class="w-10 h-10" />
          <h1 class="text-2xl font-bold">Tasty</h1>
        </div>
        <p class="text-gray-300 leading-relaxed">
          We’re serious about food <br />
          delivery and quality.
        </p>
      </div>

      <!-- About Us -->
      <div class="flex flex-col items-start text-left w-fit">
        <h3 class="text-lg font-semibold mb-4">About Us</h3>
        <ul class="space-y-2">
          <li class="hover:text-gray-400 cursor-pointer transition-colors duration-200">Our Story</li>
          <li class="hover:text-gray-400 cursor-pointer transition-colors duration-200">Careers</li>
          <li class="hover:text-gray-400 cursor-pointer transition-colors duration-200">Press</li>
        </ul>
      </div>

      <!-- Our Services -->
      <div class="flex flex-col items-start text-left w-fit">
        <h3 class="text-lg font-semibold mb-4">Our Services</h3>
        <ul class="space-y-2">
          <li class="hover:text-gray-400 cursor-pointer transition-colors duration-200">Pricing</li>
          <li class="hover:text-gray-400 cursor-pointer transition-colors duration-200">Discounts</li>
          <li class="hover:text-gray-400 cursor-pointer transition-colors duration-200">Shipping Mode</li>
        </ul>
      </div>

      <!-- Our Company -->
      <div class="flex flex-col items-start text-left w-fit ">
        <h3 class="text-lg font-semibold mb-4">Our Company</h3>
        <ul class="space-y-2">
          <li class="hover:text-gray-400 cursor-pointer transition-colors duration-200">Blog</li>
          <li class="hover:text-gray-400 cursor-pointer transition-colors duration-200">About Us</li>
          <li class="hover:text-gray-400 cursor-pointer transition-colors duration-200">Our Mission</li>
        </ul>
      </div>
    </div>

    <!-- Ligne de séparation -->
    <div class="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-400 w-full">
      © 2025 Tasty. All rights reserved.
    </div>
  </footer>
</template>

<script lang="ts" setup></script>

<style scoped></style>
