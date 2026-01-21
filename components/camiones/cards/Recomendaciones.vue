<template>
  <div id="recomendacionesCamiones">
    <!-- Recomendaciones -->
    <div class="pageWidth">
      <h2>Productos y servicios destacados.</h2>
      <ul>
        <!-- Card -->
        <li
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="0"
        >
          <picture>
            <img
              src="~/public/images/camiones/home/productos-y-servicios/nuestros-camiones.jpg"
              alt="Nuestros camiones y buses"
            />
          </picture>
          <div class="content">
            <h3>Nuestros camiones <span v-if="appConfig.unidadesNegocio.buses">y buses</span></h3>
            <p>Conocé más de nuestros vehículos.</p>
            <NuxtLink
              to="/camiones/modelos/"
              class="btn secondary"
              >Más información</NuxtLink
            >
          </div>
        </li>
        <!-- Card -->
        <li
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="200"
        >
          <picture>
            <img
              src="~/public/images/camiones/home/productos-y-servicios/financiacion.jpg"
              alt="Financiación"
            />
          </picture>
          <div class="content">
            <h3>Financiación</h3>
            <p>Conocé una amplia gama de opciones para acceder a vehículos Mercedes-Benz de la manera más simple.</p>
            <NuxtLink
              to="/camiones/financiacion/mercedes-benz-financiera"
              class="btn secondary"
              >Más información</NuxtLink
            >
          </div>
        </li>
        <!-- Card -->
        <li
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="400"
        >
          <picture>
            <img
              src="~/public/images/camiones/home/productos-y-servicios/servicio-postventa.jpg"
              alt="Servicio postventa"
            />
          </picture>
          <div class="content">
            <h3>Repuestos Mercedes-Benz</h3>
            <p>La máxima disponibilidad de uso únicamente es posible con recambios originales Mercedes-Benz Trucks.</p>
            <NuxtLink
              to="/camiones/postventa/repuestos-y-accesorios"
              class="btn secondary"
              >Más información</NuxtLink
            >
          </div>
        </li>
        <!-- Card -->
        <!-- <li
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="400"
        >
          <picture>
            <img
              src="~/public/images/camiones/home/productos-y-servicios/novedades.jpg"
              alt="Novedades"
            />
          </picture>
          <div class="content">
            <h3>Novedades</h3>
            <p>Descubrí nuestras últimas novedades y actualizaciones.</p>
            <NuxtLink
              to="/camiones/nosotros/novedades"
              class="btn secondary"
              >Más información</NuxtLink
            >
          </div>
        </li> -->
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
const appConfig = useAppConfig();
</script>

<style scope>
@import "~/assets/css/camiones/recomendaciones.css";
</style>
