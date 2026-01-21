<template>
  <NuxtLayout name="camiones">
    <section id="news">
      <div class="pageWidth">
        <div class="breadcrumbs">
          <NuxtLink to="/camiones/nosotros/novedades">Novedades</NuxtLink>
          <span>Novedad con video</span>
        </div>
        <div class="newsVideo">
          <h2>Novedad con video.</h2>
          <p>Sed vulputate, magna non eleifend aliquam, turpis ante sollicitudin purus, ut consequat erat lorem id turpis. Nulla eget gravida mauris, a ultricies ante.</p>
          <div class="wrapperVideo">
            <iframe
              src="https://www.youtube.com/embed/TZgaaLLQWAs?si=JpaQBjgNzKHID_BU"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
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
            link="enlace"
          >
          </CamionesCardsShortcutCard>

          <CamionesCardsShortcutCard
            titulo="Realizar consulta"
            icon="/images/camiones/icons/mail.svg"
            link="enlace"
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
