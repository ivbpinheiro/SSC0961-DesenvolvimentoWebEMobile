<template>
  <main class="columns is-gapless is-multiline" id="main">
    <div class="column is-one-quarter">
      <BarraLateral />
    </div>
    <div class="column is-three-quarter">
      <Formulario @aoConsultarLista="loadDefesas" @aoFiltrarLista="enviaDadosFiltro"/>
      <ListaDefesa :defesas="defesas" :loading="loading" :filtro="filtro"/>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BarraLateral from './components/BarraLateral.vue';
import Formulario from './components/FormularioConsulta.vue';
import IDefesa from './interfaces/IDefesa';
import ListaDefesa from './components/ListaDefesa.vue';

export default defineComponent({
  name: 'App',
  components: {
    BarraLateral,
    Formulario,
    ListaDefesa
  },
  data() {
    return {
      defesas: [] as IDefesa[],
      loading: false,
      filtro: ''
    }
  },
  computed: {

  },
  methods: {
    loadDefesas() {
      let url = "http://thanos.icmc.usp.br:4567/api/v1/defesas?ordem/json-viewer";
      this.loading = true;
      fetch(url)
        .then((data) => (data.json()))
        .then((response) => {
          this.defesas = response["items"];
          this.loading = false;
        });
    },
    enviaDadosFiltro(dados: string) {
      this.filtro = dados;
    }
  },
});
</script>

<style>
html, body {
  width: 100%;
  height: 100%;
  /* Define a altura do corpo como 100% */
  margin: 0;
  padding: 0;
  overflow: hidden;
}

#main {
  position: relative;  
}
</style>
