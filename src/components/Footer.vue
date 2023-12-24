<template>
  <div class="footer-basic">
    <footer>
      <p class="copyright mt-4">Instituto Tecnológico de Tepic</p>
      <img
        class="logo-cc mx-auto"
        src="../assets/Logo-horizontal-blanco.svg"
        alt=""
        srcset=""
      />
      <p class="copyright centro-computo">Centro de Cómputo © 2022</p>
    </footer>
  </div>
</template>

<style scoped>
.footer-basic {
  padding: 40px 0;
  background-color: #292929;
  color: rgb(187, 187, 187);
  margin-top: 60px;
}

.footer-basic .copyright {
  text-align: center;
  font-size: 14px;
  color: rgb(187, 187, 187);
  opacity: 0.8;
  margin-bottom: 0;
  text-transform: uppercase;
}

.logo-cc {
  width: 10%;
  display: flex;
  margin-bottom: -20px;
  opacity: 0.8;
}

@media (max-width: 575px) {
  .logo-cc {
    width: 20%;
    margin-top: 10px;
    margin-bottom: -10px;
  }
}
</style>
