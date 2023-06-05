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
      {{ defesa.Programa }} - {{ setCurso(defesa) }}
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
    @click="selecionarDefesa(defesa)"
  ></v-btn>

  <v-dialog
      transition="dialog-top-transition"
      width="auto"
      v-model="showDefesa"
    >
      <template v-slot:default="{ isActive }">
        <v-card>
          <v-toolbar color="#0d3b66">
            <v-app-bar-nav-icon>
              <v-icon color="white">mdi-account-details-outline</v-icon>
            </v-app-bar-nav-icon>
            <v-toolbar-title class="modal-title">Detalhes</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <div class="text-h5"> {{defesa.Nome}}</div>
            <div> <v-icon>mdi-book-education-outline</v-icon>  Curso: {{setCurso(defesa)}}</div>
            <div> <v-icon>mdi-school-outline</v-icon>  Programa: {{defesa.Programa}}</div>
            <div> <v-icon>mdi-calendar-range</v-icon>  Data: {{defesa.Data}}</div>
          </v-card-text>
          <v-card-actions class="justify-end">
            <v-btn
              variant="text"
              @click="isActive.value = false"
            >FECHAR</v-btn>
          </v-card-actions>
        </v-card>
      </template>
    </v-dialog>
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

  data () {
    return {
      showDefesa: false,
    }
  },
  props: {
      defesa: {
        type: Object as PropType<IDefesa>,
        required: true
      },
  },
  methods: {
    selecionarDefesa(defesa: IDefesa): void {
      this.showDefesa = true;
    },
    setCurso(defesa: IDefesa): string {
      if(defesa.Curso == 'ME') return 'Mestrado';
      if(defesa.Curso == 'DD') return 'Doutorado Direto';
      if(defesa.Curso == 'DO') return 'Doutorado';
      return defesa.Curso;
    },
  },
});
</script>

<style scoped>
.container {
  margin-bottom: 20px; 
}
.modal-title {
  color: white;
}

</style>