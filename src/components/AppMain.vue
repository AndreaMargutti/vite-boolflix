<script>
//Importo la store per poterla utilizzare
import { store } from '../store';
export default {
  data() {
    return {
      store,
      vote: Math.floor(store.findedFilms[0].vote_average / 2)
    }
  },
}
</script>

<template>
  <!--Inizio sezione film-->
  <section>
    <h1>Film</h1>
    <!--Creo un "contatore per dire quanti risultati sono stati trovati"-->
    <p>I Risultati trovati sono: <span>{{ store.findedFilms.length }}</span></p>
    <div class="card mb-3" style="max-width: 540px;" v-show="store.findedFilms.length > 0"
      v-for="(film, i ) in store.findedFilms" :key="i">
    <div class="row g-0">
      <div class="col-md-4">
        <img :src="`https://image.tmdb.org/t/p/w342${film.backdrop_path}`" class="img-fluid rounded-start" alt="cover-film">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">Titolo: {{ film.title }}</h5>
          <p class="card-tex">Titolo Originale: {{ film.original_title }}</p>
          <span id="lang-flag" v-if="film.original_language === 'en'"> <!--Se lingua inglese allora mettimi la bandiera inglese-->
            <img src="../assets/img/uk_flag.svg" alt="uk-flag ">
          </span>
          <span id="lang-flag" v-else-if="film.original_language === 'it'"> <!--Se lingua italiana allora metti la bandiera italiana-->
            <img src="../assets/img/ita_flag.png" alt="ita-flag">
          </span>
          <div id="ratings">
            <i class="fa-star" v-for="n in 5" :class="n <= this.vote ? 'fa-solid' : 'fa-regular'" :key="n"></i>
          </div>
        </div>
      </div>
    </div>
    </div>
  </section>

  <!--Inizio sezione serie tv-->
  <section>
    <h1>Serie TV</h1>
    <!--Creo un "contatore per dire quanti risultati sono stati trovati"-->
    <p>I Risultati trovati sono: {{ store.findedSeries.length }}</p>
    <div class="card mb-3" style="max-width: 540px;" v-show="store.findedSeries.length > 0"
          v-for="(serie, j) in store.findedSeries" :key="j">
        <div class="row g-0">
          <div class="col-md-4">
            <img :src="`https://image.tmdb.org/t/p/w342${serie.backdrop_path}`" class="img-fluid rounded-start" alt="cover-serie">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Titolo: {{ serie.original_name }}</h5>
              <span id="lang-flag" v-if="serie.original_language === 'en'"> <!--Se lingua inglese allora mettimi la bandiera inglese-->
                <img src="../assets/img/uk_flag.svg" alt="uk-flag ">
              </span>
              <span id="lang-flag" v-else-if="serie.original_language === 'it'"> <!--Se lingua italiana allora metti la bandiera italiana-->
                <img src="../assets/img/ita_flag.png" alt="ita-flag">
              </span>
              <p class="card-text">Voto: {{ Math.floor(serie.vote_average / 2) }}</p>
            </div>
          </div>
        </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>

section {
  padding: 10px;
  h1 {
    color: red;
  }
  p {
    font-weight: bold;
    span {
      color: white;
      text-decoration: underline;
    }
  }
}
#lang-flag {
  img {
    width: 100px;
  }
}

  // .voted {
  //   color: orange;
  // }
</style>