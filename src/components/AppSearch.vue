<script>
//Importo la store nel componente
import { store } from '../store.js';
import axios from 'axios';
export default {
  data() {
    return {
      store,
      apiUrl: "https://api.themoviedb.org/3/search/movie?"
    }
  },

  methods: {
    clickButton(){
      console.log('Bottone Cliccato');
      console.log(store.searchedInput);
      this.$emit("retrieve-input", store.searchedInput);
    },

    //Inizio Chiamata API
    getFilms(){
      axios.get(this.apiUrl, {
        params: {
          api_key: "8e0805322dd3b50b2e8d4df4c08bfc3d",
          query: ""
      }})
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
    }
  },
  
  created(){
    this.getFilms();
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