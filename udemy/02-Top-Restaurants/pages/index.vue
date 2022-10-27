<template>
  <div>
    <!--     SE in template
    <Html :lang="dynamic > 50 ? 'en-GB' : 'en-US'">
      <Head>
        <Titile>Restaurantly</Titile>
      </Head>
      <Meta name="description" content="my page is cool"> </Meta>
      <Link rel="preload" href="" as="script"></Link>
    </Html> -->
    <div class="container">
      <h1>Welcome to Restaurantly</h1>

      <hr />
      <NuxtLink href="/restaurants">Go to Restaurants</NuxtLink>
    </div>
  </div>
</template>
<script setup>
useHead({
  //title: "my movie site",
  //second option is ;
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk}` : "restaurantly";
  },
});
</script>

<style scoped>
.container {
  text-align: center;
  margin-top: 5rem;
}
</style>
