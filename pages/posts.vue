<template>
  <div>
    <Navbar/>
    <div class="post-list">
      <PostItem v-for="post in $store.state.postsOnPage" :post="post" :key="post.id" />
      <ul class="pagination">
        <li
          v-for="num in $store.state.totalPages"
          @click="$store.commit('changePage', num)"
          :class="{active: num === $store.state.page}"
          class="pagination__list"
        >
          {{num}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue'
import Navbar from "~/components/Navbar.vue";
export default defineComponent ({
  components: {
    Navbar,
  },
  mounted() {
    this.$store.commit('setPage')
    this.$store.dispatch('fetchPosts')
  },
})
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.post-list {
  max-width: 1000px;
  margin: 30px auto;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  border: 1px solid lightgray;
}
.pagination {
  display: inline-flex;
}
.pagination__list {
  list-style: none;
  padding: 5px 10px;
  font-size: 20px;
  border: 1px solid black;
  margin-right: 10px;
  cursor: pointer;
}
.active {
  border: 2px solid orange;
}
</style>
