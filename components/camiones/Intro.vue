<template>
  <!-- Intro -->
  <section
    id="intro"
    :class="tema"
    data-aos="fade"
    data-aos-duration="800"
  >
    <div class="wrapper">
      <picture>
        <source
          :srcset="imagenURL + 'intro-m.jpg'"
          type="image/jpeg"
          media="(max-width: 767px)"
        />
        <source
          :srcset="imagenURL + 'intro.jpg'"
          type="image/jpeg"
          media="(min-width: 768px)"
        />
        <img
          :src="imagenURL + 'intro.jpg'"
          :alt="titulo"
        />
      </picture>

      <div class="pageWidth">
        <div class="content">
          <h3>{{ area }}</h3>
          <h1>
            {{ titulo }} <span v-if="destacado">{{ destacado }}</span>
          </h1>
          <p v-if="descripcion">{{ descripcion }}</p>
          <NuxtLink
            v-if="cta"
            :to="ctaLink"
            class="btn"
            >{{ cta }}</NuxtLink
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineNuxtComponent } from "#app";

export default defineNuxtComponent({
  props: {
    tema: {
      type: String,
      required: false
    },
    area: {
      type: String,
      required: true
    },
    titulo: {
      type: String,
      required: true
    },
    destacado: {
      type: String,
      required: false
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
@import "~/assets/css/camiones/intro.css";
</style>
