<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import logo from "@/assets/logo.svg";
import line from "@/assets/line.svg"
import menu from "@/assets/menu.svg"
import close from "@/assets/close.svg"
import { ref } from 'vue';

let openMenu = ref(false)
function backHome() {
  document.body.className = ''
}

function backDestin() {
  document.body.className = 'backDestin'
}

function backCrew() {
  document.body.className = 'backCrew'
}

function backTec() {
  document.body.className = 'backTec'
}

</script>

<template>
  <header class="w-full  pt-10 sm:pt-0 md:pt-10 pl-10 flex items-center justify-between">
    <div>
      <RouterLink to="/" class="w-3/4"><img :src="logo" alt="logotipo"></RouterLink>
    </div>
    <div class="line hidden mr-[-20%] z-2 xl:block " ><img :src="line" alt=""></div>
    <nav class="w-[80%] md:w-[55%] lg:w-3/7 py-6 bg-[#ffffff17] hidden sm:flex md:flex items-center justify-center gap-9 backdrop-blur-lg">
      <RouterLink to="/" @click="backHome" class="font-barlow-c uppercase"><span class="font-bold mr-3">00</span>Home</RouterLink>
      <RouterLink to="/destino" @click="backDestin" class="font-barlow-c uppercase"><span class="font-bold mr-3">01</span>Destino</RouterLink>
      <RouterLink to="/equipe" @click="backCrew" class="font-barlow-c uppercase"><span class="font-bold mr-3">02</span>Equipe</RouterLink>
      <RouterLink to="/tecnologia" @click="backTec" class="font-barlow-c uppercase"><span class="font-bold mr-3">03</span>Tecnologia</RouterLink>
    </nav>
    <button v-if="openMenu === false" @click="openMenu = !openMenu" class="sm:hidden pr-8 cursor-pointer"><img :src="menu" alt="icon menu"></button>
    <div  v-if="openMenu === true"  class="menu-m bg-[#0b0d17fd] min-h-screen absolute pt-8 pr-6 pl-8 top-0 right-px w-3/5 sm:hidden animate-fade">
      <button @click="openMenu  = !openMenu" class="w-full mb-20 flex justify-end cursor-pointer"><img :src="close" alt="icon close"></button>
      <nav class="menu-mobile h-full   flex flex-col gap-8">
        <RouterLink to="/" @click="openMenu = false; backHome()" class="link font-barlow-c uppercase"><span class="font-bold mr-3">00</span>Home</RouterLink>
        <RouterLink to="/destino" @click="openMenu = false; backDestin()" class="font-barlow-c uppercase"><span class="font-bold mr-3">01</span>Destino</RouterLink>
        <RouterLink to="/equipe" @click="openMenu = false; backCrew()" class="font-barlow-c uppercase"><span class="font-bold mr-3">02</span>Equipe</RouterLink>
        <RouterLink to="/tecnologia" @click="openMenu = false; backTec()" class="font-barlow-c uppercase"><span class="font-bold mr-3">03</span>Tecnologia</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</template>
<style>

html,body{
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
}

body{
  background: url('./assets/bg-home.jpg')no-repeat;
  background-position: center;
  background-size: cover;
  backdrop-filter: brightness(50%);
  color: #fff;
}


#app{
  min-height: 100vh;
}

.backDestin{
  background: url('./assets/bg-Destin.jpg')no-repeat;
  background-position: center;
  background-size: cover;
  backdrop-filter: brightness(50%);
  color: #fff;
}

.backCrew{
  background: url('./assets/bg-Crew.jpg')no-repeat;
  background-position: center;
  background-size: cover;
  backdrop-filter: brightness(50%);
  color: #fff;
}
.backTec{
  background: url('./assets/bg-Tec.jpg')no-repeat;
  background-position: center;
  background-size: cover;
  backdrop-filter: brightness(50%);
  color: #fff;
}


</style>
