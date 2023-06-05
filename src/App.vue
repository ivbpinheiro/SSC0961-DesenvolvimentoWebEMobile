<template>
  <main class="columns is-gapless is-multiline">
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
import Formulario from './components/FormularioRegistroHoras.vue';
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
.lista {
  padding: 1.5em;
}
</style>
