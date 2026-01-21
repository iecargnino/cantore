<template>
  <NuxtLayout name="vans">
    <section id="legal">
      <div class="pageWidth">
        <div class="wrapper">
          <h2>Proveedor</h2>
          <h3>{{ appConfig.legales.razonSocial }}</h3>
          <p>
            {{ appConfig.legales.domicilio }} <br />
            Teléfono: {{ appConfig.legales.telefono }} <br />
            Email: <NuxtLink :to="'mailto:' + appConfig.legales.email"> {{ appConfig.legales.email }}</NuxtLink>
          </p>
        </div>
      </div>
    </section>
  </NuxtLayout>
</template>

<script setup lang="ts">
const appConfig = useAppConfig();
</script>

<style>
@import url("~/assets/css/vans/legal.css");
</style>
