<script setup>
// const { data } = useAsyncData("city", async () => {
//   let response;
//   try {
//     response = await $fetch("https://jsonplaceholder.typicode.com/todos/1", {});
//   } catch (e) {}

import { fetchData } from "~~/helpers/helperFunctions";

//   return response;
// });

const ds = await fetchData();
</script>
<template>
  <div>
    <p>todo</p>
    <p>{{ ds }}</p>
    <div>{{}}</div>
  </div>
</template>
