<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import logo from "@/assets/logo.svg";
import line from "@/assets/line.svg"
import menu from "@/assets/menu.svg"
</script>

<template>
  <header class="w-full pt-10 sm:pt-0 md:pt-10 pl-10 flex items-center justify-between">
    <div>
      <RouterLink to="/" class="w-3/4"><img :src="logo" alt="logotipo"></RouterLink>
    </div>
    <div class="line hidden mr-[-20%] z-2 xl:block " ><img :src="line" alt=""></div>
    <nav class="w-[80%] md:w-3/6 lg:w-3/7 py-6 bg-[#ffffff17] hidden sm:flex md:flex items-center justify-center gap-9 backdrop-blur-lg">
      <RouterLink to="/" class="font-barlow-c uppercase"><span class="font-bold">00</span> Home</RouterLink>
      <RouterLink to="/about" class="font-barlow-c uppercase"><span class="font-bold">01</span> Destino</RouterLink>
      <RouterLink to="/about" class="font-barlow-c uppercase"><span class="font-bold">02</span> Equipe</RouterLink>
      <RouterLink to="/about" class="font-barlow-c uppercase"><span class="font-bold">03</span> Tecnologia</RouterLink>
    </nav>
    <button class="sm:hidden pr-8 cursor-pointer"><img :src="menu" alt="icon menu"></button>
  </header>
  <RouterView />
</template>
<style>

body{
  width: 100%;
  height: 100vh;
  background: url('./assets/back-1.jpg')no-repeat center / cover;
  color: #fff;
}

@media screen and (max-width: 48rem) {
  body{
    background: url('./assets/back-mobile.jpg')no-repeat center / cover;
    width: 100%;
    height: 100vh;
  }
}
</style>
