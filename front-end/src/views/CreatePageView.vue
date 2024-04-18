<!--Convert into component (consider reusing for patching pages in the future)-->
<template>
  <div>
    <h1>Create Page</h1>
    <form name="page_form" @submit.prevent="pageForm(name, description)">
      <div class="container">
        <input v-model="name" placeholder="Title" />
        <textarea v-model="description" placeholder="Description"></textarea>
        <button type="submit">Create Page</button>
      </div>
    </form>
    <p>{{ response }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue";

const name = ref("");
const description = ref("");
const response = ref("");
async function pageForm(name, description) {
  console.log(name);
  let res = await fetch(`http://localhost:3000/add`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: name,
      description: description,
      tags: [],
    }),
  });

  let data = await res.json();
  response.value = `Congrats on making your page. Page ID: ${data._id}`;
  console.log(response);
}
</script>

<style>
.container {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}
</style>
