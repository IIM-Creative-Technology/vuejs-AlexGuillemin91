<template>
  <div>
    <layout />
    <form @submit.prevent="submit">
      <h2>Editer une nouvelle page de blog</h2>
      <div class="form">
        <div class="info-basique">
          <div class="input">
            <label>Titre de la page</label>
            <input v-model="form.title" />
          </div>
          <div class="input">
            <label>Meta title</label>
            <input v-model="form.meta_title" />
          </div>
          <div class="input">
            <label>Meta description</label>
            <input v-model="form.meta_description" />
          </div>
        </div>
        <div class="info-image">
          <label>Ajouter une image</label>
          <img :src="form?.image" :alt="form?.meta_title" />
        </div>
      </div>
      <div class="textarea">
        <label>Corps de la page</label>
        <textarea v-model="form.content" rows="10" cols="50"></textarea>
      </div>
      <div class="submit-form">
        <button type="submit">Enregister les modifications</button>
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
  mounted() {
    this.initPost();
  },
  methods: {
    ...mapActions(["createPost"]),
    ...mapState({
      initPost(state) {
        const post = state.posts[0];
        this.form.title = post.title;
        this.form.meta_title = post.meta_title;
        this.form.meta_description = post.meta_description;
        this.form.image = post.image;
        this.form.content = post.content;
      },
    }),
    submit() {
      this.create();
    },
    // check si les inputs ont vides
    checkInputs() {
      if (
        this.form.title != "" &&
        this.form.slug != "" &&
        this.form.meta_title != "" &&
        this.form.meta_description != "" &&
        this.form.content != ""
      ) {
        if (this.form.image == "") {
          this.form.image = "@assets/logo.png";
        }
        return true;
      }
      return false;
    },

    // crée le post et ramène a la page précedente
    create() {
      if (this.checkInputs() == true) {
        this.createPost(this.form);
        this.$router.go(-1);
      }
    },
  },
};
</script>

<style>
.form {
  margin-top: 3rem;
  display: flex;
  justify-content: space-around;
}

.form .info-basique {
  display: block;
}

label {
  margin-right: 0.5rem;
}

.form .info-basique .input {
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
}

.textarea {
  margin-top: 2rem;
  display: flex;
  justify-content: center;
}

.submit-form {
  margin-top: 1rem;
  width: 80%;
  display: flex;
  justify-content: flex-end;
}
</style>