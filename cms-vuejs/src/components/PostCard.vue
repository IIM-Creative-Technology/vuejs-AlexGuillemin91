<template>
  <div class="postcard">
    <div class="body">
      <div class="image">
        <img class="img" :src="posts[0].image" :alt="posts[0].title" />
      </div>
      <div class="infos">
        <h3>{{ posts[0].title }}</h3>
        <p>{{ posts[0].meta_description }}</p>
      </div>
      <div class= "button">
        <router-link :to="{ name: 'admin.edit.post' }">
          <button>editer</button>
        </router-link>
        <button>supprimer</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  props: {
    post: {
      default: {},
    },
  },
  computed: {
    ...mapState(["posts"]),
  },
};
</script>

<style>
.postcard {
  border: 1px solid black;
  width: 60%;
  margin: 3rem auto;
}

.body {
  display: flex;
  justify-content: space-between;
}

.infos{
    margin: 0 1rem;
}

.button{
    display: flex;
    align-items: center;
    margin-right: 1rem;
}
</style>