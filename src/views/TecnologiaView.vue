<script setup>
import tecA from '@/assets/tec-a.jpg'
import tecB from '@/assets/tec-b.jpg'
import tecC from '@/assets/tec-c.jpg'
import DestinoSub from '@/components/DestinoSub.vue';
</script>
<template>
    <div class="w-full  h-screen my-0 mx-auto lg:pl-[10.313rem] animate-fade">
        <DestinoSub destinSub="lançamentto espacial 101" destinNum="03"/>
        <div class="flex items-center w-ful flex-col-reverse lg:flex-row">
            <div class="w-3/5 flex flex-col lg:flex-row">
                <ul class="h-full mt-8 mb-10 lg:mt-0 lg:mb-0 lg:mr-16 flex items-center justify-center lg:flex-col gap-8">
                    <li class="flex items-center justify-center w-10 h-10 sm:w-14 sm:h-14 lg:w-[5rem] lg:h-[5rem] border border-[#ffffff25] rounded-full cursor-pointer"><button>1</button></li>
                    <li class="flex items-center justify-center w-10 h-10 sm:w-14 sm:h-14 lg:w-[5rem] lg:h-[5rem] border border-[#ffffff25] rounded-full cursor-pointer"><button>2</button></li>
                    <li class="flex items-center justify-center w-10 h-10 sm:w-14 sm:h-14 lg:w-[5rem] lg:h-[5rem] border border-[#ffffff25] rounded-full cursor-pointer"><button>3</button></li>
                </ul>
                <div>
                    <h2 class=" font-bellefair uppercase text-[1.125rem] sm:text-2xl lg:text-[2rem] opacity-50 text-center lg:text-start">a terminologia…</h2>
                    <h1 class="font-bellefair uppercase text-2xl sm:text-[2.5rem] lg:text-[3.5rem] mt-4 mb-6 text-center lg:text-start">spaceport</h1>
                    <p class="w-full lg:max-w-3/4 mx-auto lg:mx-0 font-barlow text-[0.938rem] sm:text-base lg:text-[1.125rem] pb-12 lg:pb-0 text-blue text-center lg:text-start">
                        Um espaçoporto ou cosmódromo é um local para lançamento (ou recebimento) de naves espaciais, semelhante
                        ao porto marítimo para navios ou ao aeroporto para aeronaves. Localizado no famoso Cabo Canaveral, nosso
                        espaçoporto está idealmente situado para aproveitar a rotação da Terra para lançamentos.
                    </p>
                </div>
            </div>
            <div class="w-full h-[16.125rem] sm:h-[26.313rem] lg:w-3/7"><img class="w-full h-full" :src="tecA" alt=""></div>
        </div>
    </div>
</template>
<style></style>