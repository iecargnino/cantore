<script setup lang="ts">
import "~/assets/css/fonts.css";
import "~/assets/css/autos/global.css";
import "~/assets/css/autos/header.css";
import "~/assets/css/autos/footer.css";

const MenuAutos = ref();
const excludeRef = ref();
const isOpen = ref(true);

const appConfig = useAppConfig();

let mostrarMenu = ref(false);
let menu: any = {};

useHead({
  bodyAttrs: {
    id: "autos"
  }
});

const menus: any = {
  modelos: {
    titulo: "Modelos"
  },
  principal: {
    titulo: "Principal",
    menuList: [
      { nombre: "Modelos", link: "", subMenu: "modelos" },
      { nombre: "Asesorate", link: "", subMenu: "asesorate" },
      { nombre: "Servicios", link: "", subMenu: "servicios" },
      { nombre: "Sobre nosotros", link: "", subMenu: "nosotros" }
    ]
  },
  asesorate: {
    titulo: "Asesorate",
    menuList: [
      { nombre: "Financiación", link: "/autos/asesorate/financiacion" },
      { nombre: "Nuestros asesores", link: "/autos/asesorate/nuestros-asesores" }
    ]
  },
  servicios: {
    titulo: "Servicios",
    menuList: [
      { nombre: "Agendar turno de servicio", link: "https://www.mercedes-benz.com.ar/passengercars/services/online-appointment-booking.html" },
      { nombre: "Servicios y Reparaciones", link: "/autos/servicios/servicios-y-reparaciones" },
      { nombre: "Repuestos", link: "/autos/servicios/repuestos" },
      { nombre: "Accesorios", link: "https://accessories.mercedes-benz.com/es-AR/accessories/passengercars" },
      { nombre: "Consulta Recall", link: "https://www.mercedes-benz.com.ar/passengercars/services/recall.html" },
      { nombre: "Mercedes-Benz Assistance 24hs", link: "https://www.mercedes-benz.com.ar/passengercars/services/breakdown-damage.html" },
      { nombre: "Manuales de usuario", link: "https://www.mercedes-benz.com.ar/passengercars/services/manuals.html" }
    ]
  },
  nosotros: {
    titulo: "Sobre Nosotros",
    menuList: [
      { nombre: "Nuestra historia", link: "/autos/sobre-nosotros/nuestra-historia" },
      // { nombre: "Novedades", link: "/autos/sobre-nosotros/novedades" },
      { nombre: "Sucursales", link: "/autos/sobre-nosotros/sucursales" },
      { nombre: "Contacto", link: "/autos/sobre-nosotros/contacto" }
    ]
  }
};
</script>

<script lang="ts">
let show = ref(false);
</script>

<template>
  <AutosAppHeader
    ref="excludeRef"
    @toggle-menu="
      menu = menus[$event];
      mostrarMenu = !mostrarMenu;
    "
  ></AutosAppHeader>
  <AutosMenusPrimerNivelAutosMenu
    ref="MenuAutos"
    v-if="mostrarMenu && menu.titulo === 'Modelos'"
    @cerrar="mostrarMenu = !mostrarMenu"
  >
  </AutosMenusPrimerNivelAutosMenu>
  <AutosMenusMobileMenu
    ref="MobileMenu"
    v-if="mostrarMenu && menu.titulo === 'Principal'"
    @toggle-menu="
      mostrarMenu = !mostrarMenu;
      menu = menus[$event];
      mostrarMenu = !mostrarMenu;
    "
    @cerrar="mostrarMenu = !mostrarMenu"
  >
  </AutosMenusMobileMenu>
  <AutosMenusPrimerNivelMenu
    v-if="mostrarMenu && (menu.titulo === 'Asesorate' || menu.titulo === 'Servicios' || menu.titulo === 'Sobre Nosotros')"
    :menu="menu"
    @cerrar="mostrarMenu = !mostrarMenu"
  >
  </AutosMenusPrimerNivelMenu>
  <slot></slot>
  <AutosAppFooter></AutosAppFooter>
</template>
