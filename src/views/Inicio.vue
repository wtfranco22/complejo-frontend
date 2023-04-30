<template>
    <div class="container-fluid bg-dark d-flex justify-content-center">
        <div id="carouselExampleCaptions" class="carousel slide col-8 ">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
                    aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                    aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3"
                    aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4"
                    aria-label="Slide 5"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="../assets/padel.jpg" class="d-block mx-auto w-75" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="../assets/futbol.jpg" class="d-block mx-auto w-75" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="../assets/gimnasio.jpg" class="d-block mx-auto w-75" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="../assets/pileta.jpg" class="d-block mx-auto w-75" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="../assets/squash.jpg" class="d-block mx-auto w-75" alt="...">
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Anterior</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Siguiente</span>
            </button>
        </div>
    </div>
</template>