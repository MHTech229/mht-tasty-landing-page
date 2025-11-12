<template>
    <div class="flex justify-center items-center text-center w-full fixed top-0 left-0 bg-black z-50 px-4 md:px-12">
        <nav class="w-full hidden md:flex justify-around items-center py-4">
            <div class="flex justify-center items-center text-center gap-2.5" data-aos="zoom-in-in">
                <img src="@/assets/svgs/logo.svg" alt="Logo Image" class="w-8 h-8"/>
                <h1 class="text-2xl  text-white font-bold">Tasty</h1>
            </div>
            <div class="flex justify-center items-center text-center gap-x-8">
                <ul class="flex justify-center items-center text-center gap-8">
                    <li>
                        <a class="text-white  hover:text-primary-foreground cursor-pointer transition duration-300" href="#" data-aos="fade-in">Home</a>
                    </li>
                    <li>
                        <a class="text-white   hover:text-primary-foreground cursor-pointer transition duration-300" href="#about" data-aos="fade-in">About</a>
                    </li>
                    <li>
                        <a class="text-white  hover:text-primary-foreground cursor-pointer transition duration-300" href="#menu" data-aos="fade-in">Menu</a>
                    </li>
                    <li>
                        <a class="text-white   hover:text-primary-foreground cursor-pointer transition duration-300" href="#new" data-aos="fade-in">New</a>
                    </li>
                </ul>
                <Button class="text-white rounded-2xl cursor-pointer" data-aos="zoom-in">
                    Support
                </Button>
            </div>
        </nav>
        <nav class="w-full flex md:hidden justify-between items-center py-4">
            <div class="flex justify-center items-center text-center gap-2.5">
                <img src="@/assets/svgs/logo.svg" alt="Logo Image" class="w-8 h-8"/>
                <h1 class="text-2xl  text-white font-bold">Tasty</h1>
            </div>
            <div class="flex flex-col bg-black justify-start items-start text-start gap-10 w-full absolute z-50 top-16 left-0 p-6 transition-all ease-in-out duration-500" :class="isOpened ? 'opacity-100 visible' : 'opacity-0 invisible'">
                <ul class="flex flex-col justify-start items-start text-start gap-4 w-full">
                    <li class="flex justify-center items-center w-full" @click="isOpened = false">
                        <a class="w-full px-8 py-4 bg-gray-600 text-white cursor-pointer rounded-sm hover:bg-primary" href="#">Home</a>
                    </li>
                    <li class="flex justify-center items-center w-full" @click="isOpened = false">
                        <a class="w-full px-8 py-4 bg-gray-600 text-white cursor-pointer rounded-sm hover:bg-primary" href="#menu">Menu</a>
                    </li>
                    <li class="flex justify-center items-center w-full" @click="isOpened = false">
                        <a class="w-full px-8 py-4 bg-gray-600 text-white cursor-pointer rounded-sm hover:bg-primary" href="#about">About</a>
                    </li>
                    <li class="flex justify-center items-center w-full" @click="isOpened = false">
                        <a class="w-full px-8 py-4 bg-gray-600 text-white cursor-pointer rounded-sm hover:bg-primary" href="#new">New</a>
                    </li>
                </ul>
                <Button class="text-white rounded-md cursor-pointer w-full py-6">
                    Support
                </Button>
            </div>
            <Button class="absolute top-4 right-4"  @click="isOpened = !isOpened">
                <MenuIcon class="w-12 h-12 transition-all ease-in-out duration-500 text-white" v-if="!isOpened"/>
                <CloseIcon class="w-12 h-12 transition-all ease-in-out duration-500 text-white" v-else />
            </Button>
        </nav>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';


const isOpened = ref(false);

</script>
<style>
    
</style>