<script setup>
import { ref } from 'vue';
import { useUserStore } from '../stores/user';
const detalles = ref('Datos Personales');
const mostrar = (valor) => {
    detalles.value = valor;
}
const user = useUserStore();
user.getUser();
</script>

<template>
    <div v-if="user.loading">
        <div class="d-flex justify-content-center">
            <div class="spinner-border text-danger m-5" style="width: 9rem; height: 9rem;" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    </div>
    <div v-else>
        <div class="container text-center my-5">
            <div class="row">
                <div class="col-10 col-md-8">
                    FOTO
                </div>
                <div class="col-2 btn-group dropstart">
                    <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        ver
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#" @click="mostrar('Datos Personales')">Mis datos</a></li>
                        <li><a class="dropdown-item" href="#" @click="mostrar('Turnos')">Mis turnos</a></li>
                        <li><a class="dropdown-item" href="#" @click="mostrar('Pagos')">Mis pagos</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="container my-5">
            <div class="row">
                <div class="col text-center">
                    {{ detalles }}
                </div>
                <div v-if="detalles == 'Datos Personales'" class="col">
                    Editar
                </div>
            </div>
            <div v-if="detalles == 'Datos Personales'" class="row">
                <div class="col-6">
                    Nombre:
                </div>
                <div class="col-6">
                    {{ user.user.name }}
                </div>
                <div class="col-6">
                    apellido:
                </div>
                <div class="col-6">
                    {{ user.user.lastName }}
                </div>
                <div class="col-6">
                    celular:
                </div>
                <div class="col-6">
                    {{ user.user.phone }}
                </div>
                <div class="col-6">
                    email:
                </div>
                <div class="col-6">
                    {{ user.user.email }}
                </div>
                <div class="col-6">
                    role:
                </div>
                <div class="col-6">
                    {{ user.user.role }}
                </div>
                <div class="col-6">
                    token:
                </div>
                <div class="col-6">
                    {{ user.user.token }}
                </div>
            </div>
            <div v-else-if="detalles == 'Pagos'" class="row">
                <div class="col">
                    Dia 12-3-2023
                </div>
                <div class="col">
                    cod: 0012, a las 20:00hs en la cancha 1
                </div>
            </div>
            <div v-else-if="detalles == 'Turnos'" class="row">
                <div class="col">
                    turnitos
                </div>
            </div>
        </div>
    </div>
</template>