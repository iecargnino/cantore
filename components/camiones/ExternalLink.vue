<template>
  <section
    class="externaLink"
    data-aos="fade"
    data-aos-duration="800"
  >
    <div class="pageWidth">
      <NuxtLink
        :to="ctaLink"
        target="_blank"
        >{{ cta }}
        <img
          src="~/public/images/camiones/icons/external.svg"
          alt=""
        />
      </NuxtLink>
    </div>
  </section>
</template>

<script lang="ts">
import { defineNuxtComponent } from "#app";

export default defineNuxtComponent({
  props: {
    cta: {
      type: String
    },
    ctaLink: {
      type: String
    }
  }
});
</script>

<style scope>
@import "~/assets/css/camiones/external-link.css";
</style>
