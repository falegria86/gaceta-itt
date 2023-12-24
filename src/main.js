import { createApp } from "vue";
import router from "./router";
import App from "./App.vue";
import "./index.css";
import Navbar from "./components/UI/Navbar.vue";
import BotonPrimario from "./components/UI/BotonPrimario.vue";
import Header from "./components/UI/Header.vue";
import Footer from "./components/Footer.vue";
import Inicio from "./views/Inicio.vue"

const app = createApp(App);

app.use(router);

app.component("Navbar", Navbar);
app.component("boton-primario", BotonPrimario);
app.component("Header", Header);
app.component("Footer", Footer);
app.component("Inicio", Inicio);

app.mount("#app");