<template>
  <NuxtLayout name="camiones">
    <section id="news">
      <div class="pageWidth">
        <h2>Novedades</h2>
        <ul class="newsIndex">
          <CamionesCardsNovedadesCard
            titulo="Novedad con textos."
            descripcion="Vestibulum molestie tristique erat, vitae posuere risus cursus et."
            imagen="/images/camiones/nosotros/novedades/novedad-texto-m.jpg"
            link="/camiones/nosotros/novedades/detalle-texto"
          >
          </CamionesCardsNovedadesCard>
          <CamionesCardsNovedadesCard
            titulo="Novedad con galería de fotos."
            descripcion="Vestibulum luctus ultrices mauris, vitae feugiat eros venenatis a. Integer commodo neque sit amet leo aliquam, nec suscipit leo scelerisque. Praesent ultricies dictum fringilla."
            imagen="/images/camiones/nosotros/novedades/novedad-fotos-m.jpg"
            link="/camiones/nosotros/novedades/detalle-fotos"
          >
          </CamionesCardsNovedadesCard>
          <CamionesCardsNovedadesCard
            titulo="Novedad con video."
            descripcion="Sed vulputate, magna non eleifend aliquam, turpis ante sollicitudin purus, ut consequat erat lorem id turpis. Nulla eget gravida mauris, a ultricies ante."
            imagen="/images/camiones/nosotros/novedades/novedad-video-m.jpg"
            link="/camiones/nosotros/novedades/detalle-video"
          >
          </CamionesCardsNovedadesCard>
        </ul>
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

<style scope>
@import "~/assets/css/camiones/novedades.css";
</style>
