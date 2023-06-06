<template>
    <div class="modal-overlay" v-if="showModal">
      <div class="modal-content">
            <v-progress-circular
                v-if="showModal"
                size="90"
                color="#0d3b66"
                indeterminate
                ></v-progress-circular>
      </div>
    </div>
  </template>
  
<script lang="ts">

  export default {
    name: 'ModalSpinner',
    props: {
      showModal: {
        type: Boolean,
        default: false,
      },
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
    display: flex;
    margin: 0 auto;
    width: 200px;
  }
</style>
  