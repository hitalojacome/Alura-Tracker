<template>
    <div class="box has-text-weight-bold">
        <!-- O que tiver dentro do componente será exibido aqui! -->
        <slot></slot>
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
    background: #FAF0CA;
}
</style>