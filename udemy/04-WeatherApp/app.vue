<script setup lang="ts">
const cookie = useCookie("city");
const config = useRuntimeConfig();
console.log({ config });
if (!cookie.value) cookie.value = "Toronto";
const search = ref(cookie.value);
const input = ref("");
const background = ref("");

/* const { data: city, error } = useFetch(
  ()=>
  `https://api.openweathermap.org/data/2.5/weather?q=${search.value}&units=metric&appid=64e28f64b16b0f6cfeea0039ad3536da`
); */
//const { data: city, error,refresh } = useAsyncData(
const { data: city, error } = useAsyncData(
  "city",
  async () => {
    let response;
    try {
      response = await $fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${search.value}`,
        {
          params: {
            units: "metric", //&units=mitrics
            appid: config.WEATHER_APP_SECRET,
          },
        }
      );
      cookie.value = search.value;
      const temp = response.main.temp;
      if (temp <= -10) {
        background.value =
          "https://images.unsplash.com/photo-1483664852095-d6cc6870702d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80";
      } else if (temp > -10 && temp <= 0) {
        background.value =
          "https://images.unsplash.com/photo-1476820865390-c52aeebb9891?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80";
      } else if (temp > 0 && temp <= 10) {
        background.value =
          "https://images.unsplash.com/photo-1560258018-c7db7645254e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=4032&q=80";
      } else {
        background.value =
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3546&q=80";
      }
    } catch (e) {}
    return response;
  },
  {
    watch: [search], //to refresh data
  }
);
const handleClick = () => {
  const formatedSearch = input.value.trim().split(" ").join("+");
  search.value = formatedSearch;
  input.value = "";
  //refresh() to refresh asyncData
};

const goBack = () => (search.value = cookie.value);
</script>

<template>
  <div v-if="city" class="h-screen relative overflow-hidden">
    <img :src="background" />
    <div class="absolute w-full h-full top-0 overlay" />
    <div class="absolute w-full h-full top-0 p-48">
      <div class="flex justify-between">
        <div>
          <h1 class="text-7xl text-white">{{ city.name || "d" }}</h1>
          <p class="font-extralight text-2xl mt-2 text-white">Sunday Dec 9th</p>
          <img
            :src="`https://openweathermap.org/img/wn/${city.weather[0].icon}@4x.png`"
            class="w-56 icon"
          />
        </div>
        <div>
          <p class="text-9xl text-white font-extralight">
            {{ city.main.temp }}°
          </p>
        </div>
      </div>
      <div class="mt-20">
        <input
          type="text"
          class="w-1/2 h-10"
          placeholder="Search a city..."
          v-model="input"
        />
        <button class="bg-sky-400 w-20 text-white h-10" @click="handleClick">
          Search
        </button>
      </div>
    </div>
  </div>
  <div v-else class="flex items-center mt-20 flex-col">
    <h1>No city found</h1>
    <button
      class="mt-5 bg-sky-400 px-10 w-3/5 text-white h-10 inline-block"
      @click="goBack"
    >
      Go Back
    </button>
  </div>
</template>

<style scoped>
.overlay {
  background-color: rgba(0, 0, 0, 0.5);
}
.icon {
  margin-left: -2.75rem;
  margin-top: -2.75rem;
}
</style>
