<script setup lang="ts">
import "~/assets/css/fonts.css";
import "~/assets/css/vans/global.css";
import "~/assets/css/vans/header.css";
import "~/assets/css/vans/footer.css";

const MenuVans = ref();
const excludeRef = ref();
const isOpen = ref(true);

const appConfig = useAppConfig();

let mostrarMenu = ref(false);
let menu: any = {};

useHead({
  bodyAttrs: {
    id: "vans"
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
      // { nombre: "Financiación", link: "/vans/asesorate/financiacion" },
      { nombre: "Nuestros asesores", link: "/vans/asesorate/nuestros-asesores" },
      { nombre: "Plan de ahorro", link: "/vans/asesorate/plan-de-ahorro" }
    ]
  },
  servicios: {
    titulo: "Servicios",
    menuList: [
      { nombre: "Servicios Postventa y Repuestos", link: "/vans/servicios/servicios-postventa-y-repuestos" },
      { nombre: "Promociones", link: "/vans/servicios/promociones" },
      { nombre: "Agendar turno de servicio", link: "https://www.mercedes-benz.com.ar/vans/services/online-appointment.html", external: "true" },
      { nombre: "Consulta Recall", link: "https://www.mercedes-benz.com.ar/vans/services/recalls.html" }
    ]
  },
  nosotros: {
    titulo: "Sobre Nosotros",
    menuList: [
      { nombre: "Nuestra historia", link: "/vans/sobre-nosotros/nuestra-historia" },
      // { nombre: "Novedades", link: "/vans/sobre-nosotros/novedades" },
      { nombre: "Sucursales", link: "/vans/sobre-nosotros/sucursales" },
      { nombre: "Contacto", link: "/vans/sobre-nosotros/contacto" }
    ]
  }
};
</script>

<script lang="ts">
let show = ref(false);
</script>

<template>
  <VansAppHeader
    ref="excludeRef"
    @toggle-menu="
      menu = menus[$event];
      mostrarMenu = !mostrarMenu;
    "
  ></VansAppHeader>
  <VansMenusPrimerNivelVansMenu
    ref="MenuVans"
    v-if="mostrarMenu && menu.titulo === 'Modelos'"
    @cerrar="mostrarMenu = !mostrarMenu"
  >
  </VansMenusPrimerNivelVansMenu>
  <VansMenusMobileMenu
    ref="MobileMenu"
    v-if="mostrarMenu && menu.titulo === 'Principal'"
    @toggle-menu="
      mostrarMenu = !mostrarMenu;
      menu = menus[$event];
      mostrarMenu = !mostrarMenu;
    "
    @cerrar="mostrarMenu = !mostrarMenu"
  >
  </VansMenusMobileMenu>
  <VansMenusPrimerNivelMenu
    v-if="mostrarMenu && (menu.titulo === 'Asesorate' || menu.titulo === 'Servicios' || menu.titulo === 'Sobre Nosotros')"
    :menu="menu"
    @cerrar="mostrarMenu = !mostrarMenu"
  >
  </VansMenusPrimerNivelMenu>
  <slot></slot>
  <VansAppFooter></VansAppFooter>
</template>
