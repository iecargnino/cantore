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
          <ul>
            <li>
              <NuxtLink
                @click.prevent="$emit('toggleMenu', 'modelos')"
                class="nextLevel"
              >
                <span>Modelos</span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                @click.prevent="$emit('toggleMenu', 'financiacion')"
                class="nextLevel"
              >
                <span>Financiación</span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                @click.prevent="$emit('toggleMenu', 'postventa')"
                class="nextLevel"
              >
                <span>Postventa</span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                @click.prevent="$emit('toggleMenu', 'nosotros')"
                class="nextLevel"
              >
                <span>Nosotros</span>
              </NuxtLink>
            </li>
          </ul>
        </div>
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

<style scope>
@import "~/assets/css/camiones/menu.css";
</style>
