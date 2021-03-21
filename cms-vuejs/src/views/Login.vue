<template>
<div>
  <layout />
  <form @submit.prevent="submit">
        <h2>Connexion</h2>
      <div class="form">
        <div class="info-basique">
          <div class="input">
            <label>Adresse mail</label>
            <input type="mail">
          </div>
          <div class="input">
            <label>Mot de passe</label>
            <input type="password">
          </div>
        </div>
      </div>
      <div class="submit-form">
        <button type="submit">Connexion</button>
      </div>
    </form>
</div>
</template>

<script>
import Layout from '../layouts/Layout.vue'
export default {
  components: { Layout },
  name: 'login',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2{
  margin-top: 3rem;
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
  display : flex;
  justify-content: space-between;
}

.submit-form {
  margin-top: 1rem;
  width: 60%;
  display: flex;
  justify-content: flex-end;
}
</style>