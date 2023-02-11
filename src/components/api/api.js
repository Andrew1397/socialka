import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: { "API-KEY": "ac85fc16 - 9640 - 4884 - abc0 - 9f90412bc87c" },
});

export const userAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(
            `users?page=${currentPage}&count=${pageSize}`     
          )
          .then((response) => {
            return response.data;
          });
    }
}

export const unfollowAPI = {
    unfollow(id) {
        return instance.delete(
            `follow/`+id,
        )
        .then((response) => {
            return response.data;
          });
    }
}

export const followAPI = {
  follow(id) {
    return instance.post(`follow/` + id).then((response) => {
      return response.data;
    });
  },
};