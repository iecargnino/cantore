<template>
  <li
    data-aos="fade-up"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-anchor-placement="top-center"
  >
    <NuxtLink :to="link">
      <h2>
        {{ titulo }}
      </h2>
      <span class="btn">Acceder</span>
      <div class="fadeVertical"></div>
      <picture>
        <img
          :src="imagen"
          :alt="titulo"
        />
      </picture>
    </NuxtLink>
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
    imagen: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    },
    delay: {
      type: Number,
      required: false,
      default: 0
    }
  },
  methods: {
    test() {
      // <- This is marked as "Unused function loaded"
      //TODO: Example
    }
  }
});
</script>

<style scope>
@import "~/assets/css/selector/unidad-de-negocio-card.css";
</style>
