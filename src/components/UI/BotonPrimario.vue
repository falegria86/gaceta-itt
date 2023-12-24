<template>
    <button class="btn-primario">
        <slot></slot>
    </button>
</template>

<style scoped>
.btn-primario {
  border-radius: 8px;
  background-color: var(--orange);
  color: #fff;
  padding: 10px 40px;
  cursor: pointer;
}

.btn-primario:hover{
    background-color: #e97313;
}

.btn-primario:active{
    transform: scale(0.96);
}
</style>
