<script setup>
import { useUserStore } from '../stores/user';
import { ref } from 'vue';
const user = useUserStore();
const turno = ref(user.turno);
const formaPago = ref(null);
const pagar = async () => {
    console.log(formaPago.value)
    if (formaPago.value) {
        await user.pagarTurno(formaPago.value);
    } else {
        alert('Ingrese los datos');
    }
}
</script>
<template>
    <div v-if="user.loading.value">
        <div class="d-flex justify-content-center">
            <div class="spinner-border text-danger m-5" style="width: 9rem; height: 9rem;" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    </div>
    <div v-else class="container my-5">
        <div class="row">
            <div class="col text-center">
                Fecha y hora
            </div>
            <div class="col">
                {{ turno.fecha }} a las {{ turno.hora }}
            </div>
        </div>
        <div class="row">
            <div class="col text-center">
                Descripcion
            </div>
            <div class="col">
                Cancha: {{ turno.idCancha }}, {{ turno.descripcion }}
            </div>
        </div>
        <div class="row">
            <div class="col text-center">
                Costo del turno $ {{ turno.precio }}
            </div>
        </div>
        <form class="col-6">
            <div class="form-floating mb-3">Metodo de pago: {{ formaPago }}</div>
            <select v-model="formaPago">
                <option disabled value="">pago</option>
                <option>Debito</option>
                <option>Credito</option>
                <option>Mercadopago</option>
                <option>Mi cuenta</option>
            </select>
            <button @click.prevent="pagar" class="btn btn-primary" type="submit">Pagar</button>
        </form>
    </div>
</template>