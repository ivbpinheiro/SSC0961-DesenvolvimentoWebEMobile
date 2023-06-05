<template>
  <main class="columns is-gapless is-multiline" id="main">
    <div class="column is-one-quarter">
      <BarraLateral />
    </div>
    <div class="column is-three-quarter">
      <Formulario @aoSalvarTarefa="loadDefesas"/>
      <div class="lista">
        <Defesa v-for="(defesa, index) in defesas" :key="index" :defesa="defesa"/>
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

export default defineComponent({
  name: 'App',
  components: {
    BarraLateral,
    Formulario,
    Defesa
},
  data () {
    return {
      defesas: [] as IDefesa[],
      loading: false,
      filtro: '',
    }
  },
  methods: {

    loadDefesas() {
        let url = "http://thanos.icmc.usp.br:4567/api/v1/defesas";
        this.loading = true;
        fetch(url)
            .then((data) => (data.json()))
            .then((response) => {
              this.defesas = response["items"];
              console.log(this.defesas);
              console.log(this.defesas[0]);
              console.log(this.defesas[0].Curso);
              this.loading = false;
        });
    },
  },
  // computed: {
  //   defesasFiltroPorAno() {
  //     return this.defesas.filter((e) => (e.data.toDateString().match(this.filtro)));
  //   },
  // },
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
  display: flex;
  flex-direction: column;
  height: 100vh; /* Define uma altura fixa para o contêiner */
  overflow: auto; /* Adiciona uma barra de rolagem quando o conteúdo excede a altura do contêiner */
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
