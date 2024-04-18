<template>
  <div>
    <CoolButton />
    <div class="container">
      <CoolCards
        v-for="widget in widgets"
        :key="widget.id"
        :title="widget.title"
        :img="widget.img"
      />
    </div>
    <h1>Hiii</h1>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

import CoolButton from "../components/CoolButton.vue";
import CoolCards from "../components/CoolCards.vue";
const widgets = [
  { id: 1, title: "Womp Womp", img: "https://i.imgur.com/EjOJYmu.jpeg" },
  { id: 2, title: "Nuh uh", img: "https://i.imgur.com/EjOJYmu.jpeg" },
];

async function getPokemon() {
  let res = await fetch("https://pokeapi.co/api/v2/pokemon");
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 90vw;
  margin: 10px auto;
  background-color: aquamarine;
}
</style>
