<<<<<<< HEAD
<template>
  <div id="app">
    <NAVBAR />
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import NAVBAR from "@/components/NAVBAR.vue"

export default {
  name: "App",
  components: {
    NAVBAR
  }
};
</script>

<style>

body {
  margin: 0;
  font-family: Arial, sans-serif;
}

main {
  padding: 20px;
}
</style>
=======
<script setup>

</script>

<template>
  <div>
    <router-view/>
  </div>
  
</template>

<style scoped>


</style>
>>>>>>> 87f8e6c1d6b9a810d969da743b166e5b6072a061
