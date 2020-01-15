export default {
  fetchFilmsSuccess(state, films) {
    state.films = films;
    state.fetchingFilms = false;
    state.fetchFilmsError = false;
  },

  fetchingFilms(state) {
    state.films = [];
    state.fetchingFilms = true;
    state.fetchFilmsError = false;
  }
};
