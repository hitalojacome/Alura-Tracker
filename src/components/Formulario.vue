<template>
    <div class="box">
        <div class="columns">
            <div class="column is-5" role="form" aria-label="Formulário para iniciar uma nova tarefa">
                <input class="input" type="text" placeholder="Qual tarefa você deseja iniciar?" v-model="descricao" />
            </div>
            <div class="column is-3">
                <div class="select">
                    <select v-model="idProjeto">
                        <option value="">Selecione o projeto</option>
                        <option :value="projeto.id" v-for="projeto in projetos" :key="projeto.id">
                            {{ projeto.nome }}
                        </option>
                    </select>
                </div>
            </div>
            <div class="column">
                <Temporizador @aoFinalizarTarefa="salvarTarefa" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from '@/store';
import Temporizador from './Temporizador.vue';

export default defineComponent({
    name: 'FormularioX',
    emits: ['aoSalvarTarefa'],
    components: { Temporizador },
    data() {
        return {
            descricao: '',
            idProjeto: ''
        }
    },
    methods: {
        // O método recebe o tempo decorrido
        salvarTarefa(tempoEmSegundos: number): void {
            this.$emit('aoSalvarTarefa', {
                duracaoEmSegundos: tempoEmSegundos,
                descricao: this.descricao,
                projeto: this.projetos.find((p) => p.id == this.idProjeto)
            })
            this.descricao = ''
        }
    },
    setup() {
        const store = useStore()
        return {
            projetos: computed(() => store.state.projeto.projetos),
            store
        }
    }
});
</script>

<style scoped>
.button {
    margin-left: 8px;
}

.box {
    background-color: var(--bg-primario);
    color: var(--texto-primario);
}
</style>