<template>
  <NuxtLayout name="selector">
    <ul class="BUs">
      <SelectorCardsUnidadNegocioCard
        v-if="appConfig.unidadesNegocio.autos"
        :delay="0"
        imagen="/images/selector/automovil.jpg"
        titulo="Autos"
        link="/autos"
      >
      </SelectorCardsUnidadNegocioCard>

      <SelectorCardsUnidadNegocioCard
        v-if="appConfig.unidadesNegocio.vans"
        :delay="200"
        imagen="/images/selector/van.jpg"
        titulo="Vans"
        link="/vans"
      >
      </SelectorCardsUnidadNegocioCard>

      <SelectorCardsUnidadNegocioCard
        v-if="appConfig.unidadesNegocio.camiones"
        :delay="400"
        imagen="/images/selector/camion.jpg"
        titulo="Camiones y Buses"
        link="/camiones"
      >
      </SelectorCardsUnidadNegocioCard>
    </ul>
  </NuxtLayout>
</template>

<script setup lang="ts">
const appConfig = useAppConfig();
</script>
