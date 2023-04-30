<script setup>
var anio = new Date().getFullYear();
</script>

<template>
  <div class="container-fluid bg-dark">
    <footer class="d-flex flex-wrap justify-content-between align-items-center p-3">
      <div class="col-8 d-flex align-items-center">
        <router-link to="/">
        <a href="/" class="me-2">
          <img src="../assets/center.svg" alt="Logo" width="130" height="90">
        </a>
      </router-link>
        <span class="mt-2 text-muted"><i class="bi bi-cc-circle"></i> {{anio}} Complejo center</span>
      </div>

      <ul class="nav mt-2 col-md-4 justify-content-end list-unstyled d-flex">
        <li class="ms-3"><a class="text-muted" target="_blank" href="https://api.whatsapp.com/send?phone=2996017699">
          <i class="bi bi-whatsapp" style="font-size: 1rem; color: #d40c64 ;"></i>
        </a></li>
        <li class="ms-3"><a class="text-muted" target="_blank" href="https://www.instagram.com/wtfranco22/">
          <i class="bi bi-instagram" style="font-size: 1rem; color: #d40c64;"></i>
        </a></li>
        <li class="ms-3"><a class="text-muted" target="_blank" href="https://www.facebook.com/wtfranco22/">
          <i class="bi bi-facebook" style="font-size: 1rem; color: #d40c64;"></i>
        </a></li>
      </ul>
    </footer>
  </div>
</template>

<style scope>
.container-fluid{
  border-top: 2px solid #d40c63;
}
</style>