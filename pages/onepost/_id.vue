<template>
  <div class="post-page">
    <p class="post-page__preview">{{PostByID.preview}}</p>
    <img class="post-page__img" :src="PostByID.image" alt="post image" >
    <h2 class="post-page__title">{{PostByID.title}}</h2>
    <hr/>
    <p class="post-page__preview">create: {{PostByID.createdAt}}</p>
    <hr/>
    <p class="post-page__body">{{PostByID.description}}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export interface Post {
  id: string,
  createdAt: string,
  title: string,
  preview: string,
  image: string,
  description: string,
}
export default defineComponent ({
  data() {
    return {
      PostByID: {} as Post,
    }
  },
  methods: {
    async fetchPost() {
      try {
        await fetch('https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/' + this.$route.params.id)
          .then(data => data.json())
          .then((json: Post) => this.PostByID = json)
      } catch (error) {
        alert(error);
      }
    }
  },
  mounted() {
    this.fetchPost()
  }
})
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.post-page {
  margin: 0 auto;
  max-width: 1000px;
  padding-top: 50px;
  text-align: center;
}
.post-page__img {
  width: 70%;
  margin: 0 auto 20px;
}
.post-page__preview {
  margin-bottom: 20px;
  font-size: 20px;
}
.post-page__body {
  font-size: 20px;

}
</style>
