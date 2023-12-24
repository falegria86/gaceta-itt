<template>
  <main class="container flex mx-auto">
    <div class="sm:flex mx-auto justify-center sm:gap-6">
      <div class="flex my-auto">
        <div class="mx-10 sm:mx-0">
          <h1 class="uppercase font-bold text-center">
            Edición {{ numeroEdicion }}
          </h1>
          <img :src="imgUrl" alt="portada" class="flex m-auto borde" />
          <router-link to="/gaceta">
            <boton-primario class="mt-3 mx-auto flex">Ver más</boton-primario>
          </router-link>
        </div>
      </div>
      <div class="line hidden sm:block"></div>
      <div class="mr-3 flex">
        <div class="my-10 mx-auto sm:m-auto">
          <div class="flex">
            <h3>Edición:</h3>
            <p class="ml-2">{{ numeroEdicion }}</p>
          </div>
          <div class="flex">
            <h3>Páginas:</h3>
            <p class="ml-2">{{ numeroPaginas }}</p>
          </div>
          <div class="flex">
            <h3>Fecha:</h3>
            <p class="ml-2">{{ fechaEdicion }}</p>
          </div>
        </div>
      </div>
      <img
        src="../assets/foto-tec.jpeg"
        alt="logo-tigres"
        class="hidden md:block w-6/12 lg:w-7/12 xl:w-7/12"
      />
    </div>
  </main>
</template>
<script>
export default {
  props: {
    numeroEdicion: Number,
    fechaEdicion: String,
    numeroPaginas: Number,
    imgUrl: String,
  },
};
</script>

<style scoped>
.line {
  border-left: 1px #707070 solid;
  height: 100%;
}

h3 {
  font-weight: bold;
}

.borde {
  border: 1px solid rgb(190, 187, 187);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
</style>
