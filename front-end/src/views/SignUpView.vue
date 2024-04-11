<template>
  <div>
    <h1>Sign up</h1>
    <input v-model="user" placeholder="Username" />
    <input v-model="pass" placeholder="Password" />
    <button @click="signUp(user, pass)">Sign Up!</button>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
const pages = ref("");
async function signUp(username, password) {
  console.log(username);
  let res = await fetch("http://localhost:3000/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  });

  let data = await res.json();
  pages.value = data;
  console.log(data);
}
</script>
