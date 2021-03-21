<template>
  <div class="postcard">
    <div class="body">
      <img class="img" :src="post.image" :alt="post.title" />
      <p>{{ post.meta_description }}</p>
      <router-link :to="{ name: 'admin.edit.post' }">
        <button>editer</button>
      </router-link>
      
      <button>supprimer</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: {
    post: {
      default: {},
    },
  },
  methods: {
    ...mapActions(["deletePost"]),
  },
};
</script>