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
    <li v-for="(film, i ) in store.findedFilms" :key="i">
      {{ store.findedFilms[i].title }}
      {{ store.findedFilms[i].original_title }}
      <div id="lang-flag" v-if="store.findedFilms[i].original_language === 'en'">
        <img src="../assets/img/uk_flag.svg" alt="uk-flag ">
      </div>
      <div id="lang-flag" v-else="store.findedFilms[i].original_language === 'it'">
        <img src="../assets/img/ita_flag.png" alt="ita-flag">
      </div>
      {{ store.findedFilms[i].vote_average }}
    </li>
  </ul>
</template>

<style lang="scss" scoped>
  img {
    width: 100px;
  }
</style>