<template>
  <div class="card">
    <div class="title">
      <h2>{{ storeCounter.title }}</h2>
    </div>
    <div>
      <h2 id="edit">{{ storeCounter.edit }}</h2>
    </div>
    <div class="username_display">
      <h2>From: {{ storeCounter.user.username }}</h2>
    </div>
  </div>
</template>

<script setup>
  import { userStore } from "@/stores/user";
  const storeCounter = userStore(); 
</script>

<style lang="scss" scoped>
  .username_display{
  position: fixed;
  top: 90%;
  left: 30%;
  }
  .title{
    display: inline-block;
    position: absolute;
    margin: 10px;
    text-align: center;
    top: 5%;
  }
</style>
