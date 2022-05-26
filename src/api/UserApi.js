import api from "./axiosClient";

const userApi = {
  getUserList: () => {
    const url = "/users";
    return api.get(url);
  },
  getUser: (id) => {
    const url = `/users/${id}`;
    return api.get(url);
  },
  deleteUser: (id) => {
    const url = `/users/${id}`;
    return api.delete(url);
  },
};

export default userApi;
