<script setup lang="ts">
import { Gender, Popularity, Length, names } from "./data";

interface IOptionns {
  gender: Gender;
  popularity: Popularity;
  length: Length;
}

const options = reactive<IOptionns>({
  gender: Gender.GIRL,
  popularity: Popularity.TRENDY,
  length: Length.ALL,
});

const selectedNames = ref<string[]>([]);

const computeSelectedNames = () => {
  const filteredNames = names
    .filter((name) => name.gender === options.gender)
    .filter((name) => name.popularity === options.popularity)
    .filter((name) => {
      if (options.length === Length.ALL) return true;
      else return name.length === options.length;
    });
  selectedNames.value = filteredNames.map((name) => name.name);
};

const optionsArray = [
  {
    title: "1) Choose a name gender",
    category: "gender",
    buttons: [Gender.GIRL, Gender.BOY, Gender.UNISEX],
  },
  {
    title: "1) Choose a name popularity",
    category: "ppularity",
    buttons: [Popularity.TRENDY, Popularity.UNIQUE],
  },
  {
    title: "1) Choose a name Length",
    category: "length",
    buttons: [Length.ALL, Length.LONG, Length.SHORT],
  },
];
</script>

<template>
  <div class="container">
    <h1>Baby Name Generator</h1>
    <p>Choose your options and click the "Find Names" buttom below</p>
    <div class="options-container">
      <Option
        v-for="option in optionsArray"
        :key="option.title"
        :option="option"
        :options="options"
      ></Option>

      <button class="primary" @click="computeSelectedNames">Find Names</button>
    </div>
    <div class="cards-container">
      <div v-for="name in selectedNames" :key="name" class="card">
        <h4>{{ name }}</h4>
        <p>x</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  font-family: Arial, Helvetica, sans-serif;
  color: rgb(27, 60, 138);
  max-width: 50rem;
  margin: 0 auto;
  text-align: center;
}
h1 {
  font-size: 3rem;
}
.options-container {
  background-color: rgb(255, 238, 236);
  border-radius: 2rem;
  padding: 1rem;
  width: 95%;
  margin: 0 auto;
  margin-top: 4rem;
  position: relative;
}

.primary {
  background-color: rgb(249, 87, 89);
  color: white;
  cursor: pointer;
  border-radius: 6.5rem;
  border: none;
  padding: 0.75rem 4rem;
  font-size: 1rem;
  margin-top: 1rem;
}
.cards-container {
  display: flex;
  margin-top: 3rem;
  flex-wrap: wrap;
}

.card {
  background-color: rgb(27, 60, 138);
  width: 28%;
  color: white;
  border-radius: 1rem;
  margin-bottom: 1rem;
  padding: 0.1rem;
  margin-right: 1rem;
  position: relative;
}

.card p {
  position: absolute;
  top: -20%;
  left: 92.5%;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.5);
}
</style>
