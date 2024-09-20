<script>
//Importo la store per poterla utilizzare
import { store } from '../store';
export default {
  data() {
    return {
      store,
    }
  }
}
</script>

<template>
  <h1>Risultati di ricerca</h1>
  <ul>
    <li v-for="(film, i) in store.findedFilms" :key="i">
      {{ store.findedFilms[i].title }}
      {{ store.findedFilms[i].original_title }}
      {{ store.findedFilms[i].original_language }}
      {{ store.findedFilms[i].vote_average }}
    </li>
  </ul>
</template>

<style scoped>
</style>