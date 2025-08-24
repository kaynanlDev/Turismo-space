<script setup>
import { reactive } from 'vue';
import BtnTec from '@/components/BtnTec.vue'
import tecA from '@/assets/tecs/tec-a.jpg'
import tecB from '@/assets/tecs/tec-b.jpg'
import tecC from '@/assets/tecs/tec-c.jpg'
import DestinoSub from '@/components/DestinoSub.vue';

const tecObj = reactive({
    tecTitle: "LAUNCH VEHICLE",
    tecDesc: "Um veículo de lançamento ou foguete transportador é um veículo propulsionado por foguete usado para transportar uma carga útil da superfície da Terra para o espaço, geralmente para a órbita terrestre ou além. Nosso foguete transportador WEB-X é o mais potente em operação. Com 150 metros de altura, é uma visão impressionante na plataforma de lançamento!",
    tecImg: tecA
})

function setTecs({title, desc, img}){
    tecObj.tecTitle = title,
    tecObj.tecDesc = desc,
    tecObj.tecImg = img
}

function funTecA(){
    setTecs({
        title: "LAUNCH VEHICLE",
        desc: "Um veículo de lançamento ou foguete transportador é um veículo propulsionado por foguete usado para transportar uma carga útil da superfície da Terra para o espaço, geralmente para a órbita terrestre ou além. Nosso foguete transportador WEB-X é o mais potente em operação. Com 150 metros de altura, é uma visão impressionante na plataforma de lançamento!",
        img: tecA
    })
}

function funTecB(){
    setTecs({
        title: "SPACEPORT",
        desc: "Um espaçoporto ou cosmódromo é um local para lançamento (ou recebimento) de naves espaciais, semelhante ao porto marítimo para navios ou ao aeroporto para aeronaves. Localizado no famoso Cabo Canaveral, nosso espaçoporto está idealmente situado para aproveitar a rotação da Terra para lançamentos.",
        img: tecB
    })
}

function funTecC(){
    setTecs({
        title: "SPACE CAPSULE",
        desc: "Uma cápsula espacial é uma nave espacial frequentemente tripulada que utiliza uma cápsula de reentrada de corpo rombudo para reentrar na atmosfera terrestre sem asas. Nossa cápsula é onde você passará seu tempo durante o voo. Ela inclui uma academia espacial, cinema e muitas outras atividades para mantê-lo entretido.",
        img: tecC
    })
}

</script>
<template>
    <div class="w-full  h-screen my-0 mx-auto lg:pl-[10.313rem] animate-fade">
        <DestinoSub destinSub="lançamentto espacial 101" destinNum="03"/>
        <div class="flex items-center w-ful flex-col-reverse lg:flex-row">
            <div class="w-3/5 flex flex-col lg:flex-row">
                <ul class="h-full mt-8 mb-10 lg:mt-0 lg:mb-0 lg:mr-16 flex items-center justify-center lg:flex-col gap-8">
                    <li @click="funTecA"><BtnTec numTec="1" /></li>
                    <li @click="funTecB"><BtnTec numTec="2" /></li>
                    <li @click="funTecC"><BtnTec numTec="3" /></li>
                </ul>
                <div>
                    <h2 class=" font-bellefair uppercase text-[1.125rem] sm:text-2xl lg:text-[2rem] opacity-50 text-center lg:text-start">a terminologia…</h2>
                    <h1 class="font-bellefair uppercase text-2xl sm:text-[2.5rem] lg:text-[3.5rem] mt-4 mb-6 text-center lg:text-start">{{ tecObj.tecTitle }}</h1>
                    <p class="w-full lg:max-w-3/4 mx-auto lg:mx-0 font-barlow text-[0.938rem] sm:text-base lg:text-[1.125rem] pb-12 lg:pb-0 text-blue text-center lg:text-start">
                        {{ tecObj.tecDesc }}
                    </p>
                </div>
            </div>
            <div class="w-full h-[16.125rem] sm:h-[26.313rem] lg:w-3/7"><img class="w-full h-full" :src="tecObj.tecImg" alt=""></div>
        </div>
    </div>
</template>
<style scoped>
</style>