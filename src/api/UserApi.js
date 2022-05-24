import api from "./axiosClient";

const userApi = {
  getUserList: () => {
    const url = "/users";
    return api.get(url);
  },
};

export default userApi;
