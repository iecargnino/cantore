<template>
  <div
    class="caracteristicaCard"
    data-aos="fade"
    data-aos-duration="800"
  >
    <picture>
      <img
        :src="imagen"
        :alt="titulo"
      />
    </picture>
    <h2>{{ titulo }}</h2>
    <p v-if="descripcion">{{ descripcion }}</p>
    <ul v-if="lista && lista.length > 0">
      <li
        v-for="(item, index) in lista"
        :key="index"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineNuxtComponent } from "#app";

export default defineNuxtComponent({
  props: {
    imagen: {
      type: String,
      required: true
    },
    titulo: {
      type: String,
      required: true
    },
    descripcion: {
      type: String,
      required: true
    },
    lista: {
      type: Array,
      required: false,
      default: () => []
    }
  }
});
</script>

<style scope>
@import "~/assets/css/vans/caracteristica-card.css";
</style>
