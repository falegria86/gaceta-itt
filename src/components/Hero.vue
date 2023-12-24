<template>
  <div class="hero-bg">
    <div class="flex w-10/12 h-full m-auto items-center justify-center">
      <div class="mr-0 md:mr-4 flex justify-center">
        <div>
          <h1
            class="text-white w-full md:w-10/12 font-semibold text-2xl md:text-3xl lg:text-4xl text-center md:text-left"
          >
            Conoce la nueva gaceta de los <strong>Tigres Tec Tepic</strong>
          </h1>
          <router-link
            to="/gaceta"
            class="flex justify-center md:justify-start"
          >
            <boton-primario class="mt-4">Ver más</boton-primario>
          </router-link>
        </div>
      </div>
      <div class="w-3/4 lg:w-2/4 xl:w-4/12 mt-24 hidden md:block">
        <img src="../assets/hashtag.svg" alt="logo-tigres" />
        <img src="../assets/logo-tigres.svg" alt="logo-tigres" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero-bg {
  background-image: url("../assets/gaceta-hero.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 50vh;
}

.texto-hero {
  font-weight: 800;
  font-style: italic;
}

@media (min-width: 768px) {
  .hero-bg {
    height: 70vh;
  }
}
</style>
