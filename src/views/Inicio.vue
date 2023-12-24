<template>
  <Navbar />
  <Hero />
  <Header id="reciente">Edición más reciente</Header>
  <Publicacion
    class="mb-9"
    :numero-edicion="infoEdicion.numero"
    :fecha-edicion="infoEdicion.fecha"
    :numero-paginas="infoEdicion.paginas"
    :imgUrl="infoEdicion.imgUrl"
  />
  <!-- <Header id="anteriores">Números anteriores</Header>
  <div class="mx-10">
    <p>
      Consulta las ediciones anteriores de nuestra gaceta y mantente informado
      de todo lo que sucede en la institución.
    </p>
  </div>

  Ciclo donde se mostrarán todos los números anteriores
  <div class="grid grid-cols-1 md:grid-cols-3 gap-5 2xl:grid-cols-5 mb-10 p-10">
    <numero-anterior
      imgUrl="https://i.ibb.co/Mf8d416/portada-1.jpg')"
      numero-edicion="2"
      paginas="25"
      fecha="20/11/2022"
      link="gaceta"
    ></numero-anterior>
  </div> -->
  <Footer></Footer>
</template>

<script>
import Publicacion from "./Publicacion.vue";
import NumeroAnterior from "./NumeroAnterior.vue";
import Hero from "../components/Hero.vue";

export default {
  components: {
    Publicacion,
    NumeroAnterior,
    Hero,
  },
  data() {
    return {
      infoEdicion: {
        numero: 1,
        fecha: "30/11/2022",
        paginas: 21,
        imgUrl: "https://i.ibb.co/7SZndM7/1.jpg",
      },
    };
  },
};
</script>
