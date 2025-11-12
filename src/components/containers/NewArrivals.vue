<template>
    <section id="new" class="w-full h-auto mt-24 flex justify-center items-center text-center flex-col px-4 md:px-0 space-y-12">
        <h2 class="text-4xl font-bold" data-aos="fade-up">New Arrivals</h2> 
        <div class="w-full md:w-3/4 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-items-center mt-8">
            <div v-for="(food, i) in NewArrivals" :key="i" class="w-full relative flex flex-col justify-start items-center text-center gap-6 p-6">
                <span class="absolute top-0 -left-6 bg-primary text-white font-semibold text-md uppercase px-4 py-2">
                    New
                </span>
                <div class="w-32 h-32 flex justify-center items-center text-center overflow-hidden">
                    <img :src="food.imgSrc" alt="Premium Food 1" class="h-full"/>
                </div>
                <div class="flex flex-col justify-center text-center space-y-2">
                    <span class="text-2xl font-semibold text-white">{{ food.title }}</span>
                    <span class="text-gray-200 text-md">{{ food.category }}</span>
                    <span class="text-primary text-sm font-bold mt-4">{{ food.price }}</span>
                </div>
            </div>
        </div>
    </section>
</template>
<script lang="ts" setup>
import food4 from '@/assets/imgs/food_4.webp';
import food5 from '@/assets/imgs/food_5.webp';
import food6 from '@/assets/imgs/food_6.webp';


const NewArrivals = [
    {
        imgSrc: food4,
        title: 'Margherita Pizza',
        category: 'Main Course',
        price: '$10.99',
    },
    {
        imgSrc: food5,
        title: 'Chocolate Lava Cake',
        category: 'Dessert',
        price: '$6.99',
    },
    {
        imgSrc: food6,
        title: 'Caesar Salad',
        category: 'Appetizer',
        price: '$8.99',
    },
];
</script>
<style scoped>
    
</style>