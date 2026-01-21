<template>
  <NuxtLayout name="autos">
    <section id="news">
      <div class="pageWidth">
        <h2>Novedades</h2>
        <ul class="newsIndex">
          <AutosCardsNovedadesCard
            titulo="Novedad con textos."
            descripcion="Vestibulum molestie tristique erat, vitae posuere risus cursus et."
            imagen="/images/autos/sobre-nosotros/novedades/novedad-texto-m.jpg"
            link="/autos/sobre-nosotros/novedades/detalle-texto"
          >
          </AutosCardsNovedadesCard>
          <AutosCardsNovedadesCard
            titulo="Novedad con galería de fotos."
            descripcion="Vestibulum luctus ultrices mauris, vitae feugiat eros venenatis a. Integer commodo neque sit amet leo aliquam, nec suscipit leo scelerisque. Praesent ultricies dictum fringilla."
            imagen="/images/autos/sobre-nosotros/novedades/novedad-fotos-m.jpg"
            link="/autos/sobre-nosotros/novedades/detalle-fotos"
          >
          </AutosCardsNovedadesCard>
          <AutosCardsNovedadesCard
            titulo="Novedad con video."
            descripcion="Sed vulputate, magna non eleifend aliquam, turpis ante sollicitudin purus, ut consequat erat lorem id turpis. Nulla eget gravida mauris, a ultricies ante."
            imagen="/images/autos/sobre-nosotros/novedades/novedad-video-m.jpg"
            link="/autos/sobre-nosotros/novedades/detalle-video"
          >
          </AutosCardsNovedadesCard>
        </ul>
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

<style scope>
@import "~/assets/css/autos/novedades.css";
</style>
