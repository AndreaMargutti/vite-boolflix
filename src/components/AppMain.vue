<script>
//Importo la store per poterla utilizzare
import { store } from '../store';
export default {
  data() {
    return {
      store,
    }
  },
}
</script>

<template>
  <!--Inizio sezione film-->
  <section>
    <h1>Film</h1>
    <!--Creo un "contatore per dire quanti risultati sono stati trovati"-->
    <p>I Risultati trovati sono: {{ store.findedFilms.length }}</p>
    <ul v-show="store.findedFilms.length > 0"> <!--Mostriamo la lista sono se sono stati trovati dei risultati-->
      <li v-for="(film, i ) in store.findedFilms" :key="i"> <!--Generiamo un li per ogni elemento dell array-->
        <img :src="`https://image.tmdb.org/t/p/w342${film.backdrop_path}`" alt="cover-film"> <!--Inserisco immagine-->
        {{ film.title }} <!--Inseriamo il titolo del film-->
        {{ film.original_title }} <!--Inseriamo il titolo originale-->
        <div id="lang-flag" v-if="film.original_language === 'en'"> <!--Se lingua inglese allora mettimi la bandiera inglese-->
          <img src="../assets/img/uk_flag.svg" alt="uk-flag ">
        </div>
        <div id="lang-flag" v-else-if="film.original_language === 'it'"> <!--Se lingua italiana allora metti la bandiera italiana-->
          <img src="../assets/img/ita_flag.png" alt="ita-flag">
        </div>
        {{ Math.floor(film.vote_average) }} <!--Inserisco il voto del film-->
      </li>
    </ul>
  </section>
  <!--Inizio sezione serie tv-->
  <section>
    <h1>Serie TV</h1>
    <!--Creo un "contatore per dire quanti risultati sono stati trovati"-->
    <p>I Risultati trovati sono: {{ store.findedSeries.length }}</p>
    <ul v-show="store.findedSeries.length > 0">  <!--Mostriamo la lista sono se sono stati trovati dei risultati-->
      <li v-for="(serie, j) in store.findedSeries" :key="j"> <!--Generiamo un li per ogni elemento dell'array-->
        <img :src="`https://image.tmdb.org/t/p/w342${serie.backdrop_path}`" alt="cover-serie"> <!--Inserisco copertina serie tv-->
        {{ serie.original_name }} <!--Inseriamo il titolo della serie tv-->
        <div id="lang-flag" v-if="serie.original_language === 'en'"> <!--Se lingua inglese allora mettimi la bandiera inglese-->
          <img src="../assets/img/uk_flag.svg" alt="uk-flag ">
        </div>
        <div id="lang-flag" v-else-if="serie.original_language === 'it'"> <!--Se lingua italiana allora metti la bandiera italiana-->
          <img src="../assets/img/ita_flag.png" alt="ita-flag">
        </div>
        {{ serie.vote_average }} <!--Inserisco il voto della serie tv-->
      </li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>
  img {
    width: 100px;
  }
</style>