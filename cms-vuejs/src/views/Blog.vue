<template>
<div>
  <layout />
  <post-list />
</div>
</template>

<script>
import PostList from '../components/PostList.vue'
import Layout from '../layouts/Layout.vue'
export default {
  components: { Layout, PostList },
  name: 'blog',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>