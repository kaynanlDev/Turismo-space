<script setup>
import { reactive } from 'vue';
import DestinoSub from '@/components/DestinoSub.vue';
import crewA from '@/assets/crew-A.png'
import crewB from '@/assets/crew-B.png'
import crewC from '@/assets/crew-C.png'
import crewD from '@/assets/crew-D.png'

const equipeObj = reactive({
    equipePatente: "comandante",
    equipeName: "Douglas Hurley",
    equipeDescription: "Douglas Gerald Hurley é um engenheiro americano, ex-piloto do Corpo de Fuzileiros Navais e ex-astronauta da NASA. Ele foi lançado ao espaço pela terceira vez como comandante da Crew Dragon Demo-2.",
    equipeImg: crewA
})

function equipeA(){
    equipeObj.equipePatente = "comandante"
    equipeObj.equipeName = "Douglas Hurley"
    equipeObj.equipeDescription = "Douglas Gerald Hurley é um engenheiro americano, ex-piloto do Corpo de Fuzileiros Navais e ex-astronauta da NASA. Ele foi lançado ao espaço pela terceira vez como comandante da Crew Dragon Demo-2."
    equipeObj.equipeImg = crewA
}

function equipeB(){
    equipeObj.equipePatente = "Especialista em Missão"
    equipeObj.equipeName = "MARK SHUTTLEWORTH"
    equipeObj.equipeDescription = "Mark Richard Shuttleworth é o fundador e CEO da Canonical, a empresa por trás do sistema operacional Ubuntu baseado em Linux. Shuttleworth se tornou o primeiro sul-africano a viajar ao espaço como turista espacial."
    equipeObj.equipeImg = crewB
}

function equipeC(){
    equipeObj.equipePatente = "piloto"
    equipeObj.equipeName = "Victor Glover"
    equipeObj.equipeDescription = "Piloto do primeiro voo operacional da Crew Dragon da SpaceX para a Estação Espacial Internacional. Glover é comandante da Marinha dos EUA, onde pilota um F/A-18. Ele foi membro da tripulação da Expedição 64 e atuou como engenheiro de voo de sistemas da estação."
    equipeObj.equipeImg = crewC
}

function equipeD(){
    equipeObj.equipePatente = "Engenheiro de voo"
    equipeObj.equipeName = "Anousheh Ansari"
    equipeObj.equipeDescription = "Anousheh Ansari é uma engenheira iraniano-americana e cofundadora da Prodea Systems. Ansari foi a quarta turista espacial autofinanciada, a primeira mulher autofinanciada a voar para a ISS e a primeira iraniana no espaço."
    equipeObj.equipeImg = crewD
}


</script>
<template>
    <div class="w-full md:w-3/4 h-screen my-0 mx-auto px-6 animate-fade">
        <DestinoSub destinSub="conheça sua equipe" destinNum="02"/>
        <div class="flex flex-col lg:flex-row justify-between items-center mt-40">
            <div>
                <h2 class="font-bellefair uppercase text-[1.125rem] sm:text-2xl lg:text-[2rem] opacity-50 text-center lg:text-start">{{ equipeObj.equipePatente }}</h2>
                <h1 class="font-bellefair uppercase text-2xl sm:text-[2.5rem] lg:text-[3.5rem] mt-4 mb-6 text-center lg:text-start">{{ equipeObj.equipeName }}</h1>
                <p class="max-w-3/4 mx-auto lg:mx-0 font-barlow text-[1.125rem] text-blue text-center lg:text-start">
                    {{ equipeObj.equipeDescription }} 
                </p>
                <ul class="flex justify-center lg:justify-start gap-10 mt-10 lg:mt-40 mb-10">
                    <li><button @click="equipeA" class="w-[0.625rem] h-[0.625rem] lg:w-[0.938rem] lg:h-[0.938rem] focus:opacity-[100%] hover:opacity-50 bg-white rounded-full opacity-[17.45%] cursor-pointer transition-opacity duration-300 ease"></button></li>
                    <li><button @click="equipeB" class="w-[0.625rem] h-[0.625rem] lg:w-[0.938rem] lg:h-[0.938rem] focus:opacity-[100%] hover:opacity-50 bg-white rounded-full opacity-[17.45%] cursor-pointer transition-opacity duration-300 ease"></button></li>
                    <li><button @click="equipeC" class="w-[0.625rem] h-[0.625rem] lg:w-[0.938rem] lg:h-[0.938rem] focus:opacity-[100%] hover:opacity-50 bg-white rounded-full opacity-[17.45%] cursor-pointer transition-opacity duration-300 ease"></button></li>
                    <li><button @click="equipeD" class="w-[0.625rem] h-[0.625rem] lg:w-[0.938rem] lg:h-[0.938rem] focus:opacity-[100%] hover:opacity-50 bg-white rounded-full opacity-[17.45%] cursor-pointer transition-opacity duration-300 ease"></button></li>
                </ul>
            </div>
            <div class="w-full h-full" ><img class="w-full h-full" :src="equipeObj.equipeImg" alt="imagem do comandante"></div>
        </div>
    </div>
</template>
<style scoped>
    body{
        background: url('../assets/bg-Crew.jpg')no-repeat center / cover;
        backdrop-filter: brightness(100%);
    }
</style>