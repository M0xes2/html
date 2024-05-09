<template>
  <div>
    <h1>{{ title }}</h1>
    <form name="account_form" @submit.prevent="accountForm(user, pass)">
      <input v-model="user" placeholder="Username" />
      <input v-model="pass" placeholder="Password" />
      <button type="submit">{{ submitbutton }}</button>
    </form>
    <p>{{ error }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useUserStore } from "../stores/auth";


const userStore = useUserStore();
if (userStore.getUsername()) {
  history.back();
}
const props = defineProps({
  title: String,
  path: String,
  submitbutton: String,
});
const user = ref("");
const pass = ref("");
const error = ref("");
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
  if (data.success) {
    console.log(await userStore.addUserInfo(username, data.token));
    this.$forceUpdate();
  }
  else {
    error.value = data.msg
  }
}
</script>
