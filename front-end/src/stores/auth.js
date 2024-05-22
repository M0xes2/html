import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  persist: true,
  state: () => {
    return {
      user: {
        username: null,
        token: "",
      },
    };
  },
  actions: {
    addUserInfo(username, token) {
      this.user.username = username;
      this.user.token = token;
    },
    getUser() {
      return this.user;
    },
    async confirmUser() {
      console.log("Confirming...");
      let res = await fetch(`http://localhost:3000/protected`, {
        method: "GET",
        headers: { Authorization: this.user.token },
      });
      let data = await res.json();
      if (data.user && data.user.username == this.user.username) {
        return data;
      }
      this.user = { user: null, token: "" };
      return false;
    },
    signOutUser() {
      this.user = { user: null, token: "" };
    },
  }
});
