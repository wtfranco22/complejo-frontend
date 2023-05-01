import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Inicio.vue';
import Nosotros from '@/views/Nosotros.vue';
import Turnos from '@/views/Turnos.vue'
const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/Nosotros', name:'Nosotros', component: Nosotros},
    { path: '/Turnos', name: 'Turnos', component: Turnos },
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;