<template>
  <NuxtLayout name="autos">
    <section id="news">
      <div class="pageWidth">
        <div class="breadcrumbs">
          <NuxtLink to="/autos/sobre-nosotros/novedades">Novedades</NuxtLink>
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
                src="~/public/images/autos/sobre-nosotros/novedades/experiencia/01.jpg"
                alt="Galería foto 1"
              />
            </SplideSlide>
            <SplideSlide>
              <img
                src="~/public/images/autos/sobre-nosotros/novedades/experiencia/02.jpg"
                alt="Galería foto 2"
              />
            </SplideSlide>
            <SplideSlide>
              <img
                src="~/public/images/autos/sobre-nosotros/novedades/experiencia/03.jpg"
                alt="Galería foto 3"
              />
            </SplideSlide>
            <SplideSlide>
              <img
                src="~/public/images/autos/sobre-nosotros/novedades/experiencia/04.jpg"
                alt="Galería foto 4"
              />
            </SplideSlide>
            <SplideSlide>
              <img
                src="~/public/images/autos/sobre-nosotros/novedades/experiencia/05.jpg"
                alt="Galería foto 5"
              />
            </SplideSlide>
            <SplideSlide>
              <img
                src="~/public/images/autos/sobre-nosotros/novedades/experiencia/06.jpg"
                alt="Galería foto 6"
              />
            </SplideSlide>
            <SplideSlide>
              <img
                src="~/public/images/autos/sobre-nosotros/novedades/experiencia/07.jpg"
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
          <AutosCardsShortcutCard
            titulo="Contacto"
            descripcion="Comunicate con nosotros por diferentes vías."
            icon="/images/autos/icons/phone.svg"
            link="/autos/sobre-nosotros/contacto"
          >
          </AutosCardsShortcutCard>

          <AutosCardsShortcutCard
            titulo="Sucursales"
            descripcion="Te esperamos en nuestras sucursales."
            icon="/images/autos/icons/location.svg"
            link="/autos/sobre-nosotros/sucursales"
          >
          </AutosCardsShortcutCard>

          <AutosCardsShortcutCard
            titulo="Nuestra historia"
            descripcion="Conocé nuestra trayectoria."
            icon="/images/autos/icons/users.svg"
            link="/autos/sobre-nosotros/nuestra-historia"
          >
          </AutosCardsShortcutCard>
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

// import { onBeforeMount, onMounted, onUpdated, ref } from "vue";

// const main = ref();
// const thumbnails = ref();
// onMounted(() => {
//   console.log(main);
//   main.value.sync(thumbnails);
// });
// onNuxtReady(() => {
//   console.log(main);
//   main.value;
//   main.value.sync(thumbnails);
// });

const main = ref(null);
const thumbnails = ref(null);

onMounted(() => {
  if (main.value && thumbnails.value) {
    main.value.sync(thumbnails.value.splide);
  }
});
</script>

<style scope>
@import "~/assets/css/autos/novedades.css";
</style>
