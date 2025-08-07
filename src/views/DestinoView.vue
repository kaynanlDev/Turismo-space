<script setup>
import DestinoSub from '@/components/DestinoSub.vue';

</script>
<template>
    <div class="w-3/4 h-screen my-0 mx-auto px-6">
        <DestinoSub />
        <div class="flex gap-8 h-full  items-center justify-center">
            <div class="w-3/6"><img src="../assets/DestinationMoon.png" alt="Moon"></div>
            <div class="w-3/6">
                <ul class="flex items-center gap-8">
                    <li class="font-barlow-c text-base text-blue uppercase tracking-[0.125rem] cursor-pointer">lua</li>
                    <li class="font-barlow-c text-base text-blue uppercase tracking-[0.125rem] cursor-pointer">marte</li>
                    <li class="font-barlow-c text-base text-blue uppercase tracking-[0.125rem] cursor-pointer">europa</li>
                    <li class="font-barlow-c text-base text-blue uppercase tracking-[0.125rem] cursor-pointer">titan</li>
                </ul>
                <h1 class="font-bellefair text-[6.25rem] uppercase">lua</h1>
                <p class="font-barlow text-[1.125rem] leading-[180%] text-blue pb-10 border-b-1 border-[#ffffff25]">
                   Veja o nosso planeta como você nunca viu antes. Uma viagem relaxante perfeita para recuperar
                   a perspectiva e voltar revigorado. Enquanto estiver por lá, absorva um pouco da história visitando
                   os locais de pouso da Luna 2 e da Apollo 11.
                </p>
                <div class="mt-10 flex justify-between">
                    <div>
                        <h6 class="mb-3 font-barlow-c text-[0.875rem] tracking-[0.125rem] uppercase text-blue">distância média</h6>
                        <p class="font-bellefair text-[1.75rem] uppercase">384,400 km</p>
                    </div>
                    <div>
                        <h6 class="mb-3 font-barlow-c text-[0.875rem] tracking-[0.125rem] uppercase text-blue">Tempo estimado de viagem</h6>
                        <p class="font-bellefair text-[1.75rem] uppercase">3 dias</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style>

</style>