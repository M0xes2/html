<template>
  <div>
    <PokeCard
      v-for="(monster, index) in pokemon"
      :key="monster.name"
      :pokemon="monster"
      :id="index + 1"
    />
  </div>
</template>

<script setup>
import {ref, onMounted} from "vue"
import PokeCard from '../components/PokeCard.vue'
const pokemon = ref("");

async function getPokemon() {
  let res = await fetch("https://pokeapi.co/api/v2/pokemon");
  let data = await res.json();
  pokemon.value = data.results;
}
onMounted(() => {
  getPokemon();
});
</script>
