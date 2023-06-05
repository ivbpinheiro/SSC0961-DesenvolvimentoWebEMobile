<template>
    <div class="box">
        <div class="columns">
            <div class="column is-8" role="form" aria-label="Consulte o nome do aluno">
                <input type="text" class="input" placeholder="Consulte o nome do aluno" v-model="descricao">
            </div>
            <div class="column">
               <Botoes @aoConsultar="finalizarTarefa" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Botoes from './BotoesConsulta.vue';

const FormularioConsulta = defineComponent({
    name: 'FormularioConsulta',
    emits: ['aoSalvarTarefa'],
    components: {
        Botoes
    },
    data () {
        return {
            descricao: ''
        }
    },
    methods: {
        finalizarTarefa (): void {
            this.$emit('aoSalvarTarefa')
        }
    }    
})
export default FormularioConsulta
</script>

<style scoped></style>