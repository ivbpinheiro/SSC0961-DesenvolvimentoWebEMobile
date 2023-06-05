<template>
  <v-menu 
      offset-y v-model="dropdownOpen" 
      :close-on-content-click="false"
      location="start">
    <template v-slot:activator>
      <div class="d-flex align-start">
        <v-sheet class="ma-2">
          Filtrar:
        </v-sheet>
        <v-sheet class="ma-2">
          <v-btn prepend-icon="mdi-filter-outline" variant="tonal" color="#0d3b66"  @click="toggleDropdown">
            Ano / curso
          </v-btn>
        </v-sheet>
      </div>
    </template>

    <v-card class="mx-auto" max-width="400">
      <v-card-text>
        <h2 class="text-h6 mb-2">
          Curso
        </h2>

        <v-chip-group v-model="cursosSelecionados" column mandatory>
          <v-chip
            v-for="opcao in cursos"
            :key="opcao.value"
            :value="opcao.value"
            filter
            variant="outlined"
          >
            {{ opcao.text }}
          </v-chip>
        </v-chip-group>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn 
            color="#0d3b66" 
            variant="text" 
            @click="resetarCursosSelecionados"
          >
            Limpar
          </v-btn>
          <v-btn
            color="#0d3b66"
            variant="text"
            @click="dropdownOpen = false, buscarCurso()"
          >
            Buscar
          </v-btn>
      </v-card-actions>
      </v-card-text>

      <v-card-text>
        <h2 class="text-h6 mb-2">
          Ano
        </h2>

        <v-chip-group column multiple>
          <v-switch label="Ordem crescente" v-model="porAnoCrescente" inset></v-switch>
        </v-chip-group>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn 
            color="#0d3b66" 
            variant="text" 
            @click="resetarAno"
          >
            Limpar
          </v-btn>
          <v-btn
            color="#0d3b66"
            variant="text"
            @click="dropdownOpen = false"
          >
            Buscar
          </v-btn>
      </v-card-actions>
      </v-card-text>      
    </v-card> 
  </v-menu>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      dropdownOpen: false,
      cursosSelecionados: null,
      cursos: [
        { text: 'Mestrado (ME)', value: 'ME' },
        { text: 'Doutorado (DO)', value: 'DO' },
        { text: 'Doutorado Direto (DD)', value: 'DD' },
      ],
      porAnoCrescente: false,
    };
  },
  emits: ['aoBuscarCurso', 'aoMudarOrdem'],
  methods: {
    buscarCurso() {      
      this.$emit('aoBuscarCurso', this.cursosSelecionados)            
    },
    toggleDropdown() {
      this.dropdownOpen = !this.dropdownOpen;
    },
    resetarCursosSelecionados() {
      this.cursosSelecionados = null;
    },
    resetarAno() {
      this.porAnoCrescente = false;
    },
  },
});
</script>
