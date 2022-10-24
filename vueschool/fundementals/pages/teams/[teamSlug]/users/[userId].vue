<template>
  <p>
    teams/discover/users/3507 <br />
    {{ message }}
  </p>
</template>

<script setup>
//Nuxt makes imports automatically
const route = useRoute();
const message = computed(
  () =>
    `I am on team ${route.params.teamSlug} and my id is ${route.params.userId}`
);
</script>

<!-- 
<template>
  I can also write like that
  <p>
    teams/discover/users/3507 <br />
    I am on team {{ $route.params.teamSlug }} <br />
    and my user id is {{ $route.params.userId }}
  </p>
</template> -->
