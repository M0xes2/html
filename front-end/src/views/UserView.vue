<template>
  <div>
    <h1>Hi {{ username }}!</h1>
    <iframe name="dummyframe" id="dummyframe" style="display: none"></iframe>
    <form
      target="dummyframe"
      action="http://localhost:3000/uploadPFP"
      method="POST"
      enctype="multipart/form-data"
    >
      <input type="file" name="photo" accept="image/*" />
      <input type="submit" />
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
const file = ref("");
async function confirmUser() {
  const data = await userStore.confirmUser();
  if (!data) {
    router.push("/login");
  }
  username.value = data.user.username;
}

function importData() {
  let input = document.createElement("input");
  input.type = "file";
  input.accept = "image/*";
  input.onchange = (_) => {
    // you can use this method to get file and perform respective operations
    file.value = Array.from(input.files)[0];
    console.log(file.value);
    setProfile(Array.from(input.files)[0]);
  };
  input.click();
}

async function setProfile(img_file) {
  let res = await fetch(`http://localhost:3000/uploadPFP`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: userStore.getUser().token,
    },
    body: { photo: img_file },
  });
}

onMounted(() => {
  confirmUser();
});
</script>

<!--Image upload from https://medium.com/@renatello/how-to-upload-a-file-in-vue-js-895cdd3b35f8-->
