<template>
  <div>
    <Navbar/>
    <div class="post-list">
      <PostItem v-for="post in posts" :post="post" :key="post.id" />
    </div>
    <ul class="pagination">
      <li v-for="pag in totalPages">{{pag}}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Navbar from "~/components/Navbar.vue";
import {Post} from "~/pages/onepost/_id.vue";
export default defineComponent ({
  data() {
    return {
      posts: [] as Post[],
      totalPages: 8,
      limit: 9,
      page: 1,
    }
  },
  components: {
    Navbar,
  },
  methods: {
    async fetchPosts() {
      try {
        await fetch('https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts')
          .then(data => data.json())
          .then((json: Post[]) => this.posts = json.slice(0, this.limit))
      } catch (error) {
        alert(error);
      }
    }
  },
  mounted() {
    this.fetchPosts()
  }
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
  margin: 0 auto;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  border: 1px solid lightgray;
}
.pagination {
  display: flex;
}
</style>
