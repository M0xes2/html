<script setup>
import { useUserStore } from "../stores/auth";
import { useRouter } from "vue-router";
const userStore = useUserStore();

if (!userStore.getUser().username) {
  if (history.state.back === null) {
    history.back();
  } else {
    const router = useRouter();
    router.push("/");
  }
}

function signOut() {
  userStore.signOutUser();
  location.reload();
}
</script>

<template>
  <div>
    <h1>Sign Out</h1>
    <p>Are you sure you want to sign out?</p>
    <button @click="signOut()">Please sign me out.</button>
  </div>
</template>
