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