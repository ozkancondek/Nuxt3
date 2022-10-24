<template>
  <div>
    {{ data }}
  </div>
</template>

<script setup>
const route = useRoute();
//i will give unique parameter for cache

/*
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
    },   
  }
);

*/
//Another shorter method is useFetch()

const { data } = await useFetch(
  `http://www.omdbapi.com/?apikey=8e3f600b&i=${route.params.id}`,
  {
    pick: ["Plot", "Title"],
    key: `/movies/${route.params.id}`,
    onResponse({ request, response }) {
      if (response._data.Error === "Incorrect IMDB ID.") {
        showError({
          statusCode: 404,
          statusMessage: "Uuups!!! Something went wrong",
        });
      }
    },
  }
);
useHead({
  /*   title: "my PAge", */
  title: data.value.Title,
  // i can also add meta: for SEO
});
</script>
