<template>
  <div class="postcard">
    <div class="body">
      <img class="img" :src="post.image" :alt="post.title" />
      <p>{{ post.meta_description }}</p>
      <button>editer</button>
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
    }
  },
  methods: {
    ...mapActions(["deletePost"]),
  }
};
</script>