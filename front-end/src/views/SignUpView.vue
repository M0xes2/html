<template>
  <div>
    <UserForm
      title="Sign Up"
      path="signup"
      submitbutton="Sign Up!"
    />
    <nav>
    <RouterLink to="/login">Already have an account?</RouterLink>
    </nav>
  </div>
</template>

<script setup>
import UserForm from '../components/UserForm.vue'
</script>
