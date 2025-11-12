<template>
    <section id="menu" class="w-full h-auto mt-24 flex justify-center items-center text-center flex-col px-4 md:px-0 space-y-12">
        <h2 class="text-4xl font-bold" data-aos="fade-up">Premium Menu</h2> 
        <div class="w-full md:w-3/4 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-items-center mt-8">
            <div v-for="(food, i) in PremiumFoods" :key="i" class="flex flex-col justify-start items-center text-center gap-6 p-6">
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

import food1 from '@/assets/imgs/food_1.webp';
import food2 from '@/assets/imgs/food_2.webp';
import food3 from '@/assets/imgs/food_3.webp'; 
import food4 from '@/assets/imgs/food_4.webp';
import food5 from '@/assets/imgs/food_5.webp';
import food6 from '@/assets/imgs/food_6.webp';


const PremiumFoods = [
    {
        imgSrc: food1,
        title: 'Grilled Chicken',
        category: 'Main Course',
        price: '$12.99',
    },
    {
        imgSrc: food2,
        title: 'Caesar Salad',
        category: 'Appetizer',
        price: '$8.99',
    },
    {
        imgSrc: food3,
        title: 'Spaghetti Bolognese',
        category: 'Main Course',
        price: '$14.99',
    },
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
        title: 'Lemonade',
        category: 'Beverage',
        price: '$3.99',
    },
];
</script>
<style scoped>
    
</style>