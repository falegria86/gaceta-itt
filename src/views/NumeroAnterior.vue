<template>
  <div class="card relative">
    <div class="w-[255px] h-[150px] overflow-hidden rounded-t-lg mb-[10px]">
      <img :src="imgUrl" alt="portada-anterior"/>
    </div>
    <div class="ml-[20px]">
      <p class="mb-[10px]">
        Edición: <strong>{{ numeroEdicion }}</strong>
      </p>
      <p class="mb-[10px]">
        Páginas: <strong>{{ paginas }}</strong>
      </p>
      <p>
        Fecha: <strong>{{ fecha }}</strong>
      </p>
    </div>
    <div class="absolute bottom-[20px] right-[20px]">
      <router-link :to="`/${link}`">
        <p class="font-bold text-blue">Ver más</p>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    numeroEdicion: Number,
    imgUrl: String,
    paginas: Number,
    fecha: String,
    link: String
  },
};
</script>

<style scoped>
.card {
  width: 255px;
  height: 367px;
  margin: 0 32px 0 0;
  padding: 0 0 20px;
  border-radius: 8px;
  box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.58),
    inset 0 1px 6px 0 rgba(0, 0, 0, 0.14);
  background-color: #fff;
  position: relative;
}
</style>
