import { defineStore } from "pinia";

export const userStore = defineStore("user", {
  state: () => {
    return {
      user: {
        username: "",
        token: ""
      },
    };
  },
  actions: {
    addUserInfo(username, token) {
      this.user.username = username;
      this.user.token = token;
    },
    async confirmUser() {
      let res = await fetch(`http://localhost:3000/protected`, {
      method: "GET",
      headers: { "Authorization": this.user.token }});
      let data = await res.json();
      if (data.username && data.username == this.user.username) {
        return true
      }
      return false
    },

  },
  getters: {},
});