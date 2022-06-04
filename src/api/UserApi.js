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
  addUser: (data) => {
    const url = "/users";
    return api.post(url, data);
  },
  editUser: (id, data) => {
    const url = `/users/${id}`;
    return api.patch(url, data);
  },
};

export default userApi;
