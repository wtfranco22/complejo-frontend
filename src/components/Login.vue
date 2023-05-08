<script setup>
import { useUserStore } from '../stores/user';
const usuario = useUserStore();
var user = {
    correo: '',
    contrasenia: ''
}
const ingresar = async () => {
    if (user.correo && user.contrasenia) {
        if(await usuario.login(user)){
            bootstrap.Modal.getInstance(document.getElementById('login')).hide(); //boorar modal
        } else {
            alert('Datos incorrectos');
        }
    } else {
        alert('Ingrese los datos');
    }
}
</script>
<template>
    <div class="modal fade" id="login" tabindex="-1" aria-labelledby="loginLabel" aria-hidden="true">
        <div class="modal-dialog" role="form">
            <div class="modal-content">
                <div class="modal-header p-5 pb-4 border-bottom-0">
                    <h1 class="fw-bold mb-0 fs-2">Ingresar</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body p-5 pt-0">
                    <form class="">
                        <div class="form-floating mb-3">
                            <input type="email" class="form-control rounded-3" v-model="user.correo" placeholder="">
                            <label for="userEmail">Correo electrónico</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="password" class="form-control rounded-3" v-model="user.contrasenia" placeholder="">
                            <label for="userPassword">Contraseña</label>
                        </div>
                        <button @click.prevent="ingresar" class="w-100 mb-2 btn btn-lg rounded-3 btn-primary"
                            type="submit">Iniciar sesión</button>
                        <hr class="my-4">
                        <h2 class="fs-5 fw-bold mb-3 text-center">O</h2>
                        <button class="w-100 py-2 mb-2 btn btn-outline-primary rounded-3" type="submit">
                            <i class="bi bi-facebook" style="font-size: 1rem;"></i>
                            Ingresar con facebook
                        </button>
                        <button class="w-100 py-2 mb-2 btn btn-outline-danger rounded-3" type="submit">
                            <i class="bi bi-envelope-at-fill" style="font-size: 1rem;"></i>
                            Ingresar con gmail
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>