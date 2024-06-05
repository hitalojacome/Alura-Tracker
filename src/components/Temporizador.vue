<template>
    <div class="is-flex is-align-items-center is-justify-content-space-between">
        <Cronometro :tempo-em-segundos="tempoEmSegundos" />
        <button class="button" @click="iniciar">
            <span class="icon">
                <i class="fas fa-play"></i>
            </span>
            <span>play</span>
        </button>
        <button class="button" @click="finalizar">
            <span class="icon">
                <i class="fas fa-stop"></i>
            </span>
            <span>stop</span>
        </button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Cronometro from './Cronometro.vue'

export default defineComponent({
    name: 'TemporizadorX',
    components: { Cronometro },
    data() {
        return {
            tempoEmSegundos: 0,
            cronometro: 0
        }
    },    
    methods: {
        // Inicia a contagem da tarefa
        iniciar() {
            this.cronometro = setInterval(() => {
                // Atribui um em cada segundo
                this.tempoEmSegundos += 1
            }, 1000)
        },
        // Finaliza a contagem da tarefa
        finalizar() {
            clearInterval(this.cronometro)
        }
    }
});
</script>