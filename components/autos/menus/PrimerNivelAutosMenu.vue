<template>
  <div id="menu">
    <div class="pageWidth">
      <div class="menuWrapper">
        <div ref="click" class="level">
          <div class="innerNav">
            <button @click="$emit('cerrar')">Cerrar</button>
          </div>
          <h3>Modelos</h3>
          <ul>
            <li class="gap">
              <NuxtLink to="/autos/modelos">
                <span>Todos los modelos</span>
              </NuxtLink>
            </li>
            <li class="gap">
              <NuxtLink
                :to="{
                  path: '/autos/modelos',
                  query: { filter: 'electric' },
                }"
                class="modelType electric"
              >
                <img
                  src="~/public/images/autos/modelos/icon-electric.svg"
                  alt="Eléctrico"
                />
                <span>Eléctrico</span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                @click.prevent="setLinks('sedan')"
                class="modelType nextLevel"
              >
                <img
                  src="~/public/images/autos/modelos/icon-sedan.svg"
                  alt="Sedán"
                />
                <span>Sedán</span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                @click.prevent="setLinks('suv')"
                class="modelType nextLevel"
              >
                <img
                  src="~/public/images/autos/modelos/icon-suv.svg"
                  alt="SUV & Todoterreno"
                />
                <span>SUV & Todoterreno</span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                @click.prevent="setLinks('hatchback')"
                class="modelType nextLevel"
              >
                <img
                  src="~/public/images/autos/modelos/icon-hatchback.svg"
                  alt="Hatchback"
                />
                <span>Hatchback</span>
              </NuxtLink>
            </li>
            <li class="gap">
              <NuxtLink
                @click.prevent="setLinks('coupe')"
                class="modelType nextLevel"
              >
                <img
                  src="~/public/images/autos/modelos/icon-coupes.svg"
                  alt="Coupés"
                />
                <span>Coupés</span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                :to="{
                  path: '/autos/modelos',
                  query: { filter: 'amg' },
                }"
                class="amgType"
              >
                <img src="~/public/images/autos/modelos/amg.svg" alt="AMG" />
                <span>AMG</span>
              </NuxtLink>
            </li>
          </ul>
        </div>
        <AutosMenusSegundoNivelAutosMenu
          v-if="showSegundoNivel"
          :menu="menuSecundario"
          @cerrar="showSegundoNivel = !showSegundoNivel"
        >
        </AutosMenusSegundoNivelAutosMenu>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// const menuSecundario: any = { lista: { type: Array<any>, default: [] }, titulo: '' }
import useClickOutside from "@/composables/clickOutside.js";
import { ref, getCurrentInstance } from "vue";
const { emit } = getCurrentInstance();

const click = ref();

useClickOutside(click, () => {
  emit("cerrar");
});

useHead({
  bodyAttrs: {
    class: "menuOpen",
  },
});
</script>

<script lang="ts">
import { defineNuxtComponent } from "#app";

export default defineNuxtComponent({
  props: {
    menu: {
      type: Array<any>,
      default: () => [],
    },
  },
  data: () => ({
    showSegundoNivel: false,
    menuSecundario: {
      lista: { type: Array<any>, default: () => [] },
      titulo: "",
    },
    titulo: "",
    menuList: () => [],
  }),
  methods: {
    setLinks: function (subMenuTilte: string) {
      // <- This is marked as "Unused function loaded"
      this.showSegundoNivel = false;

      if (subMenuTilte === "sedan") {
        this.menuSecundario.titulo = "Sedán";
        this.menuSecundario.lista = [
          { nombre: "Clase A Sedán", link: "/autos/modelos/clase-a-sedan" },
          { nombre: "Clase C Sedán", link: "/autos/modelos/clase-c-sedan" },
          { nombre: "Clase S", link: "/autos/modelos/clase-s" },
        ];
      }
      if (subMenuTilte === "suv") {
        this.menuSecundario.titulo = "SUV & Todoterreno";
        this.menuSecundario.lista = [
          { nombre: "EQA", link: "/autos/modelos/eqa" },
          { nombre: "GLA", link: "/autos/modelos/gla" },
          { nombre: "GLB", link: "/autos/modelos/glb" },
          { nombre: "GLC", link: "/autos/modelos/glc" },
          { nombre: "GLC Coupé", link: "/autos/modelos/glc-coupe" },
          { nombre: "GLE", link: "/autos/modelos/gle" },
          { nombre: "GLE Coupé", link: "/autos/modelos/gle-coupe" },
          { nombre: "Clase G", link: "/autos/modelos/clase-g" },
        ];
      }
      if (subMenuTilte === "hatchback") {
        this.menuSecundario.titulo = "Hatchback";
        this.menuSecundario.lista = [
          {
            nombre: "Clase A Hatchback",
            link: "/autos/modelos/clase-a-hatchback",
          },
        ];
      }
      if (subMenuTilte === "coupe") {
        this.menuSecundario.titulo = "Coupés";
        this.menuSecundario.lista = [
          { nombre: "Clase E Coupé", link: "/autos/modelos/clase-e-coupe" },
        ];
      }
      this.showSegundoNivel = true;
    },
  },
});
</script>

<style scope>
@import "~/assets/css/autos/menu.css";
</style>
