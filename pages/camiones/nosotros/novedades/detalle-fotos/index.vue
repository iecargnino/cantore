<template>
  <NuxtLayout name="camiones">
    <section id="news">
      <div class="pageWidth">
        <div class="breadcrumbs">
          <NuxtLink to="/camiones/nosotros/novedades">Novedades</NuxtLink>
          <span>Novedad con galería de fotos</span>
        </div>
        <div class="newsPhoto">
          <h2>Novedad con galería de fotos.</h2>
          <p>Vestibulum luctus ultrices mauris, vitae feugiat eros venenatis a. Integer commodo neque sit amet leo aliquam, nec suscipit leo scelerisque. Praesent ultricies dictum fringilla.</p>
          <Splide
            ref="main"
            aria-label="Galería de fotos"
            id="photoSlider"
            :options="{
              rewind: false,
              speed: 1000,
              pagination: true
            }"
          >
            <SplideSlide>
              <img
                src="~/public/images/camiones/nosotros/novedades/experiencia/01.jpg"
                alt="Galería foto 1"
              />
            </SplideSlide>
            <SplideSlide>
              <img
                src="~/public/images/camiones/nosotros/novedades/experiencia/02.jpg"
                alt="Galería foto 2"
              />
            </SplideSlide>
            <SplideSlide>
              <img
                src="~/public/images/camiones/nosotros/novedades/experiencia/03.jpg"
                alt="Galería foto 3"
              />
            </SplideSlide>
            <SplideSlide>
              <img
                src="~/public/images/camiones/nosotros/novedades/experiencia/04.jpg"
                alt="Galería foto 4"
              />
            </SplideSlide>
            <SplideSlide>
              <img
                src="~/public/images/camiones/nosotros/novedades/experiencia/05.jpg"
                alt="Galería foto 5"
              />
            </SplideSlide>
            <SplideSlide>
              <img
                src="~/public/images/camiones/nosotros/novedades/experiencia/06.jpg"
                alt="Galería foto 6"
              />
            </SplideSlide>
            <SplideSlide>
              <img
                src="~/public/images/camiones/nosotros/novedades/experiencia/07.jpg"
                alt="Galería foto 7"
              />
            </SplideSlide>
          </Splide>
        </div>
      </div>
    </section>

    <!-- Shortcuts-->
    <div id="shortcuts">
      <div class="pageWidth">
        <ul>
          <CamionesCardsShortcutCard
            titulo="Contacto"
            icon="/images/camiones/icons/phone.svg"
            link="/camiones/nosotros/contacto"
          >
          </CamionesCardsShortcutCard>

          <CamionesCardsShortcutCard
            titulo="Sucursales"
            icon="/images/camiones/icons/location.svg"
            link="/camiones/nosotros/sucursales"
          >
          </CamionesCardsShortcutCard>

          <CamionesCardsShortcutCard
            titulo="Nuestra historia"
            icon="/images/camiones/icons/users.svg"
            link="/camiones/nosotros/nuestra-historia"
          >
          </CamionesCardsShortcutCard>
        </ul>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
const appConfig = useAppConfig();

import { ref, onMounted } from "vue";
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/vue-splide/css";

const main = ref(null);
const thumbnails = ref(null);

onMounted(() => {
  if (main.value && thumbnails.value) {
    main.value.sync(thumbnails.value.splide);
  }
});
</script>

<style scope>
@import "~/assets/css/camiones/novedades.css";
</style>
