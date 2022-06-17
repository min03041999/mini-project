import api from "./axiosClient";

const productApi = {
  getProductApi: () => {
    const url = "/products";
    return api.get(url);
  },
  deleteProductApi: (id) => {
    const url = `/products/${id}`;
    return api.delete(url);
  },
  addProductApi: (data) => {
    const url = "/products";
    return api.post(url, data);
  },
  detailProductApi: (id) => {
    const url = `/products/${id}`;
    return api.get(url);
  },
  editProductApi: (data, id) => {
    const url = `/products/${id}`;
    return api.patch(url, data);
  },
};

export default productApi;
