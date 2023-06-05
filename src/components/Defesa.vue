<template>
    <div class="container">
        <v-card
        class="rounded-xl"
        max-width="100%"
        variant="outlined"
        elevation="5"
    >
    <v-card-item>
  <div class="d-flex justify-space-between align-center">
    <div>
      <div class="text-overline mb-1">
        {{ defesa.Programa }} - {{ defesa.Curso }}
      </div>
      <div class="text-h6 mb-1">
        {{ defesa.Nome }}
      </div>
      <div class="text-caption">{{ defesa.Data }}</div>
    </div>
    <v-btn
      class="ma-2 ml-auto"
      color="indigo"
      fab
      icon="mdi-eye-outline"
    ></v-btn>
  </div>
</v-card-item>

        </v-card>
    </div>
</template>
  
<script lang="ts">
import { defineComponent, PropType } from "vue";
import IDefesa from "@/interfaces/IDefesa";

export default defineComponent({
    name: "DefesaSalva",
    props: {
        defesa: {
            type: Object as PropType<IDefesa>,
            required: true
        }
    },
})
</script>

<style scoped>
/* .box {
    background: #FAF0CA;
} */
.container {
  margin-bottom: 20px; /* Ajuste o valor conforme o espaçamento desejado */
}

</style>