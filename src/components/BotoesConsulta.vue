<template>
    <section class="is-flex is-align-items-center is-justify-content-space-between">      
      <Botao @clicado="iniciar" icone="fas fa-receipt" texto="Recarregar lista" />
    </section>
  </template>  

<script lang="ts">
import { defineComponent } from 'vue'

import Botao from './ControladorBotao.vue'
const BotoesConsulta = defineComponent({
    name: 'BotoesConsulta',
    emits: ["aoConsultar"],
    components: {        
        Botao
    },
    methods: {
        iniciar() {
            this.$emit('aoConsultar')            
        },
    }
})
export default BotoesConsulta;
</script>