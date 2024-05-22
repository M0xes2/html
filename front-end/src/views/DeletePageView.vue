<template>
  <div class = "box">
    <h1>Delete Page</h1>
    <div>
      <form name="page_form" @submit.prevent="pageDelete()">
        <p>Are you sure you want to delete your page?</p>
        <button type="submit">Delete Page</button>
      </form>
    </div>
    <p>{{ response }}</p>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useUserStore } from "../stores/auth";
import { useRouter, useRoute } from "vue-router";
const userStore = useUserStore();
const router = useRouter();
const route = useRoute();

const id = route.params.id;
const response = ref("");
async function pageDelete() {
  console.log(id);
  let res = await fetch(`http://localhost:3000/remove/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: userStore.getUser().token,
    },
  });

  let data = await res.json();
  response.value = data;
  console.log(response);
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
</style>
