<template>
  <div>
    <h1>Log In</h1>
    <input v-model="user" placeholder="Username" />
    <input v-model="pass" placeholder="Password" />
    <button @click="logIn(user, pass)">Log In</button>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
const pages = ref("");
async function logIn(username, password) {
  console.log(username);
  let res = await fetch("http://localhost:3000/login", {
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
