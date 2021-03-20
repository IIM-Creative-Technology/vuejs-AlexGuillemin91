<template>
  <div class="hero-head">
    <nav class="navbar" id="nav">
      <div class="container">
        <div class="navbar-brand">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'admin' }">
                Gérer le blog
              </router-link>
              <span class="mx-3">|</span>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'blog' }">
                Blog
              </router-link>
              <span class="mx-3">|</span>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'login' }">
                Login
              </router-link>
              <span class="mx-3">|</span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

