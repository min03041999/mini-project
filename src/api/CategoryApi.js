import api from "./axiosClient";

const categoryApi = {
  getCategoryList: () => {
    const url = "/products/categories";
    return api.get(url);
  },

  getCategorySpecific: (name) => {
    const url = `/products/category/${name}`;
    return api.get(url);
  },
};

export default categoryApi;
