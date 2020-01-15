<template>
  <div>
    <b-spinner v-if="loading" type="grow" label="Spinning"></b-spinner>
    <div v-else-if="!data || data.length === 0">No result, try to make a search by title</div>
    <b-container class="bv-example-row">
      <b-row>
        <b-col v-for="film in data" :key="film.imdbID" xs="6" md="3">
          <Film :film="film" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Film from "./Film";

export default {
  name: "FilmDisplay",
  components: {Film},
  computed: {
    ...mapState("films", { loading: "fetchingFilms", data: "films" })
  }
};
</script>

<style>
</style>
