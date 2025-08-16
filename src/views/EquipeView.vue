<script setup>
import DestinoSub from '@/components/DestinoSub.vue';
import crewA from '@/assets/crew-A.png'
</script>
<template>
    <div class="w-full md:w-3/4 h-screen my-0 mx-auto px-6 animate-fade">
        <DestinoSub />
        <div class="flex flex-col lg:flex-row justify-between items-center mt-40">
            <div class="">
                <h2 class="font-bellefair uppercase text-[1.125rem] sm:text-2xl lg:text-[2rem] opacity-50 text-center lg:text-start">comandante</h2>
                <h1 class="font-bellefair uppercase text-2xl sm:text-[2.5rem] lg:text-[3.5rem] mt-4 mb-6 text-center lg:text-start">Douglas Hurley</h1>
                <p class="max-w-3/4 mx-auto lg:mx-0 font-barlow text-[1.125rem] text-blue text-center lg:text-start">
                    Douglas Gerald Hurley é um engenheiro americano, ex-piloto do Corpo de Fuzileiros Navais e ex-astronauta da NASA.
                    Ele foi lançado ao espaço pela terceira vez como comandante da Crew Dragon Demo-2. 
                </p>
                <ul class="flex justify-center lg:justify-start gap-10 mt-10 lg:mt-40 mb-10">
                    <li><button class="w-[0.625rem] h-[0.625rem] lg:w-[0.938rem] lg:h-[0.938rem] focus:opacity-[100%] bg-white rounded-full opacity-[17.45%] cursor-pointer"></button></li>
                    <li><button class="w-[0.625rem] h-[0.625rem] lg:w-[0.938rem] lg:h-[0.938rem] focus:opacity-[100%] bg-white rounded-full opacity-[17.45%] cursor-pointer"></button></li>
                    <li><button class="w-[0.625rem] h-[0.625rem] lg:w-[0.938rem] lg:h-[0.938rem] focus:opacity-[100%] bg-white rounded-full opacity-[17.45%] cursor-pointer"></button></li>
                    <li><button class="w-[0.625rem] h-[0.625rem] lg:w-[0.938rem] lg:h-[0.938rem] focus:opacity-[100%] bg-white rounded-full opacity-[17.45%] cursor-pointer"></button></li>
                </ul>
            </div>
            <div class="w-full h-full" ><img class="w-full h-full" :src="crewA" alt="imagem do comandante"></div>
        </div>
    </div>
</template>
<style scoped>
    body{
        background: url('../assets/bg-Crew.jpg')no-repeat center / cover;
        backdrop-filter: brightness(100%);
    }
</style>