import { reactive } from 'vue'

export const store = reactive({
    //Variabile contente il valore dell'input in AppSearch
    searchedInput: "",
    //Creo un'array vuoto per inserire i film trovati dalla ricerca
    findedFilms: [],
    findedSeries: []
})