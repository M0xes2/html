<template>
  <div>
    <CoolButton />
    <ul>
      <li v-for="game in games" :key="game">{{ game }}</li>
    </ul>
    <h1>Hiii</h1>
  </div>
</template>

<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import CoolButton from "../components/CoolButton.vue"
let games = ["Portal", "Inscryption", "Fish"]
</script>


