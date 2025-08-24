<script setup lang="ts">
import DestinoSub from '@/components/DestinoSub.vue';
import BtnDes from '@/components/BtnDes.vue';
import { reactive } from 'vue';
import DestinationA from '@/assets/destination/Destination-A.png'
import DestinationB from '@/assets/destination/Destination-B.png'
import DestinationC from '@/assets/destination/Destination-C.png'
import DestinationD from '@/assets/destination/Destination-D.png'

const destinObj = reactive({
    planetName: "lua",
    planetDescription: "Veja o nosso planeta como você nunca viu antes. Uma viagem relaxante perfeita para recuperar a perspectiva e voltar revigorado. Enquanto estiver por lá, absorva um pouco da história visitando os locais de pouso da Luna 2 e da Apollo 11.",
    planetDistance: "384,400 km",
    planetTime: "3 dias",
    planetImg: DestinationA
})

interface destinos{
    name: string
    description: string
    distance: string
    time: string
    img: string
}
function setDestination({ name, description, distance, time, img }: destinos) {
    destinObj.planetName = name
    destinObj.planetDescription = description
    destinObj.planetDistance = distance
    destinObj.planetTime = time
    destinObj.planetImg = img
}

function destinA() {
    setDestination({
        name: "lua",
        description: "Veja o nosso planeta como você nunca viu antes. Uma viagem relaxante perfeita para recuperar a perspectiva e voltar revigorado. Enquanto estiver por lá, absorva um pouco da história visitando os locais de pouso da Luna 2 e da Apollo 11.",
        distance: "384,400 km",
        time: "3 dias",
        img: DestinationA
    })
}

function destinB() {
    setDestination({
        name: "marte",
        description: "Não se esqueça de levar suas botas de caminhada. Você precisará delas para encarar o Monte Olimpo, a montanha planetária mais alta do nosso sistema solar. Ela tem duas vezes e meia o tamanho do Everest!",
        distance: "225 MIL. km",
        time: "9 meses",
        img: DestinationB
    })
}

function destinC() {
    setDestination({
        name: "europa",
        description: "A menor das quatro luas galileanas que orbitam Júpiter, Europa é o sonho de qualquer amante do inverno. Com uma superfície gelada, é perfeita para patinação no gelo, curling, hóquei ou simplesmente relaxar na sua aconchegante cabana de inverno.",
        distance: "628 MIL. km",
        time: "3 anos",
        img: DestinationC
    })
}

function destinD() {
    setDestination({
        name: "titan",
        description: "Titã, a única lua conhecida com uma atmosfera densa além da Terra, é um lar longe de casa (apenas algumas centenas de graus mais fria!). Como bônus, você terá vistas impressionantes dos Anéis de Saturno.",
        distance: "1.6 BIL. km",
        time: "7 anos",
        img: DestinationD
    })
}

</script>

<template>
    <div class="w-full md:w-3/4 h-screen my-0 mx-auto px-6 animate-fade">
        <DestinoSub destinSub="escolha seu destino" destinNum="01" />
        <div class=" w-[80%] my-0 mx-auto flex flex-col lg:flex-row gap-8 h-full  items-center justify-center">
            <div class="mt-[100%] lg:mt-0 flex justify-center"><img class="w-full h-full" :src="destinObj.planetImg" alt="Moon"></div>
            <div class="w-full lg:w-3/6 mt-[10%] flex justify-center flex-col">
                <ul class="flex items-center mb-6 md:mb-0 gap-8 justify-center lg:justify-start">
                    <li @click="destinA"><BtnDes btnName="lua" /></li>
                    <li @click="destinB"><BtnDes btnName="marte" /></li>
                    <li @click="destinC"><BtnDes btnName="europa" /></li>
                    <li @click="destinD"><BtnDes btnName="titan" /></li>
                </ul>
                <h1 class="font-bellefair text-[3.5rem] sm:text-[5rem] lg:text-[6.25rem] uppercase text-center lg:text-start">{{ destinObj.planetName }}</h1>
                <p class="my-0 mx-auto w-[75%] md:w-full font-barlow text-[0.938rem] sm:text-base lg:text-[1.125rem] leading-[180%] text-blue pb-10 border-b-1 border-[#ffffff25] text-center lg:text-start ">
                   {{ destinObj.planetDescription }}
                </p>
                <div class="mt-10 flex flex-col sm:flex-row justify-around md:justify-between">
                    <div>
                        <h6 class="mb-3 font-barlow-c text-[0.875rem] tracking-[0.125rem] uppercase text-blue text-center lg:text-start">distância média</h6>
                        <p class="font-bellefair text-[1.75rem] uppercase text-center lg:text-start">{{ destinObj.planetDistance }}</p>
                    </div>
                    <div class="pb-10">
                        <h6 class="mb-3 mt-6 sm:mt-0 font-barlow-c text-[0.875rem] tracking-[0.125rem] uppercase text-blue text-center lg:text-start">Tempo estimado de viagem</h6>
                        <p class="font-bellefair text-[1.75rem] uppercase text-center lg:text-start">{{ destinObj.planetTime }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
    button:focus{
        border-bottom: 2px solid #fff;
    }
</style>