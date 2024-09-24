<script>
//Importo la store nel componente
import { store } from '../store.js';
import axios from 'axios';
export default {
  data() {
    return {
      //importo la store
      store,
      apiUrl: "https://api.themoviedb.org/3/search/movie?", //link per API film
      apiSeriesUrl: "https://api.themoviedb.org/3/search/tv", //link per API serie tv
      imgUrl: "https://image.tmdb.org/t/p/w342",
    }
  },

  methods: {
    //Evento per il click del bottone
    getResults(){
      console.log('Bottone Cliccato');
      console.log(store.searchedInput);
      //faccio partire i metodi per film e serie tv
      this.getFilms();
      this.getSeries();
    },

    //Inizio Chiamata API
    getFilms(){
      axios.get(this.apiUrl, {
        params: {
          api_key: "8e0805322dd3b50b2e8d4df4c08bfc3d", //chiave necessaria per far funzionare l'api (guarda documentazione)
          query: store.searchedInput, //input inserito dall'utente
      }})
      .then((response) => {
        //console.log(response.data.results);
        store.findedFilms = response.data.results //Inserisco i film con il campo di ricerca corretto nell'array
        //console.log(store.findedFilms);
      })
      .catch((error) => {
        console.log(error);
      })
    },

    getSeries(){
      console.log("Ho recuperato le serie tv");
      axios.get(this.apiSeriesUrl, {
        params: {
          api_key: "8e0805322dd3b50b2e8d4df4c08bfc3d",
          query: store.searchedInput,
      }})
      .then((response) => {
        //console.log(response.data.results);
        store.findedSeries = response.data.results
        console.log(response.data.results); //Inserisco le serie con il campo di ricerca corretto nell'array
      })
      .catch((error) => {
        console.log(error);
      })
    },
  }
}

</script>

<template>
  <h1>SearchInput</h1>
  <div>
    <!--Input di ricerca-->
    <input type="text" v-model="store.searchedInput" @keyup.enter="getResults">
    <!--Bottone che fa partire il metodo al suo click-->
    <button @click="getResults">Cerca</button>
  </div>
</template>

<style scoped>
</style>