<script setup lang="ts">
import "~/assets/css/fonts.css";
import "~/assets/css/camiones/global.css";
import "~/assets/css/camiones/header.css";
import "~/assets/css/camiones/footer.css";

const MenuCamiones = ref();
const excludeRef = ref();
const isOpen = ref(true);

const appConfig = useAppConfig();

let mostrarMenu = ref(false);
let menu: any = {};

useHead({
  bodyAttrs: {
    id: "camiones"
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
      { nombre: "Financiación", link: "", subMenu: "financiacion" },
      { nombre: "Postventa", link: "", subMenu: "postventa" },
      { nombre: "Nosotros", link: "", subMenu: "nosotros" }
    ]
  },
  financiacion: {
    titulo: "Financiación",
    menuList: [
      { nombre: "Plan de ahorro Mercedes-Benz", link: "/camiones/financiacion/plan-de-ahorro-mercedes-benz" },
      { nombre: "Mercedes-Benz Financiera", link: "/camiones/financiacion/mercedes-benz-financiera" }
    ]
  },
  postventa: {
    titulo: "Postventa",
    menuList: [
      { nombre: "Repuestos y accesorios", link: "/camiones/postventa/repuestos-y-accesorios" },
      { nombre: "Promociones", link: "/camiones/postventa/promociones" },
      { nombre: "Servicio técnico", link: "/camiones/postventa/servicio-tecnico" },
      { nombre: "Servicios", link: "/camiones/postventa/servicios" }
    ]
  },
  nosotros: {
    titulo: "Nosotros",
    menuList: [
      { nombre: "Asesores comerciales", link: "/camiones/nosotros/asesores-comerciales" },
      { nombre: "Nuestra historia", link: "/camiones/nosotros/nuestra-historia" },
      // { nombre: "Novedades", link: "/camiones/nosotros/novedades" },
      { nombre: "Sucursales", link: "/camiones/nosotros/sucursales" },
      { nombre: "Contacto", link: "/camiones/nosotros/contacto" }
    ]
  }
};
</script>

<script lang="ts">
let show = ref(false);
</script>

<template>
  <CamionesAppHeader
    ref="excludeRef"
    @toggle-menu="
      menu = menus[$event];
      mostrarMenu = !mostrarMenu;
    "
  ></CamionesAppHeader>
  <CamionesMenusPrimerNivelCamionesMenu
    ref="MenuCamiones"
    v-if="mostrarMenu && menu.titulo === 'Modelos'"
    @cerrar="mostrarMenu = !mostrarMenu"
  >
  </CamionesMenusPrimerNivelCamionesMenu>
  <CamionesMenusMobileMenu
    ref="MobileMenu"
    v-if="mostrarMenu && menu.titulo === 'Principal'"
    @toggle-menu="
      mostrarMenu = !mostrarMenu;
      menu = menus[$event];
      mostrarMenu = !mostrarMenu;
    "
    @cerrar="mostrarMenu = !mostrarMenu"
  >
  </CamionesMenusMobileMenu>
  <CamionesMenusPrimerNivelMenu
    v-if="mostrarMenu && (menu.titulo === 'Asesorate' || menu.titulo === 'Postventa' || menu.titulo === 'Financiación' || menu.titulo === 'Nosotros')"
    :menu="menu"
    @cerrar="mostrarMenu = !mostrarMenu"
  >
  </CamionesMenusPrimerNivelMenu>
  <slot></slot>
  <CamionesAppFooter></CamionesAppFooter>
</template>
