<template>
    <div class="box has-text-weight-bold" :style="estilos">        
        <slot><!-- O que tiver dentro do componente será exibido aqui! --></slot>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent ({
    name: 'BoxX',
    data() {
        return {
            estilos: {
                color: '#000',
                background: '#FAF0CA'
            }
        }
    }
})

</script>