<script setup>
import { defineProps } from 'vue';

defineProps({
    numTec: String
})
</script>
<template>
    <button class="font-bellefair flex items-center justify-center w-10 h-10 sm:w-14 sm:h-14 lg:w-[5rem] lg:h-[5rem] border border-[#ffffff25] rounded-full cursor-pointer focus:bg-white focus:text-black hover:opacity-50 transition-all duration-200 ease-in">
        {{ numTec }}
    </button>
</template>