<template>
  <NuxtLayout name="vans">
    <section id="news">
      <div class="pageWidth">
        <h2>Novedades</h2>
        <ul class="newsIndex">
          <VansCardsNovedadesCard
            titulo="Novedad con textos."
            descripcion="Vestibulum molestie tristique erat, vitae posuere risus cursus et."
            imagen="/images/vans/sobre-nosotros/novedades/novedad-texto-m.jpg"
            link="/vans/sobre-nosotros/novedades/detalle-texto"
          >
          </VansCardsNovedadesCard>
          <VansCardsNovedadesCard
            titulo="Novedad con galería de fotos."
            descripcion="Vestibulum luctus ultrices mauris, vitae feugiat eros venenatis a. Integer commodo neque sit amet leo aliquam, nec suscipit leo scelerisque. Praesent ultricies dictum fringilla."
            imagen="/images/vans/sobre-nosotros/novedades/novedad-fotos-m.jpg"
            link="/vans/sobre-nosotros/novedades/detalle-fotos"
          >
          </VansCardsNovedadesCard>
          <VansCardsNovedadesCard
            titulo="Novedad con video."
            descripcion="Sed vulputate, magna non eleifend aliquam, turpis ante sollicitudin purus, ut consequat erat lorem id turpis. Nulla eget gravida mauris, a ultricies ante."
            imagen="/images/vans/sobre-nosotros/novedades/novedad-video-m.jpg"
            link="/vans/sobre-nosotros/novedades/detalle-video"
          >
          </VansCardsNovedadesCard>
        </ul>
      </div>
    </section>

    <!-- Shortcuts-->
    <div id="shortcuts">
      <div class="pageWidth">
        <ul>
          <VansCardsShortcutCard
            titulo="Contacto"
            descripcion="Comunicate con nosotros por diferentes vías."
            icon="/images/vans/icons/phone.svg"
            link="/vans/sobre-nosotros/contacto"
          >
          </VansCardsShortcutCard>

          <VansCardsShortcutCard
            titulo="Sucursales"
            descripcion="Te esperamos en nuestras sucursales."
            icon="/images/vans/icons/location.svg"
            link="/vans/sobre-nosotros/sucursales"
          >
          </VansCardsShortcutCard>

          <VansCardsShortcutCard
            titulo="Nuestra historia"
            descripcion="Conocé nuestra trayectoria."
            icon="/images/vans/icons/users.svg"
            link="/vans/sobre-nosotros/nuestra-historia"
          >
          </VansCardsShortcutCard>
        </ul>
      </div>
    </div>
  </NuxtLayout>
</template>

<style scope>
@import "~/assets/css/vans/novedades.css";
</style>
