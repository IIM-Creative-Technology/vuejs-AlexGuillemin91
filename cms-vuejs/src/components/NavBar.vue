<template>
  <div class="hero-head">
    <nav class="navbar" id="nav">
      <div class="container">
        <div class="navbar-brand">
          <router-link :to="{ name: 'admin' }">
            Gérer le blog
          </router-link>
          <span class="mx-3">|</span>
          <router-link :to="{ name: 'blog' }">
            Blog
          </router-link>
          <span class="mx-3">|</span>
          <router-link :to="{ name: 'login' }">
            Login
          </router-link>
          <span class="mx-3">|</span>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

