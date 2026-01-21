<template>
  <!-- Intro -->
  <section
    id="intro"
    :class="tema"
    data-aos="fade"
    data-aos-duration="800"
    data-aos-delay="0"
  >
    <div class="pageWidth">
      <div class="content">
        <h1>{{ titulo }}</h1>
        <p v-if="descripcion">{{ descripcion }}</p>
        <NuxtLink
          v-if="cta"
          :to="ctaLink"
          class="btn"
          >{{ cta }}</NuxtLink
        >
      </div>
    </div>

    <div class="fadeVertical"></div>
    <div class="fadeHorizontal"></div>
    <picture>
      <source
        :srcset="imagenURL + 'intro-m.jpg'"
        type="image/jpeg"
        media="(max-width: 767px)"
      />
      <source
        :srcset="imagenURL + 'intro-t.jpg'"
        type="image/jpeg"
        media="(min-width: 768px) and (max-width:1023px)"
      />
      <source
        :srcset="imagenURL + 'intro.jpg'"
        type="image/jpeg"
        media="(min-width: 1024px)"
      />
      <img
        :src="imagenURL + 'intro.jpg'"
        :alt="titulo"
      />
    </picture>
  </section>
</template>

<script lang="ts">
import { defineNuxtComponent } from "#app";

export default defineNuxtComponent({
  props: {
    tema: {
      type: String,
      required: true
    },
    titulo: {
      type: String,
      required: true
    },
    descripcion: {
      type: String
    },
    cta: {
      type: String
    },
    ctaLink: {
      type: String
    },
    imagenURL: {
      type: String,
      required: true
    }
  }
});
</script>

<style scope>
@import "~/assets/css/vans/intro.css";
</style>
