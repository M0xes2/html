<template>
  <Profile/>
  <div class = "container">
    <h1>Sign Up To Start!</h1>
    <div>
      <h1>Create An Account</h1>
      <div>
        <SignUp />
        <form name="login-form" @submit.prevent="login(username, password)">
          <div>
            <label for="username">Username: </label>
            <input id="username" type="text" v-model="username" />
          </div>
          <div>
            <label for="password">Password: </label>
            <input id="password" type="password" v-model="password" />
          </div>
            <!--button class="submit-button" type="submit">Sign Up</button-->
        </form>        
      </div>
        <RouterLink to="/about">
          <button @click="user.confirm(username, password)">Confirm</button>
        </RouterLink>
      <div>
        <RouterLink to="/LoginView">Already have an account?</RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
  import Profile from "../components/Profile.vue"
  import { ref } from "vue";
  import { userStore } from "@/stores/user"
  const username = ref("");
  const password = ref("");
  const user = userStore();

  async function login(username, password) {
    console.log(username); 
    console.log(password);
  }
</script>

<style lang="scss" scoped>
  .container{
    position: fixed;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    float: center;
    background-color: lightgreen;
    line-height: 2;
    color: black;
    border-radius: 20px;
    height: 20.5vw;
    padding-left: 200px;
    padding-right: 200px;
    text-align: center;
  }
</style>
