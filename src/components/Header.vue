<script setup>
import Login from './Login.vue';
import Register from './Register.vue';
import { useUserStore } from '../stores/user';
const usuario = useUserStore();
const salir = () => {
  usuario.logout();
}
</script>

<template>
  <nav class="navbar navbar-expand-md bg-dark">
    <div class="container">
      <router-link to="/">
        <a class="navbar-brand" href="/">
          <img src="../assets/center.svg" alt="Logo" width="130" height="90">
        </a>
      </router-link>
      <button class="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#menu"
        aria-controls="menu" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="menu">
        <div class="navbar-nav">
          <router-link to="/" class="text-decoration-none">
            <a class="nav-link text-white active me-md-2" aria-current="page" href="#">Inicio</a>
          </router-link>
          <router-link to="/Turnos" class="text-decoration-none">
            <a class="nav-link text-white me-md-2" href="#">Turnos</a>
          </router-link>
          <router-link to="/Nosotros" class="text-decoration-none">
            <a class="nav-link text-white me-md-2" href="#">Nosotros</a>
          </router-link>
          <template v-if="usuario.user.token === null">
            <a class="nav-link text-white d-block d-md-none" href="#" data-bs-toggle="modal"
              data-bs-target="#login">Ingresar</a>
            <a class="nav-link text-white d-block d-md-none" href="#" data-bs-toggle="modal"
              data-bs-target="#register">Registrarme</a>
          </template>
          <template v-else>
            <router-link to="/Perfil" class="text-decoration-none">
              <a class="nav-link text-white" href="#">Mi cuenta</a>
            </router-link>
            <a class="nav-link text-white d-block d-md-none" href="#" @click="salir">Salir</a>
          </template>
        </div>
      </div>
      <div class="d-none d-md-block" v-if="usuario.user.token === null">
        <button type="button" class="btn btn-light border me-3" data-bs-toggle="modal"
          data-bs-target="#login">Ingresar</button>
        <button type="button" class="btn btn-light border" data-bs-toggle="modal"
          data-bs-target="#register">Registrarme</button>
      </div>
      <div class="d-none d-md-block" v-else>
        <button type="button" class="btn btn-light border me-3" @click="salir">Salir</button>
      </div>
    </div>
  </nav>
  <Login />
  <Register />
</template>
<style scoped></style>

