import { InjectionKey } from "vue"
import { Store, createStore, useStore as vuexUseStore } from "vuex"
import INotificacao from "@/interfaces/INotificacao"
import ITarefa from "@/interfaces/ITarefa"
import { EstadoProjeto, projeto } from "./modulos/projeto"
import { EstadoTarefa, tarefa } from "./modulos/tarefas"
import { NOTIFICAR } from "./tipo-mutacoes"


export interface Estado {
    tarefas: ITarefa[],
    notificacoes: INotificacao[],
    projeto: EstadoProjeto,
    tarefa: EstadoTarefa
}

export const key: InjectionKey<Store<Estado>> = Symbol()

export const store = createStore<Estado>({
    state: {
        tarefas: [],
        notificacoes: [],
        projeto: {
            projetos: []
        },
        tarefa: {
            tarefas: []
        }
    },
    mutations: {
        [NOTIFICAR](state, novaNotificacao: INotificacao) {
            novaNotificacao.id = new Date().getTime()
            state.notificacoes.push(novaNotificacao)

            setTimeout(() => {
                state.notificacoes = state.notificacoes.filter(notificacao => notificacao.id != novaNotificacao.id)
            }, 3000)
        }
    },
    modules: {
        projeto,
        tarefa
    }
})

export function useStore(): Store<Estado> {
    return vuexUseStore(key)
}