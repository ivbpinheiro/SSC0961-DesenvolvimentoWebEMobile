<template>
    <div class="modal-overlay" v-if="showModal">
      <div class="modal-content">
            <sync-loader class="text-center" :loading="showModal" color="#0d3b66" size="55px"></sync-loader>

        <slot></slot>
      </div>
    </div>
  </template>
  
<script lang="ts">
  import SyncLoader from 'vue-spinner/src/SyncLoader.vue';

  export default {
    name: 'ModalSpinner',
    props: {
      showModal: {
        type: Boolean,
        default: false,
      },
    },
    components: {
      SyncLoader,
    },
  };
</script>
  
<style scoped>
  .modal-overlay {
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
  
  .modal-content {
    padding: 20px;
  }
</style>
  