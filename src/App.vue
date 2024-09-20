<script>
import AppSearch from './components/AppSearch.vue';
import AppMain from './components/AppMain.vue';
import AppSearch from './components/AppSearch.vue';
import AppMain from './components/AppMain.vue';

export default {
    components: {
        AppSearch,
        AppMain
    },

    data() {
        return {
        count: 0
        }
    } 
}
</script>

<template>
    <AppSearch />
    <AppMain />
</template>

<style lang="scss">
// Imported Bootstraps
@use "../node_modules/bootstrap/scss/bootstrap.scss";
//Imported General CSS
@use "./style/general.scss";
</style>
