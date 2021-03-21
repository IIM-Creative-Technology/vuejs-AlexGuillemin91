<template>
  <div>
    <layout />
    <form @submit.prevent="submit">
      <h2>Créer une nouvelle page de blog</h2>
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
        <button type="submit">Créer la page</button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
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
    submit() {
      this.create();
    },
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
h2 {
  text-align: center;
}

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