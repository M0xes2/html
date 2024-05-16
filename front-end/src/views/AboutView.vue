<template>
  <pageSelect/>
  <div style="color:black;">
    <h1 class = "header">Card Designer</h1>
    <div class="container">
      <inputText/>
      <div class="input_field">
        <div class="input">
          <h1>Create a Title!</h1>
          <input type="text" v-model="title">
          <button @click="storeCounter.changeTitle(title)" class="button">Add Title</button>
          <h1>Type in your text!</h1>
          <input type="text" v-model="edit">
          <button @click="storeCounter.addEditor(edit)" class="button">Add Text</button>
        </div>
        <inputColor/>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { userStore } from "@/stores/user";
import inputText from "@/components/inputText.vue";
import inputColor from "@/components/inputColor.vue";
const storeCounter = userStore(); 
const edit = ref("");
const title = ref("");
</script>

<style lang="scss" scoped>
.header{
  position: fixed;
  top: 10%;
  left: 50%;
  transform: translate(-60%, -80%);
  margin-left: 50px;
  margin-right: 50px;
  font-size: 3rem;
  color:aquamarine;
  text-align: center;
}
.container {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  width: 60vw;
  border-radius: 20px;
  margin: 10px auto;
  background-color: rgb(216, 253, 160);
}
.card {
  width: 48%;
  height: 35rem;
  background-color: aliceblue;
  margin: 10px;
  border-radius: 40px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
}
.input_field {
  width: 38%;
  height: 35rem;
  background-color: aliceblue;
  margin: 10px;
  border-radius: 40px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  word-wrap: break-all;
} 
</style>
