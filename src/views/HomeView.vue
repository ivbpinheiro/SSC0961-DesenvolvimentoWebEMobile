<template>
  <main class="columns" id="main">
    <div class="column">
      <div id="input-value">
        <Formulario @aoConsultarLista="loadDefesas" @aoFiltrarLista="enviaDadosFiltro" />
      </div>
      <ListaDefesa :defesas="defesas" :loading="loading" :filtro="filtro" />
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Formulario from '../components/FormularioConsulta.vue';
import IDefesa from '../interfaces/IDefesa';
import ListaDefesa from '../components/ListaDefesa.vue';

export default defineComponent({
  name: 'App',
  components: {
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
  mounted() {
    this.loadDefesas();
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
html,
body {
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

#input-value {
  justify-content: center;
  align-items: center;
}
</style>