<template>
  <div>
    <UserForm
      title="Log In"
      path="login"
      submitbutton="Log In"
    />
    <nav>
    <RouterLink to="/signup">Don't have an account?</RouterLink>
    </nav>
  </div>
</template>

<script setup>
import UserForm from '../components/UserForm.vue'
</script>