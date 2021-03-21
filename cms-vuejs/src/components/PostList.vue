<template>
  <div>
    <post-card v-for="(post, index) in posts" :key="index" />
  </div>
</template>

<script>
import PostCard from "@/components/PostCard";
import { mapState } from "vuex";
export default {
  components: {
    PostCard
  },
  computed: {
    ...mapState(["posts"])
  },
};
</script>