<template>
  <form>
    <h1>Login</h1>
    <label
      >Username
      <input type="text" />
    </label>
    <br />
    <br />
    <label
      >Password
      <input type="password" />
    </label>
  </form>
</template>

<script setup>
//now navbar is not visible for login page
definePageMeta({
  layout: "plain",
});
</script>
