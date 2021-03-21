<template>
  <div>
    <layout />
    <router-link :to="{ name: 'admin.create.post' }">
      Créer une page
    </router-link>
  </div>
</template>

<script>
import Layout from "../layouts/Layout.vue";

export default {
  name: "admin",
  components: {
    Layout,
  },
};
</script>

<style scoped>
</style>