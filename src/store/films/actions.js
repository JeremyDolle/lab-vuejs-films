import api from "../../services/api";

export const searchByTitle = async ({ commit }, title) => {
  commit("fetchingFilms");
  try {
    const { data } = await api.get(``, { params: { s : title } });
    commit("fetchFilmsSuccess", data.Search);
  } catch (e) {
    console.log(e.message);
  }
};

export default {
  searchByTitle
};
