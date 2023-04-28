<script setup>
</script>

<template>
  <nav class="navbar navbar-expand-md bg-light p-5">
    <div class="container">
      <a class="navbar-brand" href="/">
        <img src="../assets/center.svg" alt="Logo" width="130" height="90">
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu" aria-controls="menu"
        aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="menu">
        <div class="navbar-nav">
          <a class="nav-link active" aria-current="page" href="#">Inicio</a>
          <a class="nav-link" href="#">Turnos</a>
          <a class="nav-link" href="#">Nosotros</a>
          <a class="nav-link d-block d-md-none" href="#">Ingresar</a>
          <a class="nav-link d-block d-md-none" href="#">Crear cuenta</a>
        </div>
      </div>
      <div class="d-none d-md-block" >
        <button type="button" class="btn btn-outline-dark me-2">Ingresar</button>
        <button type="button" class="btn btn-dark">Crear cuenta</button>
      </div>
    </div>
  </nav>
</template>
<style scoped>

</style>

