<template>
  <div class="mx-10 my-14">
    <div class="titulo">
      <h3 class="header-top">
        <slot></slot>
      </h3>
    </div>
  </div>
</template>

<style scoped>
.titulo{
    border-bottom: 2px solid #1b396a;
}
.header-top {
  background-color: var(--blue);
  padding: 15px 30px;
  width: fit-content;
  color: white;
}

h3{
    font-weight: bold;
}
</style>
