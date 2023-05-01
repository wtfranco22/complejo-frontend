<script setup>
import { ref } from 'vue';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
const fechaTurno = ref(new Date());
var formateada = null;
const formatearFecha = (fechaTurno) => {
    const day = fechaTurno.getDate();
    const month = fechaTurno.getMonth() + 1;
    const year = fechaTurno.getFullYear();
    formateada = `${day}/${month}/${year}`;
    return `Turno para el dia ${day}/${month}/${year}`;
}
const buscarFecha = () => {
    console.log(formateada);
}

</script>

<template>
    <div class="row">
        <div class="col-8">
            <VueDatePicker v-model="fechaTurno" :format="formatearFecha" auto-apply :enable-time-picker="false" />
        </div>
        <div class="col-4">
            <button @click="buscarFecha" type="button" class="btn btn-primary">Buscar</button>
        </div>
    </div>
</template>