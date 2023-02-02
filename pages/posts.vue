<template>
  <div>
    <Navbar/>
    <div class="post-list">
      <PostItem v-for="post in postsOnPage" :post="post" :key="post.id" />
      <ul class="pagination">
        <li
          v-for="pag in totalPages"
          @click="changePage(pag)"
          :class="{active: pag === page}"
          class="pagination__list"
        >
          {{pag}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue'
import Navbar from "~/components/Navbar.vue";
import {Post} from "~/pages/onepost/_id.vue";
export default defineComponent ({
  data() {
    return {
      allPosts: [] as Post[],
      postsOnPage: [] as Post[],
      totalPages: 0,
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
          .then((json: Post[]) => {
              this.allPosts = json.reverse()
              this.postsOnPage = json
                .slice(0, this.limit)
              this.totalPages = Math.ceil(json.length / this.limit)
            }
          )
      } catch (error) {
        alert(error);
      }
    },
    changePage(pag: number) {
      this.page = pag
      localStorage.setItem('page', String(pag))
      this.postsOnPage = this.allPosts
        .slice(((this.page * this.limit) - this.limit), (this.page * this.limit))
    },
  },
  mounted() {
    this.page = Number(localStorage.getItem('page'))
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


<!--this.postsOnPage = json-->
<!--.reverse()-->
<!--.slice(((this.page * this.limit) - this.limit), (this.page * this.limit))-->
<!--this.totalPages = Math.ceil(json.length / this.limit)-->
