import { ref } from 'vue';
import axios from 'axios';
import { defineStore } from 'pinia';
import router from '../routes';

export const useUserStore = defineStore('user', () => {
    const user = ref({
        name: '',
        lastName: '',
        email: '',
        phone: 0,
        role: '',
        token: sessionStorage.getItem('token'),
    });
    const shifts = ref([]);
    const payments = ref([]);
    const loading = ref(false);
    const turno = ref({
        razon: 'payShift',
        idCancha: null,
        idHorario: null,
        descripcion: null,
        metodo: null,
        fecha: null,
        hora: null,
        precio: 1000,
    })
    const pedirTurno = (turn) => {
        turno.value.idCancha = turn.value.court_id;
        turno.value.idHorario = turn.value.day_hour;
        turno.value.descripcion = turn.value.court;
        turno.value.fecha = turn.value.date
        turno.value.hora = turn.value.hour
        router.push('/Pagar-turno');
    };
    const pagarTurno = async (formaDePago) => {
        loading.value = true;
        turno.value.metodo = formaDePago;
        await axios({
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
                'Authorization': 'Bearer ' + user.value.token
            },
            method: 'POST',
            url: 'http://127.0.0.1:80/api/payments',
            data: {
                date: turno.value.fecha,
                reason: turno.value.razon,
                method: turno.value.metodo,
                day_hour_id: turno.value.idHorario,
                court_id: turno.value.idCancha,
                price: turno.value.precio
            }
        })
            .then(response => {
                if (response.data.status) {
                    console.log(response.data);
                } else {
                    console.log(response.data);
                }
                loading.value = false;
            })
            .catch(error => {
                if (error.response) {
                    //el servidor avisa que hubo un error de datos
                    console.log('llego al servidor pero devolvio error');
                    console.log('Data', error.response.data);
                    console.log('Status', error.response.status);
                    console.log('Headers', error.response.headers);
                } else if (error.request) {
                    //se solicita la peticion pero el servidor no responde
                    console.log('Se envio pero no hubo respuesta');
                    console.log('Request', error.request);
                } else {
                    console.log('Falllo por otra cosa');
                    console.log('message!', error.message);
                }
                console.log(error.config);
                loading.value = false;
            });

    };
    const login = async (usuario) => {
        var acceso = false;
        loading.value = true;
        await axios({
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
            },
            method: 'post',
            url: 'http://127.0.0.1:80/api/login',
            data: {
                email: usuario.correo,
                password: usuario.contrasenia
            }
        })
            .then(response => {
                if (response.data.status) {
                    acceso = true;
                    user.value.token = response.data.access_token;
                    sessionStorage.setItem('token', user.value.token);
                }
                loading.value = false;
            })
            .catch(error => {
                if (error.response) {
                    //el servidor avisa que hubo un error de datos
                    console.log('llego al servidor pero devolvio error');
                    console.log('Data', error.response.data);
                    console.log('Status', error.response.status);
                    console.log('Headers', error.response.headers);
                } else if (error.request) {
                    //se solicita la peticion pero el servidor no responde
                    console.log('Se envio pero no hubo respuesta');
                    console.log('Request', error.request);
                } else {
                    console.log('Falllo por otra cosa');
                    console.log('message!', error.message);
                }
                console.log(error.config);
                loading.value = false;
            });
            return acceso;
    };
    const getUser = async () => {
        loading.value = true;
        await axios({
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
                'Authorization': 'Bearer ' + user.value.token
            },
            method: 'GET',
            url: 'http://127.0.0.1:80/api/profile',
        })
            .then(response => {
                if (response.data.status) {
                    user.value.name = response.data.user.name;
                    user.value.lastName = response.data.user.lastname;
                    user.value.email = response.data.user.email;
                    user.value.phone = response.data.user.phone;
                    user.value.role = response.data.role;
                }
                loading.value = false;
            })
            .catch(error => {
                if (error.response) {
                    //el servidor avisa que hubo un error de datos
                    console.log('llego al servidor pero devolvio error');
                    console.log('Data', error.response.data);
                    console.log('Status', error.response.status);
                    console.log('Headers', error.response.headers);
                } else if (error.request) {
                    //se solicita la peticion pero el servidor no responde
                    console.log('Se envio pero no hubo respuesta');
                    console.log('Request', error.request);
                } else {
                    console.log('Falllo por otra cosa');
                    console.log('message!', error.message);
                }
                console.log(error.config);
                loading.value = false;
            });
    };
    const getShifts = async () => {
        loading.value = true;
        await axios({
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
                'Authorization': 'Bearer ' + user.value.token
            },
            method: 'GET',
            url: 'http://127.0.0.1:80/api/my-shifts',
        })
            .then(response => {
                if (response.data.status) {
                    shifts.value =response.data.Shifts;
                }
                loading.value = false;
            })
            .catch(error => {
                if (error.response) {
                    //el servidor avisa que hubo un error de datos
                    console.log('llego al servidor pero devolvio error');
                    console.log('Data', error.response.data);
                    console.log('Status', error.response.status);
                    console.log('Headers', error.response.headers);
                } else if (error.request) {
                    //se solicita la peticion pero el servidor no responde
                    console.log('Se envio pero no hubo respuesta');
                    console.log('Request', error.request);
                } else {
                    console.log('Falllo por otra cosa');
                    console.log('message!', error.message);
                }
                console.log(error.config);
                loading.value = false;
            });
    };
    const getPayments = async () => {
        loading.value = true;
        await axios({
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
                'Authorization': 'Bearer ' + user.value.token
            },
            method: 'GET',
            url: 'http://127.0.0.1:80/api/my-payments',
        })
            .then(response => {
                if (response.data.status) {
                    payments.value =response.data.Payments;
                }
                loading.value = false;
            })
            .catch(error => {
                if (error.response) {
                    //el servidor avisa que hubo un error de datos
                    console.log('llego al servidor pero devolvio error');
                    console.log('Data', error.response.data);
                    console.log('Status', error.response.status);
                    console.log('Headers', error.response.headers);
                } else if (error.request) {
                    //se solicita la peticion pero el servidor no responde
                    console.log('Se envio pero no hubo respuesta');
                    console.log('Request', error.request);
                } else {
                    console.log('Falllo por otra cosa');
                    console.log('message!', error.message);
                }
                console.log(error.config);
                loading.value = false;
            });
    };
    const logout = () => {
        loading.value = true;
        axios({
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
                'Authorization': 'Bearer ' + user.value.token
            },
            method: 'GET',
            url: 'http://127.0.0.1:80/api/logout'
        })
            .then(response => {
                console.log(response.data);
                if (response.data.status) {
                    user.value.token = null;
                    sessionStorage.removeItem('token');
                    router.push('/');
                }
                loading.value = false;
            })
            .catch(error => {
                if (error.response) {
                    //el servidor avisa que hubo un error de datos
                    console.log('llego al servidor pero devolvio error');
                    console.log('Data', error.response.data);
                    console.log('Status', error.response.status);
                    console.log('Headers', error.response.headers);
                } else if (error.request) {
                    //se solicita la peticion pero el servidor no responde
                    console.log('Se envio pero no hubo respuesta');
                    console.log('Request', error.request);
                } else {
                    console.log('Falllo por otra cosa');
                    console.log('message!', error.message);
                }
                console.log(error.config);
                loading.value = false;
            });
    };
    return {
        user,
        loading,
        turno,
        shifts,
        payments,
        login,
        logout,
        getUser,
        getShifts,
        getPayments,
        pedirTurno,
        pagarTurno,
    };
});