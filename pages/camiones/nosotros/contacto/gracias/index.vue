<template>
  <NuxtLayout name="camiones">
    <CamionesIntro
      area="Nosotros"
      titulo="Contacto"
      descripcion="Recibimos tu mensaje."
      imagenURL="/images/camiones/nosotros/contacto/"
    >
    </CamionesIntro>

    <div id="gracias">
      <div class="pageWidth">
        <h1>Gracias por contactarnos.</h1>
        <p>Nos comunicaremos a la brevedad para responder tu consulta.</p>
      </div>
    </div>

    <!-- Shortcuts-->
    <div id="shortcuts">
      <div class="pageWidth">
        <ul>
          <CamionesCardsShortcutCard
            titulo="Sucursales"
            icon="/images/camiones/icons/location.svg"
            link="/camiones/nosotros/sucursales"
          >
          </CamionesCardsShortcutCard>

          <!-- <CamionesCardsShortcutCard
            titulo="Novedades"
            icon="/images/camiones/icons/news.svg"
            link="/camiones/nosotros/novedades"
          >
          </CamionesCardsShortcutCard> -->

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
@import "~/assets/css/camiones/gracias.css";
</style>
