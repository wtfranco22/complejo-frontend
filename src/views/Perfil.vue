<script setup>
import { ref } from 'vue';
import { useUserStore } from '../stores/user';
const detalles = ref('Datos Personales');
const mostrar = (valor) => {
    detalles.value = valor;
}
const user = useUserStore();
user.getUser();
user.getShifts();
user.getPayments();
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
            <div v-else-if="detalles == 'Turnos'">
                <template v-for="turno in user.shifts" :key="turno.id">
                    <div class="row">
                        <div class="col">
                            Fecha y hora del turno:
                        </div>
                        <div class="col">
                            {{ turno.date }}
                        </div>
                        <div class="col">
                            Precio pagado por el turno:
                        </div>
                        <div class="col">
                            ${{ turno.price }}
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            Cancha del turno:
                        </div>
                        <div class="col">
                            {{ turno.court_id }}
                        </div>
                        <div class="col">
                            Dia del turno pagado:
                        </div>
                        <div class="col">
                            {{ turno.updated_at }}
                        </div>
                    </div>
                    <hr><hr>
                </template>
            </div>
            <div v-else-if="detalles == 'Pagos'" class="row">
                <template v-for="pago in user.payments" :key="pago.id">
                    <div class="row">
                        <div class="col">
                            Fecha y hora del pago:
                            {{ pago.updated_at }}
                        </div>
                        <div class="col">
                            Metodo de pago:
                            {{ pago.method }}
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            Descripcion del pago: 
                            {{ pago.description }}:
                        </div>
                    </div>
                    <hr><hr>
                </template>
            </div>
        </div>
    </div>
</template>