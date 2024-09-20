<script>
//Importo la store nel componente
import { store } from '../store.js';

export default {
  data() {
    return {
      store,
    }
  },

  methods: {
    clickButton(){
      console.log('Bottone Cliccato');
      console.log(store.searchedInput);
      this.$emit("retrieve-input", store.searchedInput);
    }
  }
}
</script>

<template>
  <h1>SearchInput</h1>
  <div>
    <input type="text" v-model="store.searchedInput">
    <button @click="clickButton">Cerca</button>
  </div>
</template>

<style scoped>
</style>