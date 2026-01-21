<template>
  <NuxtLayout name="autos">
    <section id="news">
      <div class="pageWidth">
        <div class="breadcrumbs">
          <NuxtLink to="/autos/sobre-nosotros/novedades">Novedades</NuxtLink>
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
          <AutosCardsShortcutCard
            titulo="Contacto"
            descripcion="Comunicate con nosotros por diferentes vías."
            icon="/images/autos/icons/phone.svg"
            link="enlace"
          >
          </AutosCardsShortcutCard>

          <AutosCardsShortcutCard
            titulo="Realizar consulta"
            descripcion="Enviá tu consulta y te responderemos a la brevedad."
            icon="/images/autos/icons/mail.svg"
            link="enlace"
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
