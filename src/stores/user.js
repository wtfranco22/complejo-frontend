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
    const loading = ref(false);
    const login = async (usuario) => {
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
        login,
        logout,
        getUser,
    };
});