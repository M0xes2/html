<template>
  <div>
    <h1>Hi {{ username }}!</h1>
    <form action="http://localhost:3000/uploadPFP" method="POST" enctype="multipart/form-data">
      <input type="file"  name="photo">
      <input type="submit">
    </form>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from "../stores/auth";
const router = useRouter();
const userStore = useUserStore();
const username = ref("");
const pfp = ref("");

async function confirmUser() {
  const data = await userStore.confirmUser()
  if (!data) {
    router.push("/login");
  }
  username.value = data.user.username;
}

onMounted(() => {
  confirmUser();
});
</script>

<!--Image upload from https://medium.com/@renatello/how-to-upload-a-file-in-vue-js-895cdd3b35f8-->
