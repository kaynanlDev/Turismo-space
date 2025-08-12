<script setup>
function backDestin() {
  document.body.classList.add('backDestin')
}

</script>
<template>
    <div class="w-3/4 h-full my-0 mx-auto flex flex-col items-center lg:flex-row py-32 animate-fade">
        <div class="w-full h-[80%] flex flex-col justify-center">
            <h3 class="w-full font-barlow-c tracking-[0.25rem] text-blue uppercase text-[1rem] sm:text-2xl text-center lg:text-start">então você quer viajar para o</h3>
            <h1 class="w-full text-white font-bellefair uppercase text-[5rem] md:text-[9rem] text-center lg:text-start">espaço</h1>
            <p class="lg:w-[75%] font-barlow text-blue text-[0.938rem] sm:text-[1.125rem] leading-[180%] text-center lg:text-start  lg:mt-0">
                Sejamos realistas: se você quer ir para o espaço, é melhor ir de verdade para o espaço sideral
                e não ficar pairando na borda. Bem, sente-se e relaxe, porque nós lhe daremos uma experiência
                verdadeiramente de outro mundo!
            </p>
        </div>
        <div @click="backDestin" class="w-full sm:w-3/6 h-[80%] flex justify-center  mt-[4rem] md:mt-[6rem] lg:ml-6  lg:justify-end items-center"><router-link to="/destino" class="w-[7.125rem] h-[7.125rem] flex items-center justify-center sm:w-[16rem] sm:h-[16rem] md:w-[17rem] md:h-[17rem] rounded-full bg-white text-black font-bellefair uppercase text-[1.125rem] sm:text-[2rem] cursor-pointer transition duration-[0.3s] ease-in-out hover:ring-40 hover:ring-[#ffffff10]">Explore</router-link></div>   
    </div>
</template>
<style scoped>
.backDestin{
  background: url('./assets/bg-Destin.jpg')no-repeat;
  background-position: center;
  background-size: cover;
  backdrop-filter: brightness(50%);
  color: #fff;
}



</style>