<template>
  <li>
    <NuxtLink :to="link">
      <picture class="icon">
        <img
          :src="imagen"
          :alt="titulo"
        />
      </picture>
    </NuxtLink>
    <div>
      <h3>{{ titulo }}</h3>
      <p>{{ descripcion }}</p>
      <NuxtLink
        :to="link"
        class="btn"
        >Ver más</NuxtLink
      >
    </div>
  </li>
</template>

<script lang="ts">
import { defineNuxtComponent } from "#app";

export default defineNuxtComponent({
  props: {
    titulo: {
      type: String,
      required: true
    },
    descripcion: {
      type: String,
      required: true
    },
    imagen: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    }
  }
});
</script>
