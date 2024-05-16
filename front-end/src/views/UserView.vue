<template>
  <div>
    <h1>Hi {{ username }}!</h1>
    <input type="file" ref="file" style="display: none" />
    <button @click="openFileDialog">Upload Image</button>
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
  if (!(await userStore.confirmUser())) {
    router.push("/login");
  }
  username.value = data.user.username;
}

function openFileDialog() {
  this.$refs.fileInput.$el.click();
}
onMounted(() => {
  confirmUser();
});
</script>

<!--Image upload from https://medium.com/@renatello/how-to-upload-a-file-in-vue-js-895cdd3b35f8-->
