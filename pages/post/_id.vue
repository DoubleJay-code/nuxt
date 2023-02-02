<template>
  <div class="post-page">
    <p class="post-page__preview">{{$store.state.PostByID.preview}}</p>
    <img class="post-page__img" :src="$store.state.PostByID.image" alt="post image" >
    <h2 class="post-page__title">{{$store.state.PostByID.title}}</h2>
    <hr/>
    <p class="post-page__preview">create: {{$store.state.PostByID.createdAt}}</p>
    <hr/>
    <p class="post-page__body">{{$store.state.PostByID.description}}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent ({
  mounted() {
    this.$store.dispatch('fetchPostByID', this.$route.params.id)
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
