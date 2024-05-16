<template>
    <div style="color:black;" class= "container">
        <Profile/>
        <div>
            <h1>User: {{ storeCounter.user.username }}</h1>
        </div>
        <div>
            <h1 style="color:black;">Change your user settings here!</h1>
        </div>
        <div>
            <label id="color" for="color">Change Background Color:</label>
            <select name="colors" id="selectColor" v-model="color">
              <option value="black">Black</option>
              <option value="white">White</option>
              <option value="#f05c79">Red</option>
              <option value="purple">Purple</option>
              <option value="turquoise">Blue</option>
              <option value="green">Green</option>
              <option value="#F0E68C">Yellow</option>
            </select>
            <button @click= "storeCounter.changeColor(color);getColor()" class="button">Apply Color</button>
        </div>
        <div>
            <label id="font" for="font">Change Font Size:</label>
            <select name="font" id="font" v-model="font_size">
              <option value="8px">8</option>
              <option value="12px">12</option>
              <option value="16px">16</option>
              <option value="24px">24</option>
            </select>
            <button @click= "storeCounter.changeFont(font_size);getFont()" class="button">Apply Font</button>
        </div>
    </div>
</template>

<script setup>
    import Profile from '@/components/Profile.vue';
    import { userStore } from '@/stores/user';
    import { ref } from "vue";
    const storeCounter = userStore();
    const color = ref("");
    const font_size = ref("")
    function getColor(){
        document.body.style.backgroundColor = storeCounter.user_property.color;
    };
    function getFont(){
        document.body.style.fontSize = storeCounter.user_property.font_size;
    }

</script>

<style lang="scss" scoped>
    .container{
        background-color:lightgreen;
    }
</style>
