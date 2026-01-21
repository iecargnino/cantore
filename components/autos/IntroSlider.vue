<template>
  <Splide
    :options="{
      type: 'fade',
      arrows: false,
      pauseOnHover: false,
      rewind: true,
      autoplay: true,
      interval: 4000,
      speed: 1000,
    }"
    aria-label="Información y productos destacados"
    id="introSlider"
  >
    <!-- Slide -->
    <!-- Definir clase "light" o "dark" para cada slide según corresponda -->
    <SplideSlide
      data-aos="fade"
      data-aos-duration="1200"
      data-aos-delay="0"
      class="dark"
    >
      <div class="pageWidth">
        <div class="content">
          <h2>{{ appConfig.concesionario.razonSocial }}</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            vulputate viverra orci sed gravida.
          </p>
          <NuxtLink to="/autos/sobre-nosotros/nuestra-historia" class="btn"
            >Nuestra historia</NuxtLink
          >
        </div>
      </div>
      <picture>
        <source
          srcset="~/public/images/autos/home/intro/concesionario-m.jpg"
          type="image/jpeg"
          media="(max-width: 767px)"
        />
        <source
          srcset="~/public/images/autos/home/intro/concesionario-t.jpg"
          type="image/jpeg"
          media="(min-width: 768px) and (max-width:1023px)"
        />
        <source
          srcset="~/public/images/autos/home/intro/concesionario.jpg"
          type="image/jpeg"
          media="(min-width: 1024px)"
        />

        <img
          src="~/public/images/autos/home/intro/concesionario.jpg"
          alt="Sucursal"
        />
      </picture>
      <div class="fadeVertical"></div>
      <div class="fadeHorizontal"></div>
    </SplideSlide>

    <!-- Slide -->
    <!-- Definir clase "light" o "dark" para cada slide según corresponda -->
    <SplideSlide class="light">
      <div class="pageWidth">
        <div class="content">
          <h2>Clase A Sedán</h2>
          <p>Destaca en cualquier lugar</p>
          <NuxtLink to="/autos/modelos/clase-a-sedan" class="btn"
            >Más información</NuxtLink
          >
        </div>
      </div>
      <picture>
        <source
          srcset="~/public/images/autos/modelos/clase-a-sedan/intro-m.jpg"
          type="image/jpeg"
          media="(max-width: 767px)"
        />
        <source
          srcset="~/public/images/autos/modelos/clase-a-sedan/intro-t.jpg"
          type="image/jpeg"
          media="(min-width: 768px) and (max-width:1023px)"
        />
        <source
          srcset="~/public/images/autos/modelos/clase-a-sedan/intro.jpg"
          type="image/jpeg"
          media="(min-width: 1024px)"
        />

        <img
          src="~/public/images/autos/modelos/clase-a-sedan/intro.jpg"
          alt="Clase A Sedán"
        />
      </picture>
      <div class="fadeVertical"></div>
      <div class="fadeHorizontal"></div>
    </SplideSlide>

    <!-- Slide -->
    <!-- Definir clase "light" o "dark" para cada slide según corresponda -->
    <SplideSlide class="dark">
      <div class="pageWidth">
        <div class="content">
          <h2>Novedad</h2>
          <p>
            Praesent fringilla ultrices congue. Mauris suscipit vulputate
            tortor, et vehicula dui placerat non.
          </p>
          <NuxtLink
            to="/autos/sobre-nosotros/novedades/detalle-texto"
            class="btn"
            >Más información</NuxtLink
          >
        </div>
      </div>
      <picture>
        <source
          srcset="~/public/images/autos/home/intro/novedad-m.jpg"
          type="image/jpeg"
          media="(max-width: 767px)"
        />
        <source
          srcset="~/public/images/autos/home/intro/novedad-t.jpg"
          type="image/jpeg"
          media="(min-width: 768px) and (max-width:1023px)"
        />
        <source
          srcset="~/public/images/autos/home/intro/novedad.jpg"
          type="image/jpeg"
          media="(min-width: 1024px)"
        />

        <img
          src="~/public/images/autos/home/intro/novedad.jpg"
          alt="Inauguración de la sucursal Santa Rosa"
        />
      </picture>
      <div class="fadeVertical"></div>
      <div class="fadeHorizontal"></div>
    </SplideSlide>
  </Splide>
</template>

<script setup lang="ts">
const appConfig = useAppConfig();
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/vue-splide/css";

const { $refreshAos, $refreshHardAos } = useNuxtApp();

$refreshAos();

$refreshHardAos();
</script>

<style scope>
@import "~/assets/css/autos/intro-slider.css";
</style>
