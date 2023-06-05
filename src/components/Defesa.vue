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
    @click="selecionarDefesa(defesa)"
  ></v-btn>

  <v-dialog
      transition="dialog-top-transition"
      width="auto"
      v-model="showDefesa"
    >
      <template v-slot:default="{ isActive }">
        <v-card>
          <v-toolbar
            color="#0d3b66"
            :title="defesa.Nome"
          ></v-toolbar>
          <v-card-text>
            <div class="text-h2 pa-12"> Teste</div>
          </v-card-text>
          <v-card-actions class="justify-end">
            <v-btn
              variant="text"
              @click="isActive.value = false"
            >Close</v-btn>
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
  }
})
</script>

<style scoped>
.container {
margin-bottom: 20px; 
}

</style>