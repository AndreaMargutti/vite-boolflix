import { reactive } from 'vue'

export const store = reactive({
    //Variabile contente il valore dell'input in AppSearch
    searchedInput: "Peaky Blinders",
    //Creo un'array vuoto per inserire i film trovati dalla ricerca
    findedMedia: [],
    findedSeries: []
})