<script setup>
import { useUserStore } from '../stores/user';
const usuario = useUserStore();
var user = {
    correo: '',
    contrasenia: '',
    contrasenia2: '',
    nombre: '',
    apellido: '',
    documento: '',
    celular: ''
}
const registrarme = async () => {
    if (user.correo && user.contrasenia && user.contrasenia2 && user.nombre && user.apellido && user.documento && user.celular) {
        if(await usuario.registerUser(user)){
            bootstrap.Modal.getInstance(document.getElementById('register')).hide(); //boorar modal
        } else {
            alert('Usuario ya registrado');
        }
    } else {
        alert('Ingrese los datos');
    }
}
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
                            <input type="email" class="form-control" id="registerEmail" v-model="user.correo">
                        </div>
                        <div class="col-md-6">
                            <label for="registerPassword" class="form-label">Contraseña</label>
                            <input type="password" class="form-control" id="registerPassword" v-model="user.contrasenia">
                        </div>
                        <div class="col-md-6">
                            <label for="registerPasswordConfirmed" class="form-label">Confirmar contraseña</label>
                            <input type="password" class="form-control" id="registerPasswordConfirmed"
                                v-model="user.contrasenia2">
                        </div>
                        <div class="col-12">
                            <label for="registerName" class="form-label">Nombre</label>
                            <input type="text" class="form-control" id="registerName" v-model="user.nombre">
                        </div>
                        <div class="col-12">
                            <label for="registerLastName" class="form-label">Apellido</label>
                            <input type="text" class="form-control" id="registerLastName" v-model="user.apellido">
                        </div>
                        <div class="col-md-4">
                            <label for="registerDni" class="form-label">Dni</label>
                            <input type="number" minlength="8" maxlength="8" class="form-control" id="registerDni"
                                v-model="user.documento">
                        </div>
                        <div class="col-md-8">
                            <label for="registerPhone" class="form-label">Celular</label>
                            <input type="number" class="form-control" id="registerPhone" v-model="user.celular">
                        </div>
                        <div class="col-12">
                            <button type="submit" @click.prevent="registrarme" class="btn btn-primary">Registrarme</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>