<template>
  <div>
    <layout />
    <form @submit.prevent="submit">
      <div class="form">
        <div class="info-basique">
          <label>Titre de la page</label>
          <input v-model="form.title" />
          <label>Meta title</label>
          <input v-model="form.meta_title" />
          <label>Meta description</label>
          <input v-model="form.meta_description" />
        </div>
        <div class="info-image">
          <label>Ajouter une image</label>
          <img :src="form?.image" :alt="form?.meta_title" />
        </div>
      </div>
      <label>Corps de la page</label>
      <textarea v-model="form.content"></textarea>
      <div class="submit-form">
        <button type="submit">Créer la page</button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Layout from "../layouts/Layout.vue";

export default {
  components: { Layout },
  data() {
    return {
      form: {
        title: "",
        meta_title: "",
        meta_description: "",
        image: "@/assets/logo.png",
        content: "",
      },
    };
  },
  methods: {
    ...mapActions(["createPost"]),
    ...mapState({
      initPost(state) {
        const post = state.posts[0];
        this.form.title = post.title;
        this.form.meta_title = post.meta_title;
        this.form.meta_descripition = post.meta_descripition;
        this.form.image = post.image;
        this.form.content = post.content;
      },
    }),
    submit() {
      this.create();
    },
    checkInputs() {
      if (
        this.form.title != "" &&
        this.form.slug != "" &&
        this.form.meta_title != "" &&
        this.form.meta_descripition != "" &&
        this.form.content != ""
      ) {
        if (this.form.image == "") {
          this.form.image = "@assets/logo.png";
        }
        return true;
      }
      return false;
    },

    create() {
      if (this.checkInputs() == true) {
        this.createPost(this.form);
        this.$router.go("blog");
      }
    },
  },
};
</script>

<style>
</style>