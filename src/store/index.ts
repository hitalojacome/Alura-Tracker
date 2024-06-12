import IProjeto from "@/interfaces/IProjeto"
import INotificacao from "@/interfaces/INotificacao"
import { InjectionKey } from "vue"
import { Store, createStore, useStore as vuexUseStore } from "vuex"
import { ADICIONA_PROJETO, ALTERA_PROJETO, EXCLUIR_PROJETO } from "./tipo-mutacoes"
import { TipoNotificacao } from "@/interfaces/INotificacao"

interface Estado {
    projetos: IProjeto[],
    notificacoes: INotificacao[]
}

export const key: InjectionKey<Store<Estado>> = Symbol()

export const store = createStore<Estado>({
    state: {
        projetos: [],
        notificacoes: [
            {
                id: 1,
                titulo: 'Sucesso' ,
                texto: 'Sucesso',
                tipo: TipoNotificacao.SUCESSO
            },
            {
                id: 2,
                titulo: 'Atenção' ,
                texto: 'Atenção',
                tipo: TipoNotificacao.ATENCAO
            },
            {
                id: 3,
                titulo: 'Falha' ,
                texto: 'Falha',
                tipo: TipoNotificacao.FALHA
            }
        ]
    },
    mutations: {
        [ADICIONA_PROJETO] (state, nomeDoProjeto: string) {
            const projeto = {
                id: new Date().toISOString(),
                nome: nomeDoProjeto
            } as IProjeto

            state.projetos.push(projeto)
        },
        [ALTERA_PROJETO] (state, projeto: IProjeto) {
            const index = state.projetos.findIndex(proj => proj.id == projeto.id)
            state.projetos[index] = projeto
        },
        [EXCLUIR_PROJETO] (state, id: string) {
            state.projetos = state.projetos.filter(proj => proj.id != id)
        }
    }
})

export function useStore(): Store<Estado> {
    return vuexUseStore(key)
}