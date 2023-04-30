<script setup>
</script>
<template>
    <div class="modal fade" id="register" tabindex="-1" aria-labelledby="registerLabel" aria-hidden="true">
        <div class="modal-dialog" role="form">
            <div class="modal-content">
                <div class="modal-header p-5 pb-4 border-bottom-0">
                    <h1 class="fw-bold mb-0 fs-2">Registrarme</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body p-5 pt-0">
                    <form class="row g-3">
                        <div class="col-12">
                            <label for="registerEmail" class="form-label">Correo Electronico</label>
                            <input type="email" class="form-control" id="registerEmail">
                        </div>
                        <div class="col-md-6">
                            <label for="registerPassword" class="form-label">Contraseña</label>
                            <input type="password" class="form-control" id="registerPassword">
                        </div>
                        <div class="col-md-6">
                            <label for="registerPasswordConfirmed" class="form-label">Confirmar contraseña</label>
                            <input type="password" class="form-control" id="registerPasswordConfirmed">
                        </div>
                        <div class="col-12">
                            <label for="registerName" class="form-label">Nombre</label>
                            <input type="text" class="form-control" id="registerName">
                        </div>
                        <div class="col-12">
                            <label for="registerLastName" class="form-label">Apellido</label>
                            <input type="text" class="form-control" id="registerLastName">
                        </div>
                        <div class="col-md-4">
                            <label for="registerDni" class="form-label">Dni</label>
                            <input type="number" minlength="8" maxlength="8" class="form-control" id="registerDni">
                        </div>
                        <div class="col-md-8">
                            <label for="registerPhone" class="form-label">Celular</label>
                            <input type="number" class="form-control" id="registerPhone">
                        </div>
                        <div class="col-12">
                            <button type="submit" class="btn btn-primary">Registrarme</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>