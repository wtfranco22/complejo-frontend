<script setup>
import { ref } from 'vue';
import axios from 'axios';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
const fechaTurno = ref(new Date());
const cargando = ref(false);
const turnosExito = ref(false);
let formateada = null;
var turnos = null;
const formatearFecha = (fechaTurno) => {
    const day = fechaTurno.getDate();
    const month = fechaTurno.getMonth() + 1;
    const year = fechaTurno.getFullYear();
    formateada = `${day}-${month}-${year}`;
    return `Turno para el dia ${day}-${month}-${year}`;
}
const buscarFecha = () => {
    (formateada) ? formateada : formatearFecha;
    console.log(formateada);
    cargando.value = true;
    setTimeout(() => {
        axios.get(`http://192.168.0.212/api/shifts/${formateada}`)
            .then(response => {
                turnos = (response.data.shifts);
                cargando.value = false;
                turnosExito.value = true;
            })
            .catch(error => {
                if (error.response) {
                    //el servidor avisa que hubo un error de datos
                    console.log('llego al servidor pero devolvio error');
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                } else if (error.request) {
                    //se solicita la peticion pero el servidor no responde
                    console.log('Se envio pero no hubo respuesta');
                    console.log(error.request);
                } else {
                    console.log('Falllo por otra cosa');
                    console.log('FALLO!', error.message);
                }
                console.log(error.config);
                cargando.value = false;
            });
    }, 2000) //5 seg de espera
}
const turnoSeleccionado = ref(null);
const seleccionarTurno = (idTurno) => {
    return turnoSeleccionado.value = {
        day_hour: turnos[idTurno].dayhour_id,
        court_id: turnos[idTurno].court_id,
        hour: turnos[idTurno].hour,
        court: turnos[idTurno].court,
        date: formateada
    };
}
import { useUserStore } from '../stores/user';
const user = useUserStore();
const generarTurno = () =>{
    if(user.user.token===null){
        alert('Necesita iniciar su cuenta');
    }else{
        user.pedirTurno(turnoSeleccionado);
    }
}
</script>

<template>
    <div class="row p-5">
        <div class="col-8">
            <VueDatePicker v-model="fechaTurno" :format="formatearFecha" auto-apply :enable-time-picker="false" />
        </div>
        <button type="button" @click="buscarFecha" class="col-4 btn btn-primary" data-bs-toggle="modal"
            data-bs-target="#staticBackdrop">
            Buscar
        </button>
    </div>
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header px-5">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel">Recordatorio</h1>
                </div>
                <div class="modal-body px-5">
                    Registrate y verifica tu correo,<br>para solicitar y señar el turno
                </div>
                <div class="modal-footer">
                    <button :disabled="cargando" disabled type="button" class="btn btn-primary" data-bs-dismiss="modal">
                        <span v-if="cargando" class="spinner-border spinner-border-sm" role="status"
                            aria-hidden="true"></span>
                        Entendido</button>
                </div>
            </div>
        </div>
    </div>
    <div class="container col" v-if="turnosExito">
        <table class="table table-striped-columns">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Cancha</th>
                    <th scope="col">Horario</th>
                    <th scope="col">descripción</th>
                    <th scope="col">Seleccionar</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(horario, index) in turnos" :key="index">
                    <th scope="row">{{ index + 1 }}</th>
                    <td>{{ horario.court_id }}</td>
                    <td>{{ horario.hour }}</td>
                    <td>{{ horario.court }}</td>
                    <td>
                        <button type="button" class="btn btn-primary" @click="seleccionarTurno(index)"
                            data-bs-toggle="modal" data-bs-target="#pedirTurno">
                            Seleccionar
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <div class="modal fade" id="pedirTurno" data-bs-backdrop="static" data-bs-keyboard="false"
        tabindex="-1" aria-labelledby="pedirTurnoLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header px-5">
                    <h1 class="modal-title fs-5" id="pedirTurnoLabel">Turno Seleccionado</h1>
                </div>
                <div class="modal-body px-5" v-if="turnoSeleccionado">
                    el dia {{ formateada }} a las {{ turnoSeleccionado.hour }} en la cancha {{ turnoSeleccionado.court_id }}
                    <br>
                    Cancha: {{ turnoSeleccionado.court }}
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button @click="generarTurno" type="button" class="btn btn-primary" data-bs-dismiss="modal">Solicitar</button>
                </div>
            </div>
        </div>
    </div>
</template>