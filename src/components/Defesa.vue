<template>
    <div class="box has-text-weight-bold">
        <div class="columns">
            <div class="column">
                {{defesa.Nome}}
            </div>
            <div class="column">
                {{defesa.Curso}}
            </div>
            <div class="column">
                {{defesa.Programa}}
            </div>
            <div class="column">
                {{defesa.Data}}
            </div>
            <div class="column">
                {{defesa.Ordem}}
            </div>
            <!-- <div class="column">
                <Cronometro :tempoEmSegundos="defesa.curso" />
            </div> -->
        </div>
    </div>
</template>
  
<script lang="ts">
import { defineComponent, PropType } from "vue";
import IDefesa from "@/interfaces/IDefesa";

export default defineComponent({
    name: "DefesaSalva",
    // components: {
    //     Cronometro,
    // },
    props: {
        defesa: {
            type: Object as PropType<IDefesa>,
            required: true
        }
    }    
})
</script>

<style scoped>
.box {
    background: #FAF0CA;
}
</style>