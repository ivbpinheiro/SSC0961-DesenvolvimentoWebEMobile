<template>
    <div class="box">
        <div class="columns">
            <div class="column is-8" role="form" aria-label="Consulte o nome do aluno">
                <input type="text" class="input" placeholder="Consulte o nome do aluno" v-model="filtro" @keydown="filtrarLista">
            </div>
            <div class="column">
                <Botoes @aoConsultar="mostrarLista" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Botoes from './BotoesConsulta.vue';

const FormularioConsulta = defineComponent({
    name: 'FormularioConsulta',
    emits: ['aoConsultarLista', 'aoFiltrarLista'],
    components: {
        Botoes
    },
    data() {
        return {
            filtro: ''
        }
    },
    methods: {
        mostrarLista(): void {
            this.$emit('aoConsultarLista')
        },
        filtrarLista(): void {
            this.$emit('aoFiltrarLista', this.filtro)
        }
    },
})
export default FormularioConsulta
</script>

<style scoped></style>