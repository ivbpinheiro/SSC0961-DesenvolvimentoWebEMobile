<template>
  <main class="columns is-gapless is-multiline" id="main">
    <div class="column is-one-quarter">
      <BarraLateral />
    </div>
    <div class="column is-three-quarter">
      <Formulario @aoSalvarTarefa="loadDefesas" />
      <input type="text" class="input" placeholder="BUSCANDO PELO NOME" v-model="filtro">
      <sync-loader :loading="loading" color="#0d3b66" size="55px"></sync-loader>
      <div class="lista">
        <v-pagination
          v-if="totalPages > 1"
          v-model="currentPage"
          :length="totalPages"
          :total-visible="Math.min(totalPages, maxPagesToShow)"
          @input="updatePage"
        ></v-pagination>
        <p class="mt-3">Página atual: {{ currentPage }}</p>
        <Defesa
          v-for="(defesa, index) in paginatedDefesas"
          :key="index"
          :defesa="defesa"
        />
      </div>
    </div>
  </main>
</template>


<script lang="ts">
import { defineComponent } from 'vue';
import BarraLateral from './components/BarraLateral.vue';
import Formulario from './components/FormularioConsulta.vue';
import IDefesa from './interfaces/IDefesa';
import Defesa from './components/Defesa.vue';
import SyncLoader from 'vue-spinner/src/SyncLoader.vue';

export default defineComponent({
  name: 'App',
  components: {
    BarraLateral,
    Formulario,
    Defesa,
    SyncLoader,
  },
  data () {
    return {
      defesas: [] as IDefesa[],
      loading: false,
      filtro: '',
      itemsPerPage: 10,
      currentPage: 1,
      maxPagesToShow: 5,
    }
  },
  computed: {
    defesasFiltradas(): IDefesa[] {
      return this.defesas.filter((e: IDefesa) => (e.Nome.match(this.filtro)));
    },
    paginatedDefesas(): IDefesa[] {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.defesasFiltradas.slice(startIndex, endIndex);
    },

    totalPages(): number {
      return Math.ceil(this.defesasFiltradas.length / this.itemsPerPage);
    },
  },
  methods: {

    loadDefesas() {
        let url = "http://thanos.icmc.usp.br:4567/api/v1/defesas";
        this.loading = true;
        fetch(url)
            .then((data) => (data.json()))
            .then((response) => {
              this.defesas = response["items"];
              this.loading = false;
        });
    },
    updatePage(page: number) {
      this.currentPage = page;
    },
  },
  watch: { //se o valor de filtro mudar, volta pra página 1
    filtro() {
      this.currentPage = 1;
    },
  },
});
</script>

<style>
html {
  height: 100%; /* Define a altura do corpo como 100% */
  margin: 0;
  padding: 0;
  overflow: hidden;
}

#main{
  width: 100%; /* Define a largura do contêiner como 100% */
  height: 100%; /* Define a altura do contêiner como 100% */
}

.lista {
  padding: 1.5em;
}

.lista::-webkit-scrollbar {
  width: 0.5em; /* Define a largura da barra de rolagem */
}

.lista::-webkit-scrollbar-track {
  background-color: transparent; /* Define a cor de fundo da área da barra de rolagem */
}

.lista::-webkit-scrollbar-thumb {
  background-color: #0d3b66; /* Define a cor da alça da barra de rolagem */
}
</style>
