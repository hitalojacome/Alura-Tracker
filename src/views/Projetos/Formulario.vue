<template>
  <section>
    <form @submit.prevent="salvar">
      <div class="field">
        <label for="nomeDoProjeto" class="label"> Nome do Projeto </label>
        <input type="text" class="input" v-model="nomeDoProjeto" id="nomeDoProjet" />
      </div>
      <div class="field">
        <button class="button" type="submit">Salvar</button>
      </div>
    </form>
  </section>
</template>

<script lang="ts">
import { useStore } from "@/store"
import { defineComponent, ref } from "vue"
import { useRouter } from "vue-router"
import useNotificador from "@/hooks/notificador"
import { ALTERAR_PROJETO, CADASTRAR_PROJETO } from "@/store/tipo-acoes"
import { TipoNotificacao } from "@/interfaces/INotificacao"

export default defineComponent({
  name: "FormularioX",
  props: {
    id: {
      type: String,
    },
  },
  setup(props) {
    const { notificar } = useNotificador()
    const router = useRouter()
    const store = useStore()
    const nomeDoProjeto = ref("")

    const lidarComSucesso = () => {
      nomeDoProjeto.value = "";
      notificar(
        TipoNotificacao.SUCESSO,
        "Excelente!",
        "O projeto foi cadastrado com sucesso!"
      );
      router.push("/projetos");
    }

    const salvar = () => {
      if (props.id) {
        store.dispatch(ALTERAR_PROJETO, {
          id: props.id,
          nome: nomeDoProjeto.value,
        }).then(() => lidarComSucesso());
      } else {
        store
          .dispatch(CADASTRAR_PROJETO, nomeDoProjeto.value)
          .then(() => lidarComSucesso());
      }
    }

    if (props.id) {
      const projeto = store.state.projeto.projetos.find(
        (proj) => proj.id == props.id
      );
      nomeDoProjeto.value = projeto?.nome || "";
    }

    return {
      nomeDoProjeto,
      salvar
    }
  }
})
</script>