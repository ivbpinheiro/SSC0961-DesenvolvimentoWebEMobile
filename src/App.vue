<template>
  <div class="nav-main">
    <img src="./assets/logo.png" alt="logo do icmc - usp">
    <nav>
      <router-link to="/">Início</router-link> |
      <router-link to="/about">Integrantes</router-link>            
    </nav>
  </div>
  <router-view />
  <footer class="footer-main">
    <div class="footer-div">
      <p>SSC0961 - Desenvolvimento Web e Mobile - {{ anoAtual() }}</p>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
const AppVue = defineComponent({
    name: 'AppVue',  
    methods: {
      anoAtual() {
        return new Date().getFullYear();
      }
    }
})
export default AppVue;
</script>
<style>
.nav-main {
  display: flex;
  align-items: center;
  padding: 15px;
  background-color: #0d3b66;
}

nav {
  flex-grow: 1;
  text-align: center;
}

nav a {
  font-weight: bold;
  font-size: 25px;
  color: #fff;
}

nav a.router-link-exact-active {
  color: #81f28b;
}

.nav-main img {
  max-width: 100%;
  max-height: 65px;
  /* Ajuste o valor de acordo com suas necessidades */
  display: block;
  margin: 0;
  border-radius: 100%;
}

.footer-main {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #0d3b66;
  color: #fff;
  padding: 20px;
}

.footer-div {
  max-width: 960px;
  margin: 0 auto;
  text-align: center;
}

p {  
  color: #fff;
  font-size: 20px;
  font-weight: bold;
}
</style>
