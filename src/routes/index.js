import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Inicio.vue';
import Nosotros from '@/views/Nosotros.vue';
import Turnos from '@/views/Turnos.vue';
import Perfil from '@/views/Perfil.vue';
import Pago from '@/views/Pago.vue';
import { useUserStore } from '@/stores/user';

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/Nosotros', name: 'Nosotros', component: Nosotros },
    { path: '/Turnos', name: 'Turnos', component: Turnos },
    { path: '/Pagar-turno', name: 'Pago', component: Pago, meta: { withAuth: true } },
    { path: '/Perfil', name: 'Perfil', component: Perfil, meta: { withAuth: true } }
    // { path: '/:pathMatch(.*)*', redirect: '/' }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to, from, next) => {
    const rutaProtegida = to.matched.some(item => item.meta.withAuth);
    const auth = useUserStore();
    if (rutaProtegida && auth.user.token === null) {
        next('/');
    } else {
        next();
    }
})

export default router;