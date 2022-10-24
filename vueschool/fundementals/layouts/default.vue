<template>
  <div>
    <nav style="display: flex; gap: 20px">
      <!--     <a href="/">Home</a>
      <a href="movies">Movies</a> -->
      <!--  I dont wanna refresh all page when i route to another page -->
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="movies">Movies</NuxtLink>
      <NuxtLink to="login">Login</NuxtLink>
      <NuxtLink to="https://v3.nuxtjs.org/" target="_blank"
        >Nuxt3 Website</NuxtLink
      >
    </nav>
    <hr />
    <slot> </slot>
  </div>
</template>
