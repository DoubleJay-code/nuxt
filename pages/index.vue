<template>
  <div>
    <Navbar/>
    <main class="main">
      <h1>Home page with any content</h1>
    </main>
  </div>
</template>

<script lang="ts">
import Navbar from "~/components/Navbar.vue";
export default {
  components: {
    Navbar,
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.main {
  max-width: 1000px;
  margin: 30px auto;
  text-align: center;
}
</style>
