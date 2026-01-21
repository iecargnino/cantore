<template>
  <div
    :class="'caracteristicaDestacadaCard ' + orientacion"
    data-aos="fade"
    data-aos-duration="800"
  >
    <div>
      <picture>
        <img
          :src="imagen"
          alt="Automóvil Mercedes-Benz"
        />
      </picture>
    </div>
    <div>
      <h2>{{ titulo }}</h2>

      <span v-if="descripcion && descripcion.length > 0">
        <p
          v-for="(item, index) in descripcion"
          :key="index"
        >
          {{ item }}
        </p>
      </span>

      <ul v-if="lista && lista.length > 0">
        <li
          v-for="(item, index) in lista"
          :key="index"
        >
          {{ item }}
        </li>
      </ul>

      <p
        v-if="nota"
        class="nota"
      >
        {{ nota }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineNuxtComponent } from "#app";

export default defineNuxtComponent({
  props: {
    orientacion: {
      type: String,
      required: true
    },
    imagen: {
      type: String,
      required: true
    },
    titulo: {
      type: String,
      required: true
    },
    descripcion: {
      type: Array,
      required: false,
      default: () => []
    },
    lista: {
      type: Array,
      required: false,
      default: () => []
    },
    nota: {
      type: String,
      required: true
    }
  }
});
</script>

<style scope>
@import "~/assets/css/autos/caracteristica-destacada-card.css";
</style>
