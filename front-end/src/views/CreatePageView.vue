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
import { ref, onMounted } from "vue";
import { useUserStore } from "../stores/auth";
import { useRouter } from "vue-router";
const userStore = useUserStore();
const router = useRouter();

const username = userStore.getUser().username;
const name = ref("");
const description = ref("");
const response = ref("");
async function pageForm(name, description) {
  console.log(name);
  let res = await fetch(`http://localhost:3000/add`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: userStore.getUser().token },
    body: JSON.stringify({
      name: name,
      description: description,
      author: username,
    }),
  });

  let data = await res.json();
  router.push(`/page/${data._id}`);
}

async function confirmUser() {
  if (!(await userStore.confirmUser())) {
    router.push("/login");
  }
}

onMounted(() => {
  confirmUser();
});
</script>

<style>
.container {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}
</style>
