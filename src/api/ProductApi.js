import api from "./axiosClient";

const productApi = {
  getProductApi: () => {
    const url = "/products";
    return api.get(url);
  },
};

export default productApi;
