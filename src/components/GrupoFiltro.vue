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
          <v-chip draggable v-if="chipDeAno">
            Por ano ({{porAnoCrescente}})
          </v-chip>
          <v-chip draggable v-if="chipDeCurso">
            Por curso ({{cursosSelecionados}})
          </v-chip>
          <v-btn v-if="porAnoCrescente || cursosSelecionados" variant="text" color="red"  @click="resetarTudo">
            Limpar filtros
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
        <h2 class="text-h6">
          Ano
        </h2>

        <v-chip-group column multiple>
          <v-switch label="Ordem crescente" v-model="isHabilitado" inset></v-switch>
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
            @click="dropdownOpen = false, buscarAno()"
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
      isHabilitado: false,
      dropdownOpen: false,
      cursosSelecionados: null,
      cursos: [
        { text: 'Mestrado (ME)', value: 'ME' },
        { text: 'Doutorado (DO)', value: 'DO' },
        { text: 'Doutorado Direto (DD)', value: 'DD' },
      ],
      porAnoCrescente: null as string | null,
      chipDeCurso: false,
      chipDeAno: false,
    };
  },
  emits: ['aoBuscarCurso', 'aoMudarOrdem', 'aoBuscarAno', 'aoResetarTudo'],
  methods: {
    buscarCurso() {
      this.chipDeCurso = true
      this.chipDeAno = false
      this.$emit('aoBuscarCurso', this.cursosSelecionados)    
    },
    buscarAno() { 
      this.chipDeAno = true
      this.chipDeCurso = false
      this.porAnoCrescente = this.isHabilitado ? 'ASC' : 'DESC';
      this.$emit('aoBuscarAno', this.porAnoCrescente)       
    },
    toggleDropdown() {
      this.dropdownOpen = !this.dropdownOpen;
    },
    resetarCursosSelecionados() {
      this.cursosSelecionados = null;
    },
    resetarAno() {
      this.porAnoCrescente = null;
    },
    resetarTudo() {
      this.cursosSelecionados = null;
      this.porAnoCrescente = null;
      this.chipDeAno = false;
      this.chipDeCurso = false;
      this.$emit('aoResetarTudo') 
    },
  },
  computed: {
    reseta(): string {
      this.resetarCursosSelecionados;
      this.resetarAno;
      return ''
    }
  },
});
</script>
