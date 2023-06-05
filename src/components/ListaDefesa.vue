<template>
    <div class="lista">
        <div class="loader-container">
            <ModalSpinner :show-modal="loading" />
        </div>
        <v-pagination v-if="totalPages > 1" v-model="currentPage" :length="totalPages"
            :total-visible="Math.min(totalPages, maxPagesToShow)" @input="updatePage"></v-pagination>
            <v-divider></v-divider>
            <GrupoFiltro ></GrupoFiltro>
            <div class="defesa-wrapper">
            <Defesa
                v-for="(defesa, index) in paginatedDefesas"
                :key="index"
                :defesa="defesa"
                @defesa-selecionada="exibirModalDefesa"
            />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Defesa from '../components/Defesa.vue';
import ModalSpinner from '../components/ModalSpinner.vue';
import IDefesa from '../interfaces/IDefesa';
import GrupoFiltro from './GrupoFiltro.vue';

const ListaDefesa = defineComponent({
    name: 'ListaDefesa',
    components: {
        Defesa,
        ModalSpinner,
        GrupoFiltro,
    },
    data() {
        return {
            itemsPerPage: 10,
            currentPage: 1,
            maxPagesToShow: 5,
            defesaSelecionada: null as IDefesa | null,
        }
    },
    props: {
        defesas: {
            type: Array as () => IDefesa[],
            required: true
        },
        loading: {
            type: Boolean,
            required: true
        },
        filtro: {
            type: String,
            required: true
        }
    },
    computed: {
        porCurso(): IDefesa[] {
            return this.defesas.filter((e: IDefesa) => (e.Nome.match(this.filtro)));
        },
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
        updatePage(page: number) {
            this.currentPage = page;
        },
        exibirModalDefesa(defesa: IDefesa) {
            if (defesa !== null) {
                this.defesaSelecionada = defesa;
            }
        },
    }
});

export default ListaDefesa;
</script>

<style scoped>
.lista {
    padding: 1.0em;
    height: 50em;
}
.defesa-wrapper::-webkit-scrollbar {
  width: 0.5em; /* Define a largura da barra de rolagem */
}
.defesa-wrapper::-webkit-scrollbar-track {
  background-color: transparent; /* Define a cor de fundo da área da barra de rolagem */
}
.defesa-wrapper::-webkit-scrollbar-thumb {
  background-color: #0d3b66; /* Define a cor da alça da barra de rolagem */
}

.loader-container {
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
}

/* css do modal do spinner de carregamento */
.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
}
.defesa-wrapper {
  max-height: 90%; /* Ajuste a altura máxima conforme necessário */
  overflow-y: auto;
}
</style>