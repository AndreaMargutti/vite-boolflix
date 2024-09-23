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
  <section>
    <h1>Film</h1>
    <p>I Risultati trovati sono: {{ store.findedFilms.length }}</p>
    <ul v-show="store.findedFilms.length > 0">
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
  </section>
  <section>
    <h1>Serie TV</h1>
    <p>I Risultati trovati sono: {{ store.findedSeries.length }}</p>
    <ul v-show="store.findedSeries.length > 0">
      <li v-for="(serie, j) in store.findedSeries" :key="j">
        {{ store.findedSeries[j].original_name }}
        <div id="lang-flag" v-if="store.findedSeries[j].original_language === 'en'">
          <img src="../assets/img/uk_flag.svg" alt="uk-flag ">
        </div>
        <div id="lang-flag" v-else="store.findedSeries[j].original_language === 'it'">
          <img src="../assets/img/ita_flag.png" alt="ita-flag">
        </div>
        {{ store.findedSeries[j].vote_average }}
      </li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>
  img {
    width: 100px;
  }
</style>