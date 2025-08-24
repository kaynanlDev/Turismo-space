<script setup>
import { defineProps } from 'vue';

defineProps({
    btnName: String
})
</script>

<template>
    <button class="font-barlow-c text-[0.875rem] sm:text-base text-blue uppercase tracking-[0.125rem] hover:opacity-50 transition-opacity duration-200 ease-in cursor-pointer">{{ btnName }}</button>
</template>