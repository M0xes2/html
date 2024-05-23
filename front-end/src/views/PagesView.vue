<template>
  <div class="box">
    <!--PageSetup
      :title="page.name"
      :description="page.description"
      :author="page.author"
    /!-->
    <!--div v-if="page.author == userStore.getUser()">
      <button @click="router.push(`/edit/${route.params.id}`)">Edit</button>
      <button @click="router.push(`/delete/${route.params.id}`)">Delete</button>
    </div!-->
    <div>
      <button @click="router.push(`/edit/${route.params.id}`)">Edit</button>
      <button @click="router.push(`/delete/${route.params.id}`)">Delete</button>
    </div>
  </div>
</template>

<script setup>
  import { onMounted, ref } from "vue";
  import PageSetup from "../components/Page.vue";
  import { useUserStore } from "../stores/auth";
  import { useRoute, useRouter } from "vue-router";

  const userStore = useUserStore();
  const route = useRoute();
  const router = useRouter();
  const page = ref("");

  async function getPages() {
    console.log(route.params.id);
    let res = await fetch(`http://localhost:3000/page/${route.params.id}`);

    let data = await res.json();
    page.value = data;
    console.log(page.value);
  }

  onMounted(() => {
    getPages();
  });

</script>

<style>
  .box{
      position: fixed;
      top: 30%;
      left: 50%;
      transform: translate(-50%, -50%);
      float: center;
      background-color: lightgreen;
      line-height: 2;
      color: black;
      border-radius: 20px;
      height: 12.5vw;
      padding-left: 200px;
      padding-right: 200px;
      text-align: center;
    }
</style>