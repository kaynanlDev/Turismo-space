<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import logo from "@/assets/logo.svg";
</script>

<template>
  <header>
    <div>
      <RouterLink to="/"><img :src="logo" alt="logotipo"></RouterLink>
    </div>
      <nav>
        <RouterLink to="/">00 Home</RouterLink>
        <RouterLink to="/about">01 Destino</RouterLink>
        <RouterLink to="/about">02 Equipe</RouterLink>
        <RouterLink to="/about">03 Tecnologia</RouterLink>
      </nav>
  </header>
  <h1>ola</h1>
  <RouterView />
</template>
<style>
body{
  width: 100%;
  height: 100vh;
  background: url('./assets/back-1.png')no-repeat center / cover;
}
</style>
