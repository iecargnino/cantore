<template>
  <!-- Slider para página inicial-->
  <div id="sucursales">
    <div class="pageWidth">
      <h2>Nuestras sucursales.</h2>
      <ul>
        <!-- Sucursal -->
        <li v-for="sucursal in appConfig.concesionario.sucursales">
          <SucursalCard :sucursal="sucursal"></SucursalCard>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import SucursalCard from "@/components/camiones/cards/SucursalCard.vue";
const appConfig = useAppConfig();
</script>

<style scope>
@import "~/assets/css/camiones/sucursales.css";
</style>
