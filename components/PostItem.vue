<template>
  <div class="post">
    <img class="post__img" :src="post.image" alt="post image" >
    <h2>{{post.title}}</h2>
    <hr/>
    <p>create: {{post.createdAt}}</p>
    <hr/>
    <p>{{post.preview}}</p>
    <button @click="openPost(post.id)" class="post__btn">
      <a href="#" class="post__link" @click.prevent="openPost(post.id)">
        Подробнее...
      </a>
    </button>
  </div>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue'
import {Post} from "~/pages/onepost/_id.vue";

export default defineComponent({
  props: {
    post: Object as PropType<Post>,
  },
  methods: {
    openPost(id: string) {
      this.$router.push('/onepost/' + id)
    }
  }
})
</script>

<style>
.post {
  width: 32%;
  padding: 5px;
  margin-bottom: 10px;
  border: 1px solid lightgray;
  display: flex;
  flex-direction: column;
}
.post__img {
  flex: 1 1 auto;
  min-height: 240px;
  width: 100%;
}
hr {
  border: 1px solid black;
  margin: 10px 0;
}
.post__btn {
  max-width: 150px;
  padding: 5px 10px;
  border-radius: 20px;
  margin-top: 10px;
  background: teal;
  color: white;
}
a.post__link:active,
a.post__link:hover,
a.post__link {
  text-decoration: none;
  color: white;
}
</style>
