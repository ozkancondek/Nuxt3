<template>
  <div class="prose w-full max-w-2xl h-9">
    <h1>Login to reach whole chapters</h1>

    <br />

    <button
      class="bg-blue-500 text-white font-bold py-2 px-4 rounded"
      @click="login"
    >
      Log in with Github
    </button>
  </div>
</template>

<script setup lang="ts">
const { title } = useCourse();
const supabase = useSupabaseClient();
const login = async () => {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: "github",
  });
  if (error) {
    console.log(error);
  }
};
</script>
