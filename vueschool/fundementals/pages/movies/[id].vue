<template>
  <div>
    {{ data }}
  </div>
</template>

<script setup>
const route = useRoute();
//i will give unique parameter for cache
const { data } = useAsyncData(
  `/movies/${route.params.id}`,
  () => {
    return $fetch(
      `http://www.omdbapi.com/?apikey=8e3f600b&i=${route.params.id}`
    );
  },
  {
    //I can choose the data easly with pick or override it with transform
    pick: ["Plot", "Title"], //BP

    /*     transform(data) {
      //if I just wanna object title
     // return data.Title;
     //And I can also return an object
     return {
      Plot:data.Plotm,
      Title : data.Title
     }
    }, */
  }
);
console.log(data);
</script>
