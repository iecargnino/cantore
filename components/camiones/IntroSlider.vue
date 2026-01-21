<template>
  <div class="wrapperIntroSlider">
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
            <h3>Nosotros</h3>
            <h2>{{ appConfig.concesionario.razonSocial }}</h2>
            <p>Más de 50 años de trayectoria junto a Mercedes-Benz.</p>
            <NuxtLink
              to="/camiones/nosotros/nuestra-historia"
              class="btn"
              >Nuestra historia</NuxtLink
            >
          </div>
        </div>
        <picture>
          <source
            srcset="~/public/images/camiones/home/intro/concesionario-m.jpg"
            type="image/jpeg"
            media="(max-width: 767px)"
          />
          <source
            srcset="~/public/images/camiones/home/intro/concesionario-t.jpg"
            type="image/jpeg"
            media="(min-width: 768px) and (max-width:1023px)"
          />
          <source
            srcset="~/public/images/camiones/home/intro/concesionario.jpg"
            type="image/jpeg"
            media="(min-width: 1024px)"
          />

          <img
            src="~/public/images/camiones/home/intro/concesionario.jpg"
            alt="Sucursal"
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
            <h3>Nuestros Camiones</h3>
            <h2>Atego. <span>Nueva generación.</span></h2>
            <p>Eficiencia en el transporte semipesado de cargas.</p>
            <NuxtLink
              to="/camiones/modelos/atego"
              class="btn"
              >Más información</NuxtLink
            >
          </div>
        </div>
        <picture>
          <source
            srcset="~/public/images/camiones/home/intro/atego-m.jpg"
            type="image/jpeg"
            media="(max-width: 767px)"
          />
          <source
            srcset="~/public/images/camiones/home/intro/atego-t.jpg"
            type="image/jpeg"
            media="(min-width: 768px) and (max-width:1023px)"
          />
          <source
            srcset="~/public/images/camiones/home/intro/atego.jpg"
            type="image/jpeg"
            media="(min-width: 1024px)"
          />

          <img
            src="~/public/images/camiones/home/intro/atego.jpg"
            alt="Atego"
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
            <h3>Nuestros Camiones</h3>
            <h2>Accelo. <span>Nueva generación.</span></h2>
            <p>La agilidad de una nueva generación.</p>
            <NuxtLink
              to="/camiones/modelos/accelo"
              class="btn"
              >Más información</NuxtLink
            >
          </div>
        </div>
        <picture>
          <source
            srcset="~/public/images/camiones/home/intro/accelo-m.jpg"
            type="image/jpeg"
            media="(max-width: 767px)"
          />
          <source
            srcset="~/public/images/camiones/home/intro/accelo-t.jpg"
            type="image/jpeg"
            media="(min-width: 768px) and (max-width:1023px)"
          />
          <source
            srcset="~/public/images/camiones/home/intro/accelo.jpg"
            type="image/jpeg"
            media="(min-width: 1024px)"
          />

          <img
            src="~/public/images/camiones/home/intro/accelo.jpg"
            alt="Accelo"
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
            <h3>Nuestros Camiones</h3>
            <h2>Nuevos Actros 2045 y Actros 2545.</h2>
            <p>La fuerza de un clásico.</p>
            <NuxtLink
              to="/camiones/modelos/actros-2045-y-2545"
              class="btn"
              >Más información</NuxtLink
            >
          </div>
        </div>
        <picture>
          <source
            srcset="~/public/images/camiones/home/intro/actros-2045-2545-m.jpg"
            type="image/jpeg"
            media="(max-width: 767px)"
          />
          <source
            srcset="~/public/images/camiones/home/intro/actros-2045-2545-t.jpg"
            type="image/jpeg"
            media="(min-width: 768px) and (max-width:1023px)"
          />
          <source
            srcset="~/public/images/camiones/home/intro/actros-2045-2545.jpg"
            type="image/jpeg"
            media="(min-width: 1024px)"
          />

          <img
            src="~/public/images/camiones/home/intro/actros-2045-2545.jpg"
            alt="Actros 2045 y Actros 2545."
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
            <h3>Nuestros Camiones</h3>
            <h2>Actros.</h2>
            <p>Eficiencia que avanza.</p>
            <NuxtLink
              to="/camiones/modelos/actros"
              class="btn"
              >Más información</NuxtLink
            >
          </div>
        </div>
        <picture>
          <source
            srcset="~/public/images/camiones/home/intro/actros-m.jpg"
            type="image/jpeg"
            media="(max-width: 767px)"
          />
          <source
            srcset="~/public/images/camiones/home/intro/actros-t.jpg"
            type="image/jpeg"
            media="(min-width: 768px) and (max-width:1023px)"
          />
          <source
            srcset="~/public/images/camiones/home/intro/actros.jpg"
            type="image/jpeg"
            media="(min-width: 1024px)"
          />

          <img
            src="~/public/images/camiones/home/intro/actros.jpg"
            alt="Actros"
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
            <h3>Nuestros Camiones</h3>
            <h2>Arocs.</h2>
            <p>Fuerza Todo Terreno.</p>
            <NuxtLink
              to="/camiones/modelos/arocs"
              class="btn"
              >Más información</NuxtLink
            >
          </div>
        </div>
        <picture>
          <source
            srcset="~/public/images/camiones/home/intro/arocs-m.jpg"
            type="image/jpeg"
            media="(max-width: 767px)"
          />
          <source
            srcset="~/public/images/camiones/home/intro/arocs-t.jpg"
            type="image/jpeg"
            media="(min-width: 768px) and (max-width:1023px)"
          />
          <source
            srcset="~/public/images/camiones/home/intro/arocs.jpg"
            type="image/jpeg"
            media="(min-width: 1024px)"
          />

          <img
            src="~/public/images/camiones/home/intro/arocs.jpg"
            alt="Arocs"
          />
        </picture>
        <div class="fadeVertical"></div>
        <div class="fadeHorizontal"></div>
      </SplideSlide>
    </Splide>
  </div>
</template>

<script setup lang="ts">
const appConfig = useAppConfig();
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/vue-splide/css";
</script>

<style scope>
@import "~/assets/css/camiones/intro-slider.css";
</style>
