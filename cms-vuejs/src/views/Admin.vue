<template>
  <div>
    <layout />
    <router-link :to="{ name: 'admin.create.post' }">
      Créer une page
    </router-link>
    <post-list />
  </div>
</template>

<script>
import PostList from '../components/PostList.vue';
import Layout from "../layouts/Layout.vue";

export default {
  name: "admin",
  components: {
    Layout,
    PostList,
  },
};
</script>

<style scoped>
</style>