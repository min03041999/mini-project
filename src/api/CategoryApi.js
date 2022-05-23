import api from "./axiosClient";

const categoryApi = {
  getCategoryList: () => {
    const url = "/products/categories";
    return api.get(url);
  },
};

export default categoryApi;
