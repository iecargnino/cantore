<template>
  <li
    data-aos="fade"
    data-aos-duration="800"
  >
    <NuxtLink :to="link">
      <div class="content">
        <picture class="icon">
          <img
            :src="icon"
            alt="Icono"
          />
        </picture>
        <div>
          <h4>{{ titulo }}</h4>
        </div>
      </div>
      <picture class="arrow">
        <img
          src="~/public/images/camiones/icons/arrow-right-white.svg"
          alt="Ir"
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
    link: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    }
  }
});
</script>

<style scope>
@import "~/assets/css/camiones/shortcuts.css";
</style>
