<template>
  <div
    ref="click"
    class="level"
  >
    <div class="innerNav">
      <div class="back">
        <NuxtLink
          @click="$emit('cerrar')"
          to=""
          >{{ menu.titulo }}</NuxtLink
        >
      </div>
      <button @click="$emit('cerrar')">Cerrar</button>
    </div>
    <ul>
      <li v-for="item in menu.lista">
        <NuxtLink :to="item.link">
          <span> {{ item.nombre }}</span>
        </NuxtLink>
      </li>
    </ul>
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
      type: Object,
      default: () => {}
    }
  }
});
</script>

<style scope>
@import "~/assets/css/vans/menu.css";
</style>
