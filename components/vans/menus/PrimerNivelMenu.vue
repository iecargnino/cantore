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
          <h3>{{ menu.titulo }}</h3>
          <ul>
            <li v-for="item in menu.menuList">
              <NuxtLink
                :to="item.link"
                :class="item.subMenu != null ? 'subMenu' : item.link.indexOf('http') == 0 ? 'linkout' : ''"
                :target="item.link.indexOf('http') == 0 ? '_blank' : ''"
              >
                <span>{{ item.nombre }}</span>
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
