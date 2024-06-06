<!-- HTML estilizado com bulma -->
<template>
  <main class="columns is-gapless is-multiline" :class="{ 'modo-escuro': modoEscuroAtivo }">
    <div class="column is-one-quarter">
      <BarraLateral @aoTemaAlterado="trocarTema" />
    </div>

    <div class="column is-three-quarter conteudo">
      <Formulario @aoSalvarTarefa="salvarTarefa" />
      <div class="lista">
        <div>
          <!-- Para cada tarefa na lista de tarefas, atribui a tarefa para props tarefa -->
          <Tarefa v-for="(tarefa, index) in tarefas" :key="index" :tarefa="tarefa" />
          <Box v-if="listaEstaVazia">
            Você não está muito produtivo hoje :(
          </Box>
        </div>
      </div>
    </div>
  </main>
</template>

<!-- Script TS -->
<script lang="ts">
import { defineComponent } from 'vue';

// Importação de componentes
import BarraLateral from './components/BarraLateral.vue'
import Formulario from './components/Formulario.vue'
import Tarefa from './components/Tarefa.vue'
import Box from './components/Box.vue'
import ITarefa from './interfaces/ITarefa';

export default defineComponent({
  // Nome do componente
  name: 'App',
  // Componentes utilizados
  components: {
    BarraLateral,
    Formulario,
    Tarefa,
    Box
  },
  // Propriedade computada
  computed: {
    listaEstaVazia(): boolean {
      return this.tarefas.length === 0
    }
  },
  data() {
    return {
      // Define uma lista de objetos ITarefa
      tarefas: [] as ITarefa[],
      modoEscuroAtivo: false
    }
  },
  methods: {
    // Recebe uma tarefa passada pelo Formulario e adiciona a lista
    salvarTarefa(tarefa: ITarefa) {
      this.tarefas.push(tarefa)
    },
    trocarTema(modoEscuroAtivo: boolean) {
      this.modoEscuroAtivo = modoEscuroAtivo
    }
  }
});
</script>

<style scoped>
.lista {
  padding: 1.25rem;
}

main {
  --bg-primario: #fff;
  --texto-primario: #000;
}

main.modo-escuro {
  --bg-primario: #2b2d42;
  --texto-primario: #ddd;
}

.conteudo {
  background-color: var(--bg-primario);
}
</style>
