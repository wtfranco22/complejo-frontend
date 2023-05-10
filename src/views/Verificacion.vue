<script setup>
import { useUserStore } from '../stores/user';
const usuario = useUserStore();
usuario.userValidate();
</script>
<template>
    <div v-if="usuario.loading">
        <div class="d-flex justify-content-center">
            <div class="spinner-border text-danger m-5" style="width: 9rem; height: 9rem;" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    </div>
    <div v-else class="modal modal-sheet position-static d-block bg-body-secondary p-4 py-md-5" tabindex="-1" role="dialog"
        id="modalSheet">
        <div class="modal-dialog" role="document">
            <div class="modal-content rounded-4 shadow">
                <div class="modal-header border-bottom-0">
                    <h1 class="modal-title fs-5">Verificado!</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body py-0">
                    <p>Bienvenido a nuestro sitio web, podras disfrutar de realizar las reservas en
                        cualquier momento y cualquier lugar, contaras con una cuenta con saldo para utilizar libremente!
                    </p>
                </div>
                <div class="modal-footer flex-column align-items-stretch w-100 gap-2 pb-3 border-top-0">
                    <router-link to="/" class="text-decoration-none">
                        <a type="button" class="btn btn-primary border me-3" href="#">Entendido</a>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>