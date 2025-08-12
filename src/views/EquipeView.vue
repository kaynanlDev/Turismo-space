<script setup>
import DestinoSub from '@/components/DestinoSub.vue';
import crewA from '@/assets/crew-A.png'
</script>
<template>
    <div>
        <DestinoSub />
        <div>
            <div>
                <h3>comandante</h3>
                <h2>Douglas Hurley</h2>
                <p>
                    Douglas Gerald Hurley é um engenheiro americano, ex-piloto do Corpo de Fuzileiros Navais e ex-astronauta da NASA.
                    Ele foi lançado ao espaço pela terceira vez como comandante da Crew Dragon Demo-2. 
                </p>
                <ul>
                    <li><button></button></li>
                    <li><button></button></li>
                    <li><button></button></li>
                    <li><button></button></li>
                </ul>
            </div>
            <div><img :src="crewA" alt="imagem do comandante"></div>
        </div>
    </div>
</template>
<style scoped>
    body{
        background: url('../assets/bg-Crew.jpg')no-repeat center / cover;
        backdrop-filter: brightness(100%);
    }
</style>