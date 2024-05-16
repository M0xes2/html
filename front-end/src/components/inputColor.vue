<template>
    <div class="color">
        <label for="color" style="color:black;">Choose a color:</label>
        <select name="colors" id="selectColor" v-model="color">
            <option value="black">Black</option>
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
            <option value="yellow">Yellow</option>
        </select>
        <button @click= "inputCounter.changeColor(color);getColor()" class="button">Apply Color</button>
    </div>
</template>

<script setup>
    import { ref } from "vue";
    import { inputStore } from "@/stores/input";
    import inputText from "@/components/inputText.vue";
    const inputCounter = inputStore();
    const color = ref("");
    function getColor(){
    document.getElementById("edit").style.color = inputCounter.input_color;
    };    
</script>

<style lang="scss" scoped>

</style>
