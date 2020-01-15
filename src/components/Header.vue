<template>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">My Films</b-navbar-brand>
    <b-navbar-nav class="ml-auto">
      <b-nav-form>
        <b-form-input size="sm" class="mr-sm-2" placeholder="Search" v-model="search"></b-form-input>
        <b-button size="sm" class="my-2 my-sm-0" @click="launchSearch">Search</b-button>
      </b-nav-form>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Header",
  data() {
    return {
      search: ""
    };
  },
  methods: {
    ...mapActions("films", ["searchByTitle"]),
    launchSearch() {
      this.searchByTitle(this.search)
    }
  }
};
</script>

<style>
</style>
