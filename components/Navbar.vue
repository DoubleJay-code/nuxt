<template>
  <nav class="navbar">
    <div class="container">
      <a class="navbar__link" href="/">Nuxt Posts</a>
      <ul class="navbar__list">
        <li class="navbar__item">
          <nuxt-link exact class="navbar__link" to="/">Home</nuxt-link>
        </li>
        <li class="navbar__item">
          <nuxt-link exact class="navbar__link" to="/posts">Posts</nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">

export default {

}
</script>

<style scoped>
.navbar {
  color: #005050;
  background: lightgray;
  font-size: 20px;
  font-weight: 700;
}
.container {
  height: 50px;
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.navbar__list {
  display: flex;
  list-style-type: none;
}
.navbar__link:last-child {
  margin-left: 50px;
}
a.navbar__link:active,
a.navbar__link:hover,
a.navbar__link {
  text-decoration: none;
  color: #005050;
}
</style>
