<template>
  <nav class="flex justify-between p-8">
    <router-link to="/" class="no-link">
      <img
        class="logo-cintilla"
        src="../../assets/cintilla-tecnm-itt.png"
        alt=""
        srcset=""
      />
    </router-link>
    <router-link to="/gaceta" class="md:hidden no-link">
      <span class="material-symbols-outlined text-3xl" @click="menuOpen">
        menu
      </span>
    </router-link>
    <ul class="hidden md:flex gap-10">
      <li>
        <router-link to="/"> Inicio </router-link>
      </li>
      <li>
        <router-link to="/gaceta">Más reciente</router-link>
      </li>
      <li>
        <a href="#anteriores">Anteriores</a>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  background-color: white;
  height: 120px;
}

.logo-cintilla {
  width: auto;
  height: 60px;
}

li {
  font-size: 18px;
  font-weight: 600;
  color: var(--blue);
  cursor: pointer;
}

a.router-link-active,
a.active {
  color: var(--orange);
  border-bottom: 1px solid var(--orange);
  padding: 20px 0;
}

.no-link{
  color: var(--blue) !important;
  border: none !important;
  padding: 0 !important;
}

</style>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    menuOpen() {},
  },
};
</script>
