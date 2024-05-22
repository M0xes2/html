<!--Convert into component (consider reusing for patching pages in the future)-->
<template>
  <div class = "box">
    <h1>Update Page</h1>
    <form name="page_form" @submit.prevent="pageEdit(name, description)">
      <div class="box1">
        <input v-model="name" placeholder="Title" />
        <textarea v-model="description" placeholder="Description"></textarea>
        <button type="submit">Update Page</button>
      </div>
    </form>
    <p>{{ response }}</p>
  </div>
</template>

<script setup>
/*
import { ref, onMounted } from "vue";
import { useUserStore } from "../stores/auth";
import { useRouter, useRoute } from "vue-router";
const userStore = useUserStore();
const router = useRouter();
const route = useRoute();

const username = userStore.getUser().username;
const name = ref("");
const description = ref("");
const response = ref("");

async function getPages() {
  console.log(route.params.id);
  let res = await fetch(`http://localhost:3000/page/${route.params.id}`);

  let data = await res.json();
  name.value = data.name;
  description.value = data.description;
}

async function pageEdit(name, description) {
  let res = await fetch(`http://localhost:3000/update/${route.params.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: userStore.getUser().token,
    },
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
  getPages();
});
*/
</script>

<style>
  .box{
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        float: center;
        background-color: lightgreen;
        line-height: 2;
        color: black;
        border-radius: 20px;
        height: 15.5vw;
        padding-left: 200px;
        padding-right: 200px;
        text-align: center;
      }
  .box1{
    width: 10px;
  }
</style>
