<template>
  <div id="menu">
    <div class="pageWidth">
      <div class="menuWrapper">
        <div
          ref="click"
          class="level"
        >
          <div class="innerNav">
            <button @click="$emit('cerrar')">Cerrar</button>
          </div>
          <h3>Modelos</h3>
          <ul>
            <li class="gap">
              <NuxtLink to="/vans/modelos">
                <span>Todos los modelos</span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                @click.prevent="setLinks('sprinter')"
                class="nextLevel"
              >
                <span>Sprinter</span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                @click.prevent="setLinks('vito')"
                class="nextLevel"
              >
                <span>Vito</span>
              </NuxtLink>
            </li>
          </ul>
        </div>
        <VansMenusSegundoNivelVansMenu
          v-if="showSegundoNivel"
          :menu="menuSecundario"
          @cerrar="showSegundoNivel = !showSegundoNivel"
        >
        </VansMenusSegundoNivelVansMenu>
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
  // console.log('cerrar')
  emit("cerrar");
});

useHead({
  bodyAttrs: {
    class: "menuOpen"
  }
});
</script>

<script lang="ts">
import { defineNuxtComponent } from "#app";

export default defineNuxtComponent({
  props: {
    menu: {
      type: Array<any>,
      default: () => []
    }
  },
  data: () => ({
    showSegundoNivel: false,
    menuSecundario: { lista: { type: Array<any>, default: () => [] }, titulo: "" },
    titulo: "",
    menuList: () => []
  }),
  methods: {
    setLinks: function (subMenuTilte: string) {
      // <- This is marked as "Unused function loaded"
      this.showSegundoNivel = false;

      if (subMenuTilte === "sprinter") {
        this.menuSecundario.titulo = "Sprinter";
        this.menuSecundario.lista = [
          { nombre: "Sprinter Furgón", link: "/vans/modelos/sprinter-furgon" },
          { nombre: "Sprinter Mixto", link: "/vans/modelos/sprinter-mixto" },
          { nombre: "Sprinter Combi", link: "/vans/modelos/sprinter-combi" },
          { nombre: "Sprinter Chasis", link: "/vans/modelos/sprinter-chasis" }
        ];
      }
      if (subMenuTilte === "vito") {
        this.menuSecundario.titulo = "Vito";
        this.menuSecundario.lista = [
          { nombre: "Vito Mixto", link: "/vans/modelos/vito-mixto" },
          { nombre: "Vito Tourer", link: "/vans/modelos/vito-tourer" }
        ];
      }
      this.showSegundoNivel = true;
    }
  }
});
</script>

<style scope>
@import "~/assets/css/vans/menu.css";
</style>
