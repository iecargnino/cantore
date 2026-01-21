<template>
  <header>
    <div class="brand">
      <div class="pageWidth">
        <img
          class="star"
          src="/images/mercedes-benz_star.svg"
          alt="Mercedes-Benz Logo"
          data-aos="zoom-out"
          data-aos-duration="1800"
        />
      </div>
    </div>
    <div
      class="name"
      data-aos="zoom-out"
      data-aos-duration="1800"
    >
      <div class="pageWidth">
        <h1
          data-aos="zoom-out"
          data-aos-duration="1800"
        >
          {{ appConfig.concesionario.razonSocial }}
        </h1>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const appConfig = useAppConfig();
</script>
