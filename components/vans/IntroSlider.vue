<template>
  <Splide
    :options="{
      type: 'fade',
      arrows: false,
      pauseOnHover: false,
      rewind: true,
      autoplay: true,
      interval: 4000,
      speed: 1000
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
          <h2>Nueva Vito Mixto</h2>
          <p>Una van multiusos, que se adapta a las tareas más exigentes.</p>
          <NuxtLink
            to="/vans/modelos/vito-mixto"
            class="btn"
            >Más información</NuxtLink
          >
        </div>
      </div>
      <picture>
        <source
          srcset="~/public/images/vans/home/intro/vito-mixto-m.jpg"
          type="image/jpeg"
          media="(max-width: 767px)"
        />
        <source
          srcset="~/public/images/vans/home/intro/vito-mixto-t.jpg"
          type="image/jpeg"
          media="(min-width: 768px) and (max-width:1023px)"
        />
        <source
          srcset="~/public/images/vans/home/intro/vito-mixto.jpg"
          type="image/jpeg"
          media="(min-width: 1024px)"
        />

        <img
          src="~/public/images/vans/home/intro/vito-mixto.jpg"
          alt="Nueva Vito Mixto"
        />
      </picture>
      <div class="fadeVertical"></div>
      <div class="fadeHorizontal"></div>
    </SplideSlide>

    <SplideSlide
      data-aos="fade"
      data-aos-duration="1200"
      data-aos-delay="0"
      class="dark"
    >
      <div class="pageWidth">
        <div class="content">
          <h2>Nueva Vito Tourer</h2>
          <p>Confort, elegancia y un amplio espacio para vos y tus pasajeros.</p>
          <NuxtLink
            to="/vans/modelos/vito-tourer"
            class="btn"
            >Más información</NuxtLink
          >
        </div>
      </div>
      <picture>
        <source
          srcset="~/public/images/vans/home/intro/vito-tourer-m.jpg"
          type="image/jpeg"
          media="(max-width: 767px)"
        />
        <source
          srcset="~/public/images/vans/home/intro/vito-tourer-t.jpg"
          type="image/jpeg"
          media="(min-width: 768px) and (max-width:1023px)"
        />
        <source
          srcset="~/public/images/vans/home/intro/vito-tourer.jpg"
          type="image/jpeg"
          media="(min-width: 1024px)"
        />

        <img
          src="~/public/images/vans/home/intro/vito-tourer.jpg"
          alt="Nueva Vito Tourer"
        />
      </picture>
      <div class="fadeVertical"></div>
      <div class="fadeHorizontal"></div>
    </SplideSlide>

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
          <p>Más de 50 años de trayectoria junto a Mercedes-Benz.</p>
          <NuxtLink
            to="/vans/sobre-nosotros/nuestra-historia"
            class="btn"
            >Nuestra historia</NuxtLink
          >
        </div>
      </div>
      <picture>
        <source
          srcset="~/public/images/vans/home/intro/concesionario-m.jpg"
          type="image/jpeg"
          media="(max-width: 767px)"
        />
        <source
          srcset="~/public/images/vans/home/intro/concesionario-t.jpg"
          type="image/jpeg"
          media="(min-width: 768px) and (max-width:1023px)"
        />
        <source
          srcset="~/public/images/vans/home/intro/concesionario.jpg"
          type="image/jpeg"
          media="(min-width: 1024px)"
        />

        <img
          src="~/public/images/vans/home/intro/concesionario.jpg"
          alt="Sucursal"
        />
      </picture>
      <div class="fadeVertical"></div>
      <div class="fadeHorizontal"></div>
    </SplideSlide>

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
          <h2>Sprinter Furgón</h2>
          <p>Seguridad, diseño y confort</p>
          <NuxtLink
            to="/vans/modelos/sprinter-furgon"
            class="btn"
            >Más información</NuxtLink
          >
        </div>
      </div>
      <picture>
        <source
          srcset="~/public/images/vans/modelos/sprinter-furgon/intro-m.jpg"
          type="image/jpeg"
          media="(max-width: 767px)"
        />
        <source
          srcset="~/public/images/vans/modelos/sprinter-furgon/intro-t.jpg"
          type="image/jpeg"
          media="(min-width: 768px) and (max-width:1023px)"
        />
        <source
          srcset="~/public/images/vans/modelos/sprinter-furgon/intro.jpg"
          type="image/jpeg"
          media="(min-width: 1024px)"
        />

        <img
          src="~/public/images/vans/modelos/sprinter-furgon/intro.jpg"
          alt="Sprinter Furgón"
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
</script>

<style scope>
@import "~/assets/css/vans/intro-slider.css";
</style>
