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
  const props = defineProps({
    title: String,
    path: String,
    submitbutton: String,
  });
  const user = ref("");
  const pass = ref("");
  const pages = ref("");
  async function accountForm(username, password) {
    console.log(username);
    let res = await fetch(`http://localhost:3000/${ props.path }`, {
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
  