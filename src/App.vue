<script>
import AppSearch from './components/AppSearch.vue';
import AppMain from './components/AppMain.vue';
import axios from 'axios';
// Chiave API 8e0805322dd3b50b2e8d4df4c08bfc3d
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
