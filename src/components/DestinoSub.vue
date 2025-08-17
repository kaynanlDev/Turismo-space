<script setup>
import { defineProps } from 'vue';

defineProps({
    destinSub: String,
    destinNum: Number,
})
</script>
<template>
    <h3 class="mt-12 mb-6 font-barlow-c text-base sm:text-[1.25rem] md:text-[1.75rem] uppercase tracking-[0.25rem] text-center sm:text-start"><span class="mr-6 font-bold opacity-25">{{ destinNum }}</span>{{ destinSub }}</h3>
</template>