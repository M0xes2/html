<template>
  <div>
    <h1>{{ title }}</h1>
    <form name="account_form" @submit.prevent="accountForm(user, pass)">
      <input v-model="user" placeholder="Username" />
      <input v-model="pass" placeholder="Password" />
      <button type="submit">{{ submitbutton }}</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useUserStore } from "../stores/auth";
const userStore = useUserStore();
const props = defineProps({
  title: String,
  path: String,
  submitbutton: String,
});
const user = ref("");
const pass = ref("");
async function accountForm(username, password) {
  console.log(username);
  let res = await fetch(`http://localhost:3000/${props.path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  });

  let data = await res.json();
  if (data.token) {
    console.log(await userStore.addUserInfo(username, data.token));
    console.log(data);
  }
}
</script>
