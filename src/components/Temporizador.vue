<template>
    <section class="is-flex is-align-items-center is-justify-content-space-around">
        <!--Chama o componente 'Cronometro' passando o tempo em segundos para a propriedade tempoEmSegundos-->
        <Cronometro :tempoEmSegundos="tempoEmSegundos" />

        <!-- Ao clicar executa a função iniciar dos métodos -->
        <!-- Recupera o valor do estado -->
        <button class="button" @click="iniciar" :disabled="cronometroRodando">
            <span class="icon">
                <i class="fas fa-play"></i>
            </span>
            <span>play</span>
        </button>

        <!-- Ao clicar executa a função finalizar dos métodos -->
        <!-- Recupera o valor contrário do estado -->
        <button class="button" @click="finalizar" :disabled="!cronometroRodando">
            <span class="icon">
                <i class="fas fa-stop"></i>
            </span>
            <span>stop</span>
        </button>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Cronometro from './Cronometro.vue'

export default defineComponent({
    // Nome do componente
    name: 'TemporizadorX',

    // Emissões de eventos
    emits: ['aoFinalizarTarefa'],

    // Componentes utilizados
    components: { Cronometro },
    data() {
        return {
            // Estados
            tempoEmSegundos: 0,
            cronometroRodando: false,
            cronometro: 0
        }
    },
    methods: {
        // Inicia a contagem da tarefa
        iniciar() : void {
            // Altera o valor do estado
            this.cronometroRodando = true
            this.cronometro = setInterval(() => {
                // Atribui um em cada segundo
                this.tempoEmSegundos += 1
            }, 1000)
        },
        // Finaliza a contagem da tarefa
        finalizar() {
            this.$emit('aoFinalizarTarefa', this.tempoEmSegundos)
            this.tempoEmSegundos = 0
            this.cronometroRodando = false
            clearInterval(this.cronometro)
        }
    }
});
</script>

<style scoped>
.button {
  margin-left: 8px;
}
</style>