<script>
import AppSearch from './components/AppSearch.vue';
import AppMain from './components/AppMain.vue';

export default {
    components: {
        AppSearch,
        AppMain
    },

    data() {
        return {

        }
    } ,
    methods: {
        showMessage(information){
            console.log(`Da App.Vue con allegria arriva ${information}`);
        }
    }
}
</script>

<template>
    <AppSearch @retrieve-input="showMessage"/>
    <AppMain />
</template>

<style lang="scss">
// Imported Bootstraps
@use "../node_modules/bootstrap/scss/bootstrap.scss";
//Imported General CSS
@use "./style/general.scss";
</style>
