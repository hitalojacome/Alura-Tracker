<template>
    <div class="box has-text-weight-bold">        
        <slot><!-- O que tiver dentro do componente será exibido aqui! --></slot>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent ({
    name: 'BoxX'
})

</script>

<style scoped>
.box {
    color: black;
    background: #FAF0CA;
}
</style>