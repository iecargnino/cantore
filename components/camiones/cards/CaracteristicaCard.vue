<template>
  <div class="caracteristicaCard" data-aos="fade" data-aos-duration="800">
    <picture>
      <img :src="imagen" :alt="titulo" />
    </picture>
    <h2>{{ titulo }}</h2>
    <p v-if="descripcion">{{ descripcion }}</p>
    <ul v-if="lista && lista.length > 0">
      <li v-for="(item, index) in lista" :key="index">
        {{ item }}
      </li>
    </ul>
    <NuxtLink v-if="cta" :to="ctaLink" target="_blank"
      >{{ cta }}
      <img src="~/public/images/camiones/icons/external.svg" alt="" />
    </NuxtLink>
  </div>
</template>

<script lang="ts">
import { defineNuxtComponent } from "#app";

export default defineNuxtComponent({
  props: {
    imagen: {
      type: String,
      required: true,
    },
    titulo: {
      type: String,
      required: false,
    },
    descripcion: {
      type: String,
      required: false,
    },
    lista: {
      type: Array,
      required: false,
      default: () => [],
    },
    cta: {
      type: String,
      required: false,
    },
    ctaLink: {
      type: String,
      required: false,
    },
  },
});
</script>

<style scope>
@import "~/assets/css/camiones/caracteristica-card.css";
</style>
