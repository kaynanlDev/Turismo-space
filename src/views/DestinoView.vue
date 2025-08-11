<script setup>
import DestinoSub from '@/components/DestinoSub.vue';
import { reactive } from 'vue';
import DestinationA from '@/assets/Destination-A.png'
import DestinationB from '@/assets/Destination-B.png'
import DestinationC from '@/assets/Destination-C.png'
import DestinationD from '@/assets/Destination-D.png'
const destinObj = reactive({
    planetName: "lua",
    planetDescription: "Veja o nosso planeta como você nunca viu antes. Uma viagem relaxante perfeita para recuperar a perspectiva e voltar revigorado. Enquanto estiver por lá, absorva um pouco da história visitando os locais de pouso da Luna 2 e da Apollo 11.",
    planetDistance: "384,400 km",
    planetTime: "3 dias",
    planetImg: DestinationA
})

function destinA() {
    destinObj.planetName = "lua"
    destinObj.planetDescription = "Veja o nosso planeta como você nunca viu antes. Uma viagem relaxante perfeita para recuperar a perspectiva e voltar revigorado. Enquanto estiver por lá, absorva um pouco da história visitando os locais de pouso da Luna 2 e da Apollo 11."
    destinObj.planetDistance = "384,400 km"
    destinObj.planetTime = "3 dias"
    destinObj.planetImg = DestinationA
}

function destinB() {
    destinObj.planetName = "marte"
    destinObj.planetDescription = "Não se esqueça de levar suas botas de caminhada. Você precisará delas para encarar o Monte Olimpo, a montanha planetária mais alta do nosso sistema solar. Ela tem duas vezes e meia o tamanho do Everest!"
    destinObj.planetDistance = "225 MIL. km"
    destinObj.planetTime = "9 meses"
    destinObj.planetImg = DestinationB
}

function destinC() {
    destinObj.planetName = "europa"
    destinObj.planetDescription = "A menor das quatro luas galileanas que orbitam Júpiter, Europa é o sonho de qualquer amante do inverno. Com uma superfície gelada, é perfeita para patinação no gelo, curling, hóquei ou simplesmente relaxar na sua aconchegante cabana de inverno."
    destinObj.planetDistance = "628 MIL. km"
    destinObj.planetTime = "3 anos"
    destinObj.planetImg = DestinationC
}

function destinD() {
    destinObj.planetName = "titan"
    destinObj.planetDescription = "Titã, a única lua conhecida com uma atmosfera densa além da Terra, é um lar longe de casa (apenas algumas centenas de graus mais fria!). Como bônus, você terá vistas impressionantes dos Anéis de Saturno."
    destinObj.planetDistance = "1.6 BIL. km"
    destinObj.planetTime = "7 years"
    destinObj.planetImg = DestinationD
}
</script>

<template>
    <div class="w-full md:w-3/4 h-screen my-0 mx-auto px-6 animate-fade">
        <DestinoSub />
        <div class=" w-[80%] my-0 mx-auto flex flex-col lg:flex-row gap-8 h-full  items-center justify-center">
            <div class="mt-[100%] lg:mt-0 flex justify-center"><img class="w-full h-full" :src="destinObj.planetImg" alt="Moon"></div>
            <div class="w-full lg:w-3/6 mt-[10%] flex justify-center flex-col">
                <ul class="flex items-center mb-6 md:mb-0 gap-8 justify-center lg:justify-start">
                    <li @click="destinA" class="font-barlow-c text-[0.875rem] sm:text-base text-blue uppercase tracking-[0.125rem] cursor-pointer">lua</li>
                    <li @click="destinB" class="font-barlow-c text-[0.875rem] sm:text-base text-blue uppercase tracking-[0.125rem] cursor-pointer">marte</li>
                    <li @click="destinC" class="font-barlow-c text-[0.875rem] sm:text-base text-blue uppercase tracking-[0.125rem] cursor-pointer">europa</li>
                    <li @click="destinD" class="font-barlow-c text-[0.875rem] sm:text-base text-blue uppercase tracking-[0.125rem] cursor-pointer">titan</li>
                </ul>
                <h1 class="font-bellefair text-[3.5rem] sm:text-[5rem] lg:text-[6.25rem] uppercase text-center lg:text-start">{{ destinObj.planetName }}</h1>
                <p class="my-0 mx-auto w-[75%] md:w-full font-barlow text-[0.938rem] sm:text-base lg:text-[1.125rem] leading-[180%] text-blue pb-10 border-b-1 border-[#ffffff25] text-center lg:text-start ">
                   {{ destinObj.planetDescription }}
                </p>
                <div class="mt-10 flex flex-col sm:flex-row justify-around md:justify-between">
                    <div>
                        <h6 class="mb-3 font-barlow-c text-[0.875rem] tracking-[0.125rem] uppercase text-blue text-center lg:text-start">distância média</h6>
                        <p class="font-bellefair text-[1.75rem] uppercase text-center lg:text-start">384,400 km</p>
                    </div>
                    <div>
                        <h6 class="mb-3 mt-6 sm:mt-0 font-barlow-c text-[0.875rem] tracking-[0.125rem] uppercase text-blue text-center lg:text-start">Tempo estimado de viagem</h6>
                        <p class="font-bellefair text-[1.75rem] uppercase text-center lg:text-start">3 dias</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
body{
    background: url('../assets/bg-Destin.jpg')no-repeat center / cover;
    backdrop-filter: brightness(100%);
}
</style>